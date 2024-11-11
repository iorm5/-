import { useState } from 'react';
import { checkAvailability as checkBookingAvailability } from '../lib/db';

export function useAvailability() {
  const [loading, setLoading] = useState(false);

  const checkAvailability = async (checkIn, checkOut) => {
    setLoading(true);
    try {
      const result = await checkBookingAvailability(checkIn, checkOut);
      return result;
    } catch (error) {
      console.error('Error checking availability:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { checkAvailability, loading };
}