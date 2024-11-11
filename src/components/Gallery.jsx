import React, { useState } from 'react';

const images = [
  {
    id: 1,
    src: '/images/villa1.jpg',
    title: 'الواجهة الأمامية',
    description: 'إطلالة مباشرة على بحر العرب'
  },
  {
    id: 2,
    src: '/images/villa2.jpg',
    title: 'غرفة المعيشة',
    description: 'مساحة واسعة مع أثاث فاخر'
  },
  {
    id: 3,
    src: '/images/villa3.jpg',
    title: 'غرفة النوم الرئيسية',
    description: 'سرير كبير مع إطلالة على البحر'
  },
  {
    id: 4,
    src: '/images/villa4.jpg',
    title: 'المطبخ',
    description: 'مطبخ حديث مجهز بالكامل'
  },
  {
    id: 5,
    src: '/images/villa5.jpg',
    title: 'الحديقة',
    description: 'جلسة خارجية مع منطقة شواء'
  },
  {
    id: 6,
    src: '/images/villa6.jpg',
    title: 'الشاطئ الخاص',
    description: 'شاطئ خاص للاستجمام والسباحة'
  }
];

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            معرض الصور
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            شاهد جمال وفخامة فيلا الدفة
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image) => (
            <div
              key={image.id}
              className="group relative cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 transition-opacity duration-300">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium text-gray-900">{image.title}</h3>
                <p className="text-sm text-gray-500">{image.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal للصورة المكبرة */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={() => setSelectedImage(null)}></div>

              <div className="inline-block align-bottom bg-white rounded-lg text-right overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <img
                    src={selectedImage.src}
                    alt={selectedImage.title}
                    className="w-full h-auto max-h-[70vh] object-contain"
                  />
                  <div className="mt-4">
                    <h3 className="text-lg font-medium text-gray-900">{selectedImage.title}</h3>
                    <p className="text-sm text-gray-500 mt-2">{selectedImage.description}</p>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:mr-3 sm:w-auto sm:text-sm"
                    onClick={() => setSelectedImage(null)}
                  >
                    إغلاق
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Gallery;