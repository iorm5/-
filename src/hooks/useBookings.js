import { useState, useEffect } from 'react';
import { query } from '../lib/db';

export function useBookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBookings();
  }, []);

  async function fetchBookings() {
    try {
      const data = await query(
        'SELECT * FROM bookings ORDER BY created_at DESC'
      );
      setBookings(data);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    } finally {
      setLoading(false);
    }
  }

  async function createBooking(bookingData) {
    try {
      const result = await query(
        `INSERT INTO bookings 
        (guest_name, guest_email, guest_phone, check_in, check_out, 
         guests_count, total_price, status) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          bookingData.guestName,
          bookingData.guestEmail,
          bookingData.guestPhone,
          bookingData.checkIn,
          bookingData.checkOut,
          bookingData.guestsCount,
          bookingData.totalPrice,
          'pending'
        ]
      );

      if (result.insertId) {
        const [newBooking] = await query(
          'SELECT * FROM bookings WHERE id = ?',
          [result.insertId]
        );
        setBookings([newBooking, ...bookings]);
        return { success: true, data: newBooking };
      }
      throw new Error('Failed to create booking');
    } catch (error) {
      console.error('Error creating booking:', error);
      return { success: false, error };
    }
  }

  return { bookings, loading, createBooking };
}