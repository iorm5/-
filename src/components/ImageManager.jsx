import React, { useState } from 'react';

function ImageManager() {
  const [images, setImages] = useState([
    {
      id: 1,
      title: 'الواجهة الأمامية',
      description: 'إطلالة مباشرة على بحر العرب',
      src: '/images/villa1.jpg',
      category: 'exterior',
      isActive: true
    },
    {
      id: 2,
      title: 'غرفة المعيشة',
      description: 'مساحة واسعة مع أثاث فاخر',
      src: '/images/villa2.jpg',
      category: 'interior',
      isActive: true
    }
  ]);

  const [editingImage, setEditingImage] = useState(null);
  const [newImage, setNewImage] = useState({
    title: '',
    description: '',
    category: 'exterior',
    file: null
  });

  const handleImageEdit = (image) => {
    setEditingImage(image);
  };

  const handleImageUpdate = (e) => {
    e.preventDefault();
    if (editingImage) {
      setImages(images.map(img => 
        img.id === editingImage.id ? { ...editingImage } : img
      ));
      setEditingImage(null);
    }
  };

  const handleNewImageSubmit = (e) => {
    e.preventDefault();
    if (newImage.file) {
      const imageUrl = URL.createObjectURL(newImage.file);
      setImages([...images, {
        id: images.length + 1,
        title: newImage.title,
        description: newImage.description,
        src: imageUrl,
        category: newImage.category,
        isActive: true
      }]);
      setNewImage({ title: '', description: '', category: 'exterior', file: null });
    }
  };

  const handleImageDelete = (imageId) => {
    if (window.confirm('هل أنت متأكد من حذف هذه الصورة؟')) {
      setImages(images.filter(img => img.id !== imageId));
    }
  };

  const handleToggleActive = (imageId) => {
    setImages(images.map(img =>
      img.id === imageId ? { ...img, isActive: !img.isActive } : img
    ));
  };

  return (
    <div className="space-y-8">
      {/* Form for adding new image */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">إضافة صورة جديدة</h3>
        <form onSubmit={handleNewImageSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">عنوان الصورة</label>
            <input
              type="text"
              value={newImage.title}
              onChange={(e) => setNewImage({ ...newImage, title: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">الوصف</label>
            <textarea
              value={newImage.description}
              onChange={(e) => setNewImage({ ...newImage, description: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              rows="3"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">التصنيف</label>
            <select
              value={newImage.category}
              onChange={(e) => setNewImage({ ...newImage, category: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="exterior">خارجي</option>
              <option value="interior">داخلي</option>
              <option value="amenities">مرافق</option>
              <option value="activities">أنشطة</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">الصورة</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setNewImage({ ...newImage, file: e.target.files[0] })}
              className="mt-1 block w-full"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
          >
            إضافة الصورة
          </button>
        </form>
      </div>

      {/* Image grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image) => (
          <div
            key={image.id}
            className="bg-white rounded-lg shadow overflow-hidden transition-transform hover:scale-105"
          >
            <div className="relative h-48">
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover"
              />
              <div className={`absolute top-2 left-2 px-2 py-1 rounded ${
                image.isActive ? 'bg-green-500' : 'bg-gray-500'
              } text-white text-sm`}>
                {image.isActive ? 'نشط' : 'غير نشط'}
              </div>
            </div>
            
            {editingImage?.id === image.id ? (
              <form onSubmit={handleImageUpdate} className="p-4 space-y-4">
                <input
                  type="text"
                  value={editingImage.title}
                  onChange={(e) => setEditingImage({ ...editingImage, title: e.target.value })}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
                <textarea
                  value={editingImage.description}
                  onChange={(e) => setEditingImage({ ...editingImage, description: e.target.value })}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  rows="2"
                />
                <select
                  value={editingImage.category}
                  onChange={(e) => setEditingImage({ ...editingImage, category: e.target.value })}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="exterior">خارجي</option>
                  <option value="interior">داخلي</option>
                  <option value="amenities">مرافق</option>
                  <option value="activities">أنشطة</option>
                </select>
                <div className="flex space-x-2 space-x-reverse">
                  <button
                    type="submit"
                    className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
                  >
                    حفظ
                  </button>
                  <button
                    type="button"
                    onClick={() => setEditingImage(null)}
                    className="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400"
                  >
                    إلغاء
                  </button>
                </div>
              </form>
            ) : (
              <div className="p-4">
                <h4 className="font-semibold">{image.title}</h4>
                <p className="text-gray-600 text-sm mt-1">{image.description}</p>
                <div className="mt-4 flex justify-between items-center">
                  <div className="space-x-2 space-x-reverse">
                    <button
                      onClick={() => handleImageEdit(image)}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      تعديل
                    </button>
                    <button
                      onClick={() => handleImageDelete(image.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      حذف
                    </button>
                  </div>
                  <button
                    onClick={() => handleToggleActive(image.id)}
                    className={`px-3 py-1 rounded-full text-sm ${
                      image.isActive
                        ? 'bg-green-100 text-green-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {image.isActive ? 'إخفاء' : 'إظهار'}
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageManager;