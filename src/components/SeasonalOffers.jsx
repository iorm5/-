import React from 'react';

function SeasonalOffers() {
  const offers = [
    {
      id: 1,
      title: 'عرض موسم السلاحف',
      description: 'خصم 20% على الإقامات خلال موسم تعشيش السلاحف',
      period: 'يونيو - أغسطس',
      price: '120 ر.ع',
      features: ['جولة مجانية لمشاهدة السلاحف', 'إفطار مجاني', 'نقل من وإلى المطار']
    },
    {
      id: 2,
      title: 'باقة شهر العسل',
      description: 'إقامة رومانسية مع إطلالة على البحر',
      period: 'طوال العام',
      price: '150 ر.ع',
      features: ['عشاء رومانسي', 'ديكور خاص', 'جلسة تصوير']
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">العروض الموسمية</h2>
          <p className="mt-4 text-xl text-gray-500">اكتشف أفضل عروضنا لموسم السلاحف</p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
            >
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-blue-600 font-semibold">
                  {offer.period}
                </div>
                <h3 className="mt-2 text-xl font-semibold text-gray-900">{offer.title}</h3>
                <p className="mt-4 text-gray-500">{offer.description}</p>
                <div className="mt-4 text-3xl font-bold text-gray-900">{offer.price}</div>
                <ul className="mt-6 space-y-4">
                  {offer.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <svg className="h-5 w-5 text-green-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="mr-3 text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="mt-8 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                  احجز العرض
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SeasonalOffers;