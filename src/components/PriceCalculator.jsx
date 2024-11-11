import React, { useEffect, useState } from 'react';

function PriceCalculator({ startDate, endDate, guests, extras }) {
  const [total, setTotal] = useState(0);
  const basePrice = 150; // السعر الأساسي لليلة الواحدة

  const extraServices = {
    1: { name: 'جولة السلاحف', price: 25 },
    2: { name: 'رحلة صيد', price: 50 },
    3: { name: 'حفلة شواء', price: 35 }
  };

  useEffect(() => {
    if (startDate && endDate) {
      const nights = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
      const baseTotal = basePrice * nights;
      const guestExtra = (guests > 2) ? (guests - 2) * 20 * nights : 0;
      const extrasTotal = extras.reduce((sum, id) => sum + extraServices[id].price, 0);
      
      setTotal(baseTotal + guestExtra + extrasTotal);
    }
  }, [startDate, endDate, guests, extras]);

  if (!startDate || !endDate) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">تفاصيل السعر</h3>
        <p className="text-gray-600">الرجاء اختيار تواريخ الإقامة لحساب السعر</p>
      </div>
    );
  }

  const nights = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">تفاصيل السعر</h3>
      
      <div className="space-y-4">
        <div className="flex justify-between">
          <span>السعر الأساسي ({nights} ليالي)</span>
          <span>{basePrice * nights} ر.ع</span>
        </div>

        {guests > 2 && (
          <div className="flex justify-between text-gray-600">
            <span>رسوم ضيوف إضافيين ({guests - 2})</span>
            <span>{(guests - 2) * 20 * nights} ر.ع</span>
          </div>
        )}

        {extras.length > 0 && (
          <div className="border-t pt-4">
            <h4 className="font-medium mb-2">الخدمات الإضافية:</h4>
            {extras.map(id => (
              <div key={id} className="flex justify-between text-gray-600">
                <span>{extraServices[id].name}</span>
                <span>{extraServices[id].price} ر.ع</span>
              </div>
            ))}
          </div>
        )}

        <div className="border-t pt-4">
          <div className="flex justify-between font-semibold text-lg">
            <span>المجموع الكلي</span>
            <span className="text-blue-600">{total} ر.ع</span>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            * الأسعار تشمل الضريبة وخدمة التنظيف اليومية
          </p>
        </div>
      </div>
    </div>
  );
}

export default PriceCalculator;