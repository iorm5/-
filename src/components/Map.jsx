import React from 'react';

function Map() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            موقعنا
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            نقع في موقع مميز بالقرب من محمية السلاحف في رأس الحد
          </p>
        </div>

        <div className="mt-12">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14573.744846785646!2d59.81776117777882!3d22.528777252277675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e9a5df9f2c5917b%3A0x27ef24a37de2544a!2sRas%20Al%20Hadd!5e0!3m2!1sen!2som!4v1707000000000!5m2!1sen!2som"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900">العنوان</h3>
              <p className="mt-2 text-gray-600">رأس الحد، محافظة جنوب الشرقية، سلطنة عمان</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900">كيفية الوصول</h3>
              <p className="mt-2 text-gray-600">45 دقيقة من مطار مسقط الدولي</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900">معالم قريبة</h3>
              <ul className="mt-2 text-gray-600 space-y-1">
                <li>• محمية السلاحف الخضراء</li>
                <li>• شاطئ رأس الحد</li>
                <li>• قلعة رأس الحد</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Map;