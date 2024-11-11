import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { supabase } from '../lib/supabase';
import { toast } from 'react-hot-toast';

function AvailabilityChecker() {
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const [guests, setGuests] = useState(1);
  const [isChecking, setIsChecking] = useState(false);
  const [availability, setAvailability] = useState(null);
  const [blockedDates, setBlockedDates] = useState([]);

  useEffect(() => {
    fetchBlockedDates();
  }, []);

  const fetchBlockedDates = async () => {
    try {
      const { data, error } = await supabase
        .from('bookings')
        .select('check_in, check_out')
        .not('status', 'eq', 'cancelled');

      if (error) throw error;

      const dates = [];
      data.forEach(booking => {
        const start = new Date(booking.check_in);
        const end = new Date(booking.check_out);
        const date = new Date(start);

        while (date <= end) {
          dates.push(new Date(date));
          date.setDate(date.getDate() + 1);
        }
      });

      setBlockedDates(dates);
    } catch (error) {
      console.error('Error fetching blocked dates:', error);
      toast.error('حدث خطأ في تحميل التواريخ المحجوزة');
    }
  };

  const checkAvailability = async () => {
    if (!checkIn || !checkOut) {
      toast.error('الرجاء اختيار تواريخ الوصول والمغادرة');
      return;
    }

    setIsChecking(true);
    try {
      const { data: existingBookings, error } = await supabase
        .from('bookings')
        .select('*')
        .or(`check_in.lte.${checkOut.toISOString()},check_out.gte.${checkIn.toISOString()}`)
        .not('status', 'eq', 'cancelled');

      if (error) throw error;

      const isAvailable = !existingBookings?.length;
      
      setAvailability({
        available: isAvailable,
        message: isAvailable 
          ? 'الفيلا متوفرة في التواريخ المحددة! 🎉'
          : 'عذراً، الفيلا محجوزة في هذه الفترة. يرجى اختيار تواريخ أخرى.'
      });

      if (isAvailable) {
        toast.success('الفيلا متوفرة في التواريخ المحددة!');
      } else {
        toast.error('عذراً، الفيلا محجوزة في هذه الفترة');
      }
    } catch (error) {
      console.error('Error checking availability:', error);
      toast.error('حدث خطأ أثناء التحقق من التوفر');
    } finally {
      setIsChecking(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-semibold mb-4 text-center">تحقق من التوفر</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            تاريخ الوصول
          </label>
          <DatePicker
            selected={checkIn}
            onChange={date => {
              setCheckIn(date);
              setAvailability(null);
            }}
            selectsStart
            startDate={checkIn}
            endDate={checkOut}
            minDate={new Date()}
            excludeDates={blockedDates}
            dateFormat="dd/MM/yyyy"
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholderText="اختر تاريخ الوصول"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            تاريخ المغادرة
          </label>
          <DatePicker
            selected={checkOut}
            onChange={date => {
              setCheckOut(date);
              setAvailability(null);
            }}
            selectsEnd
            startDate={checkIn}
            endDate={checkOut}
            minDate={checkIn}
            excludeDates={blockedDates}
            dateFormat="dd/MM/yyyy"
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholderText="اختر تاريخ المغادرة"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            عدد الضيوف
          </label>
          <select
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            {[1, 2, 3, 4, 5, 6].map(num => (
              <option key={num} value={num}>{num} ضيف</option>
            ))}
          </select>
        </div>
      </div>

      <button
        onClick={checkAvailability}
        disabled={isChecking || !checkIn || !checkOut}
        className={`mt-4 w-full py-2 px-4 rounded-md text-white font-medium transition-colors
          ${isChecking || !checkIn || !checkOut
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-blue-600 hover:bg-blue-700'
          }`}
      >
        {isChecking ? 'جاري التحقق...' : 'تحقق من التوفر'}
      </button>

      {availability && (
        <div className={`mt-4 p-4 rounded-md ${
          availability.available
            ? 'bg-green-100 text-green-800'
            : 'bg-red-100 text-red-800'
        }`}>
          <p className="text-center font-medium">{availability.message}</p>
          {availability.available && (
            <div className="mt-4 text-center">
              <a
                href="#booking"
                className="inline-block bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-colors"
              >
                احجز الآن
              </a>
            </div>
          )}
        </div>
      )}

      <div className="mt-4 text-sm text-gray-500">
        <h4 className="font-medium mb-2">معلومات مهمة:</h4>
        <ul className="list-disc list-inside space-y-1">
          <li>وقت تسجيل الوصول: 2:00 مساءً</li>
          <li>وقت تسجيل المغادرة: 12:00 ظهراً</li>
          <li>الحد الأقصى للضيوف: 6 أشخاص</li>
          <li>يمكن إلغاء الحجز مجاناً قبل 7 أيام من موعد الوصول</li>
        </ul>
      </div>
    </div>
  );
}

export default AvailabilityChecker;