import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import toast, { Toaster } from 'react-hot-toast';

function BookingNotifications() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const socket = io('your_socket_server_url');

    socket.on('newBooking', (booking) => {
      toast.success(`تم استلام حجز جديد من ${booking.guestName}!`, {
        duration: 5000,
        position: 'top-right',
      });
      
      setNotifications(prev => [booking, ...prev]);
    });

    return () => socket.disconnect();
  }, []);

  return (
    <div className="fixed top-20 left-4 z-50">
      <Toaster />
      {notifications.length > 0 && (
        <div className="bg-white rounded-lg shadow-lg p-4 max-w-sm">
          <h3 className="text-lg font-semibold mb-2">آخر الحجوزات</h3>
          <ul className="space-y-2">
            {notifications.slice(0, 3).map((notification, index) => (
              <li key={index} className="text-sm text-gray-600">
                حجز جديد من {notification.guestName}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default BookingNotifications;