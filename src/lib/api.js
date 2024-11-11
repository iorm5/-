const API_URL = import.meta.env.VITE_API_URL || '/api';

export async function fetchBookings() {
  const response = await fetch(`${API_URL}/bookings`);
  if (!response.ok) throw new Error('Failed to fetch bookings');
  return response.json();
}

export async function createBooking(bookingData) {
  const response = await fetch(`${API_URL}/bookings`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(bookingData),
  });
  if (!response.ok) throw new Error('Failed to create booking');
  return response.json();
}

export async function checkAvailability(checkIn, checkOut) {
  const response = await fetch(`${API_URL}/availability?checkIn=${checkIn}&checkOut=${checkOut}`);
  if (!response.ok) throw new Error('Failed to check availability');
  return response.json();
}

export async function fetchImages() {
  const response = await fetch(`${API_URL}/images`);
  if (!response.ok) throw new Error('Failed to fetch images');
  return response.json();
}

export async function uploadImage(formData) {
  const response = await fetch(`${API_URL}/images`, {
    method: 'POST',
    body: formData,
  });
  if (!response.ok) throw new Error('Failed to upload image');
  return response.json();
}