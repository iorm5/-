import React from 'react';
import { motion } from 'framer-motion';

function VirtualTour() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">جولة افتراضية 360°</h2>
          <p className="mt-4 text-xl text-gray-500">استكشف الفيلا من جميع الزوايا</p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-12"
        >
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!4v1234567890!6m8!1m7!1sCAoSLEFGMVFpcE1..."
              width="100%"
              height="600"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900">تجربة غامرة</h3>
              <p className="mt-2 text-gray-600">استكشف كل ركن في الفيلا بتقنية 360 درجة</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900">تفاصيل دقيقة</h3>
              <p className="mt-2 text-gray-600">شاهد التصميم الداخلي والأثاث بجودة عالية</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900">تخطيط تفاعلي</h3>
              <p className="mt-2 text-gray-600">تنقل بين الغرف بسهولة عبر الخريطة التفاعلية</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default VirtualTour;