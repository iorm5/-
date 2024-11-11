import React from 'react';
import Rating from './Rating';

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "أحمد السالمي",
      rating: 5,
      comment: "تجربة رائعة! الفيلا جميلة جداً والموقع مثالي لمشاهدة السلاحف.",
      date: "يناير 2024"
    },
    {
      id: 2,
      name: "سارة العامري",
      rating: 5,
      comment: "مكان مميز للعائلة، استمتعنا كثيراً بالإقامة والأنشطة البحرية.",
      date: "ديسمبر 2023"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">آراء الضيوف</h2>
          <p className="mt-4 text-lg text-gray-600">
            اقرأ تجارب ضيوفنا السابقين
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-500">{testimonial.date}</p>
                </div>
                <Rating value={testimonial.rating} size={20} />
              </div>
              <p className="text-gray-600">{testimonial.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;