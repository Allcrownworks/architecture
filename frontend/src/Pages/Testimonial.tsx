import { useState, useEffect } from 'react';

const testimonials = [
  {
    text: "We couldn't be happier with our new home! The design process was seamless, and the attention to detail was beyond our expectations. Their craftsmanship is truly top-notch.",
    name: "Jane & John Doe",
    location: "New York, NY",
    image: "/Hero.jpg"
  },
  {
    text: "This team completely transformed our house. The architecture is stunning, and we are getting so many compliments from friends and family.",
    name: "Emily R.",
    location: "Los Angeles, CA",
    image: "https://via.placeholder.com/150"
  },
  {
    text: "Working with this construction firm was a pleasure. From the first meeting to the final result, everything was handled professionally and beautifully.",
    name: "Michael S.",
    location: "Chicago, IL",
    image: "https://via.placeholder.com/150"
  }
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // 5 seconds
    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <section className="bg-white py-20 m-h-screen m-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-50 p-8 rounded-lg shadow-lg relative">
          {/* Testimonial Text */}
          <p className="text-lg font-medium text-gray-800 italic text-center">
            "{testimonials[currentIndex].text}"
          </p>

          {/* Client Info */}
          <div className="mt-6 flex items-center justify-center">
            <img
              className="w-16 h-16 rounded-full object-cover mr-4"
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
            />
            <div className="text-left">
              <h4 className="text-xl font-bold text-gray-900">{testimonials[currentIndex].name}</h4>
              <p className="text-sm text-gray-600">{testimonials[currentIndex].location}</p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute inset-y-0 left-0 flex items-center">
            <button
              onClick={goToPrevious}
              className="text-gray-500 hover:text-gray-900 bg-white p-2 rounded-full shadow-lg focus:outline-none"
            >
              &#8592;
            </button>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center">
            <button
              onClick={goToNext}
              className="text-gray-500 hover:text-gray-900 bg-white p-2 rounded-full shadow-lg focus:outline-none"
            >
              &#8594;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
