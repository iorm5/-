import React from 'react';
import { Link } from 'react-router-dom';
import LanguageToggle from './LanguageToggle';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-2xl font-bold text-blue-600">
                فيلا الدفة
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                to="/"
                className="inline-flex items-center px-1 pt-1 text-gray-900"
              >
                الرئيسية
              </Link>
              <a
                href="#features"
                className="inline-flex items-center px-1 pt-1 text-gray-500 hover:text-gray-900"
              >
                المميزات
              </a>
              <a
                href="#activities"
                className="inline-flex items-center px-1 pt-1 text-gray-500 hover:text-gray-900"
              >
                الأنشطة
              </a>
              <a
                href="#booking"
                className="inline-flex items-center px-1 pt-1 text-gray-500 hover:text-gray-900"
              >
                الحجز
              </a>
            </div>
          </div>
          <div className="flex items-center">
            <LanguageToggle />
            <Link
              to="/admin"
              className="mr-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              لوحة التحكم
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}