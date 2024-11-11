import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const getBlockedDates = async () => {
  try {
    const { data, error } = await supabase
      .from('bookings')
      .select('check_in, check_out')
      .eq('status', 'confirmed');
      
    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error('Error fetching blocked dates:', error);
    return [];
  }
};

export const createBooking = async (bookingData) => {
  try {
    const { data, error } = await supabase
      .from('bookings')
      .insert([bookingData])
      .select();
      
    if (error) throw error;
    return { success: true, data };
  } catch (error) {
    console.error('Error creating booking:', error);
    return { success: false, error };
  }
};

export const checkAvailability = async (checkIn, checkOut) => {
  try {
    const { data, error } = await supabase
      .from('bookings')
      .select('*')
      .or(`check_in.gte.${checkIn},check_out.lte.${checkOut}`)
      .eq('status', 'confirmed');
      
    if (error) throw error;
    return { available: data.length === 0 };
  } catch (error) {
    console.error('Error checking availability:', error);
    throw error;
  }
};