import React from 'react';
import { HomeIcon, WifiIcon, TvIcon, KeyIcon } from '@heroicons/react/24/outline';

function Features() {
  const features = [
    {
      name: 'موقع مميز',
      description: 'إطلالة مباشرة على بحر العرب',
      icon: HomeIcon,
    },
    {
      name: 'إنترنت مجاني',
      description: 'واي فاي عالي السرعة',
      icon: WifiIcon,
    },
    {
      name: 'ترفيه متكامل',
      description: 'تلفاز ذكي مع اشتراك نتفلكس',
      icon: TvIcon,
    },
    {
      name: 'خدمة 24/7',
      description: 'دعم متواصل على مدار الساعة',
      icon: KeyIcon,
    },
  ];

  return (
    <div id="features" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">مميزات الفيلا</h2>
          <p className="mt-4 text-xl text-gray-500">كل ما تحتاجه لإقامة مريحة وممتعة</p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg">
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{feature.name}</h3>
                    <p className="mt-5 text-base text-gray-500">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;