import mysql from 'mysql2';

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'aldafa_villa',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
}).promise();

export async function query(sql, params) {
  try {
    const [results] = await pool.execute(sql, params);
    return results;
  } catch (error) {
    console.error('Database Error:', error);
    throw error;
  }
}

export async function checkAvailability(checkIn, checkOut) {
  const sql = `
    SELECT COUNT(*) as count 
    FROM bookings 
    WHERE status = 'confirmed' 
    AND ((check_in <= ? AND check_out >= ?) 
    OR (check_in <= ? AND check_out >= ?) 
    OR (check_in >= ? AND check_out <= ?))
  `;
  
  const result = await query(sql, [
    checkOut, checkIn, 
    checkOut, checkOut,
    checkIn, checkOut
  ]);
  
  return { available: result[0].count === 0 };
}

export async function createBooking(bookingData) {
  const sql = `
    INSERT INTO bookings 
    (guest_name, guest_email, guest_phone, check_in, check_out, 
     guests_count, total_price, status) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;
  
  const result = await query(sql, [
    bookingData.guestName,
    bookingData.guestEmail,
    bookingData.guestPhone,
    bookingData.checkIn,
    bookingData.checkOut,
    bookingData.guestsCount,
    bookingData.totalPrice,
    'pending'
  ]);
  
  return { success: true, id: result.insertId };
}

export async function getImages() {
  const sql = `
    SELECT * FROM images 
    WHERE is_active = true 
    ORDER BY created_at DESC
  `;
  
  return await query(sql);
}

export async function addImage(imageData) {
  const sql = `
    INSERT INTO images 
    (title, description, category, file_path, is_active) 
    VALUES (?, ?, ?, ?, ?)
  `;
  
  const result = await query(sql, [
    imageData.title,
    imageData.description,
    imageData.category,
    imageData.filePath,
    true
  ]);
  
  return { success: true, id: result.insertId };
}