import React from 'react';
import { EnvelopeIcon, PhoneIcon, ChatBubbleLeftRightIcon, MapPinIcon } from '@heroicons/react/24/outline';

function Contact() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">تواصل معنا</h2>
          <p className="mt-4 text-xl text-gray-500">نحن هنا لمساعدتك في أي وقت</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* الاتصال المباشر */}
          <div className="relative bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="absolute top-0 right-0 -mt-4 mr-4 w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center">
              <PhoneIcon className="h-6 w-6 text-white" />
            </div>
            <div className="pt-4">
              <h3 className="text-xl font-semibold text-gray-900 mt-4">اتصل بنا مباشرة</h3>
              <p className="mt-2 text-gray-500">متوفرون على مدار الساعة</p>
              <a
                href="tel:+96812345678"
                className="mt-4 inline-block text-lg text-blue-600 hover:text-blue-800 dir-ltr"
              >
                +968 1234 5678
              </a>
              <a
                href="tel:+96887654321"
                className="mt-2 block text-lg text-blue-600 hover:text-blue-800 dir-ltr"
              >
                +968 8765 4321
              </a>
            </div>
          </div>

          {/* البريد الإلكتروني */}
          <div className="relative bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="absolute top-0 right-0 -mt-4 mr-4 w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center">
              <EnvelopeIcon className="h-6 w-6 text-white" />
            </div>
            <div className="pt-4">
              <h3 className="text-xl font-semibold text-gray-900 mt-4">راسلنا عبر البريد</h3>
              <p className="mt-2 text-gray-500">نرد خلال 24 ساعة</p>
              <a
                href="mailto:info@aldafavilla.com"
                className="mt-4 block text-lg text-blue-600 hover:text-blue-800"
              >
                info@aldafavilla.com
              </a>
              <a
                href="mailto:booking@aldafavilla.com"
                className="mt-2 block text-lg text-blue-600 hover:text-blue-800"
              >
                booking@aldafavilla.com
              </a>
            </div>
          </div>

          {/* المحادثة الفورية */}
          <div className="relative bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="absolute top-0 right-0 -mt-4 mr-4 w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center">
              <ChatBubbleLeftRightIcon className="h-6 w-6 text-white" />
            </div>
            <div className="pt-4">
              <h3 className="text-xl font-semibold text-gray-900 mt-4">المحادثة الفورية</h3>
              <p className="mt-2 text-gray-500">متوفرة من 8 صباحاً - 10 مساءً</p>
              <button
                onClick={() => window.openChat?.()}
                className="mt-4 text-lg text-blue-600 hover:text-blue-800"
              >
                ابدأ المحادثة الآن
              </button>
              <p className="mt-2 text-sm text-gray-500">
                متوسط وقت الرد: 5 دقائق
              </p>
            </div>
          </div>

          {/* زيارة المكتب */}
          <div className="relative bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="absolute top-0 right-0 -mt-4 mr-4 w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center">
              <MapPinIcon className="h-6 w-6 text-white" />
            </div>
            <div className="pt-4">
              <h3 className="text-xl font-semibold text-gray-900 mt-4">زيارة مكتبنا</h3>
              <p className="mt-2 text-gray-500">مكتب رأس الحد الرئيسي</p>
              <p className="mt-4 text-gray-600">
                شارع السلطان قابوس
                <br />
                بجانب بنك مسقط
                <br />
                رأس الحد، عُمان
              </p>
              <p className="mt-2 text-sm text-gray-500">
                ساعات العمل: 8 صباحاً - 8 مساءً
              </p>
            </div>
          </div>
        </div>

        {/* نموذج التواصل السريع */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">نموذج التواصل السريع</h3>
          <form className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">الاسم</label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">البريد الإلكتروني</label>
              <input
                type="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700">الموضوع</label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700">الرسالة</label>
              <textarea
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              ></textarea>
            </div>
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors"
              >
                إرسال الرسالة
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;