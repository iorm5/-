import React, { useState } from 'react';

function Gallery360() {
  const [activeRoom, setActiveRoom] = useState(0);
  const rooms = [
    {
      id: 1,
      title: 'الصالة الرئيسية',
      image: '/images/living-room.jpg',
      description: 'صالة واسعة مع إطلالة على البحر'
    },
    {
      id: 2,
      title: 'غرفة النوم الرئيسية',
      image: '/images/master-bedroom.jpg',
      description: 'غرفة نوم فاخرة مع شرفة خاصة'
    },
    {
      id: 3,
      title: 'المسبح والحديقة',
      image: '/images/pool.jpg',
      description: 'مسبح خاص محاط بحديقة جميلة'
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">جولة افتراضية في الفيلا</h2>
        </div>
        
        <div className="mt-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {rooms.map((room) => (
              <div
                key={room.id}
                className={`relative cursor-pointer rounded-lg overflow-hidden shadow-lg transition-all duration-300 ${
                  activeRoom === room.id ? 'ring-4 ring-blue-500' : ''
                }`}
                onClick={() => setActiveRoom(room.id)}
              >
                <img
                  src={room.image}
                  alt={room.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <h3 className="text-white text-xl font-semibold">{room.title}</h3>
                  <p className="text-gray-200 mt-1">{room.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery360;