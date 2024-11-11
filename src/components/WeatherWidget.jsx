import React, { useState, useEffect } from 'react';
import { CloudIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline';

function WeatherWidget() {
  const [weather, setWeather] = useState({
    temp: 28,
    condition: 'مشمس',
    humidity: 65,
    windSpeed: 12
  });

  return (
    <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg p-6 shadow-lg">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-semibold">الطقس في رأس الحد</h3>
          <p className="text-3xl font-bold mt-2">{weather.temp}°C</p>
          <p className="mt-1">{weather.condition}</p>
        </div>
        <SunIcon className="h-16 w-16 text-yellow-300" />
      </div>
      
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm opacity-75">الرطوبة</p>
          <p className="font-semibold">{weather.humidity}%</p>
        </div>
        <div>
          <p className="text-sm opacity-75">سرعة الرياح</p>
          <p className="font-semibold">{weather.windSpeed} كم/س</p>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-blue-400">
        <p className="text-sm">أفضل وقت لمشاهدة السلاحف: 9:00 مساءً - 11:00 مساءً</p>
      </div>
    </div>
  );
}

export default WeatherWidget;