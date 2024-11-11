import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { checkAvailability, createBooking } from '../lib/api';

function Booking() {
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const [isAvailable, setIsAvailable] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleCheckAvailability = async () => {
    if (!checkIn || !checkOut) {
      setError('الرجاء اختيار تواريخ الحجز');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const { available } = await checkAvailability(
        checkIn.toISOString(),
        checkOut.toISOString()
      );
      setIsAvailable(available);
    } catch (err) {
      setError('حدث خطأ أثناء التحقق من التوفر');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">احجز إقامتك</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">تاريخ الوصول</label>
          <DatePicker
            selected={checkIn}
            onChange={date => setCheckIn(date)}
            selectsStart
            startDate={checkIn}
            endDate={checkOut}
            minDate={new Date()}
            className="w-full p-2 border rounded-md"
            placeholderText="اختر تاريخ الوصول"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">تاريخ المغادرة</label>
          <DatePicker
            selected={checkOut}
            onChange={date => setCheckOut(date)}
            selectsEnd
            startDate={checkIn}
            endDate={checkOut}
            minDate={checkIn}
            className="w-full p-2 border rounded-md"
            placeholderText="اختر تاريخ المغادرة"
          />
        </div>

        <button
          onClick={handleCheckAvailability}
          disabled={isLoading}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50"
        >
          {isLoading ? 'جاري التحقق...' : 'تحقق من التوفر'}
        </button>

        {error && (
          <div className="text-red-600 text-sm text-center">{error}</div>
        )}

        {isAvailable !== null && !error && (
          <div className={`text-center text-sm ${isAvailable ? 'text-green-600' : 'text-red-600'}`}>
            {isAvailable ? 'الفيلا متوفرة في هذه التواريخ!' : 'عذراً، الفيلا محجوزة في هذه التواريخ'}
          </div>
        )}
      </div>
    </div>
  );
}

export default Booking;