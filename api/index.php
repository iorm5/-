<?php
header('Content-Type: application/json');

// Load environment variables
$env = parse_ini_file('../.env');
foreach ($env as $key => $value) {
    putenv("$key=$value");
}

// Database configuration
$db_config = [
    'host' => getenv('DB_HOST') ?: 'localhost',
    'user' => getenv('DB_USER') ?: 'your_db_user',
    'pass' => getenv('DB_PASSWORD') ?: 'your_db_password',
    'name' => getenv('DB_NAME') ?: 'aldafa_villa'
];

// Create database connection
$mysqli = new mysqli($db_config['host'], $db_config['user'], $db_config['pass'], $db_config['name']);

if ($mysqli->connect_error) {
    http_response_code(500);
    echo json_encode(['error' => 'Database connection failed']);
    exit;
}

$mysqli->set_charset('utf8mb4');

// Get request method and path
$method = $_SERVER['REQUEST_METHOD'];
$request = trim($_SERVER['PATH_INFO'] ?? '', '/');

// Route handling
switch ($request) {
    case 'bookings':
        handleBookings($mysqli, $method);
        break;
        
    case 'availability':
        handleAvailability($mysqli);
        break;
        
    case 'images':
        handleImages($mysqli, $method);
        break;
        
    default:
        http_response_code(404);
        echo json_encode(['error' => 'Not found']);
}

function handleBookings($mysqli, $method) {
    if ($method === 'GET') {
        $result = $mysqli->query('SELECT * FROM bookings ORDER BY created_at DESC');
        $bookings = $result->fetch_all(MYSQLI_ASSOC);
        echo json_encode(['data' => $bookings]);
    } 
    elseif ($method === 'POST') {
        $data = json_decode(file_get_contents('php://input'), true);
        
        $stmt = $mysqli->prepare('INSERT INTO bookings (guest_name, guest_email, guest_phone, check_in, check_out, guests_count, total_price, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?)');
        
        $stmt->bind_param('sssssiis', 
            $data['guestName'],
            $data['guestEmail'],
            $data['guestPhone'],
            $data['checkIn'],
            $data['checkOut'],
            $data['guestsCount'],
            $data['totalPrice'],
            'pending'
        );
        
        if ($stmt->execute()) {
            echo json_encode(['success' => true, 'id' => $mysqli->insert_id]);
        } else {
            http_response_code(500);
            echo json_encode(['error' => 'Failed to create booking']);
        }
    }
}

function handleAvailability($mysqli) {
    $checkIn = $_GET['checkIn'] ?? '';
    $checkOut = $_GET['checkOut'] ?? '';
    
    $stmt = $mysqli->prepare(
        'SELECT COUNT(*) as count FROM bookings 
        WHERE status = "confirmed" 
        AND ((check_in <= ? AND check_out >= ?) 
        OR (check_in <= ? AND check_out >= ?) 
        OR (check_in >= ? AND check_out <= ?))'
    );
    
    $stmt->bind_param('ssssss', 
        $checkOut, $checkIn,
        $checkOut, $checkOut,
        $checkIn, $checkOut
    );
    
    $stmt->execute();
    $result = $stmt->get_result()->fetch_assoc();
    
    echo json_encode(['available' => $result['count'] === '0']);
}

function handleImages($mysqli, $method) {
    if ($method === 'GET') {
        $result = $mysqli->query('SELECT * FROM images WHERE is_active = 1 ORDER BY created_at DESC');
        $images = $result->fetch_all(MYSQLI_ASSOC);
        echo json_encode(['data' => $images]);
    }
    elseif ($method === 'POST') {
        if (!empty($_FILES['file'])) {
            $file = $_FILES['file'];
            $fileName = uniqid() . '_' . $file['name'];
            $uploadPath = '../uploads/' . $fileName;
            
            if (move_uploaded_file($file['tmp_name'], $uploadPath)) {
                $stmt = $mysqli->prepare('INSERT INTO images (title, description, category, file_path, is_active) VALUES (?, ?, ?, ?, 1)');
                $stmt->bind_param('ssss',
                    $_POST['title'],
                    $_POST['description'],
                    $_POST['category'],
                    '/uploads/' . $fileName
                );
                
                if ($stmt->execute()) {
                    echo json_encode(['success' => true, 'id' => $mysqli->insert_id]);
                } else {
                    http_response_code(500);
                    echo json_encode(['error' => 'Failed to save image record']);
                }
            } else {
                http_response_code(500);
                echo json_encode(['error' => 'Failed to upload file']);
            }
        }
    }
}