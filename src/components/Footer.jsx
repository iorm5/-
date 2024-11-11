import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">تواصل معنا</h3>
            <ul className="space-y-2">
              <li>هاتف: +968 1234 5678</li>
              <li>واتساب: +968 1234 5678</li>
              <li>البريد: info@aldafavilla.com</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li><a href="#booking" className="hover:text-blue-400">احجز الآن</a></li>
              <li><a href="#activities" className="hover:text-blue-400">الأنشطة</a></li>
              <li><a href="#features" className="hover:text-blue-400">المميزات</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">تابعنا</h3>
            <div className="flex space-x-4 space-x-reverse">
              <a href="#" className="hover:text-blue-400">انستغرام</a>
              <a href="#" className="hover:text-blue-400">تويتر</a>
              <a href="#" className="hover:text-blue-400">فيسبوك</a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>جميع الحقوق محفوظة © {new Date().getFullYear()} فيلا الدفة</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;