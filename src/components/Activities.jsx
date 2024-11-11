import React from 'react';

function Activities() {
  const activities = [
    {
      title: 'مشاهدة السلاحف',
      description: 'استمتع بمشاهدة السلاحف البحرية في موسم التعشيش',
      image: '/images/turtle-watching.jpg',
    },
    {
      title: 'رحلات بحرية',
      description: 'رحلات بحرية ممتعة لاستكشاف السواحل المجاورة',
      image: '/images/boat-trip.jpg',
    },
    {
      title: 'الغوص',
      description: 'اكتشف الحياة البحرية الغنية في مياه بحر العرب',
      image: '/images/diving.jpg',
    },
  ];

  return (
    <div id="activities" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">الأنشطة المتوفرة</h2>
          <p className="mt-4 text-xl text-gray-500">مجموعة متنوعة من الأنشطة البحرية والترفيهية</p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {activities.map((activity) => (
              <div key={activity.title} className="bg-white overflow-hidden shadow-lg rounded-lg">
                <div className="relative h-48">
                  <img
                    className="w-full h-full object-cover"
                    src={activity.image}
                    alt={activity.title}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">{activity.title}</h3>
                  <p className="mt-2 text-base text-gray-500">{activity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Activities;