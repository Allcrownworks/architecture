import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles

// Import images from the src/assets folder
import imgA from '../assets/1.jpg';
import imgB from '../assets/a.jpg';
import imgC from '../assets/C.jpg';
import imgD from '../assets/1b.jpg';
import imgE from '../assets/Hero.jpg';
import imgF from '../assets/Aruna.jpg';
import imgG from '../assets/Akande.jpg';

const HeroSection = () => {
  const slides = [
    {
      imageUrl: imgA,
      title: "Turning Your Bold Ideas into Beautiful Spaces.",
      description: 'With Us You Are At The Right Track.',
    },
    {
      imageUrl: imgB,
      title: "Transforming Concepts into Masterpieces.",
      description: 'With Us You Are At The Right Track.',
    },
    {
      imageUrl: imgC,
      title: "Shaping Imagination into Living Spaces.",
      description: 'With Us You Are At The Right Track.',
    },
    {
      imageUrl: imgD,
      title: "Designing the Future from Your Imagination.",
      description: 'With Us You Are At The Right Track.',
    },
    {
      imageUrl: imgE,
      title: "Designing Spaces That Reflect Your Imagination.",
      description: 'With Us You Are At The Right Track.',
    },
    {
      imageUrl: imgF,
      title: "Turning Your Bold Ideas into Beautiful Spaces.",
      description: 'With Us You Are At The Right Track.',
    },
    {
      imageUrl: imgG,
      title: "Creating Iconic Designs from Unique Visions.",
      description: 'With Us You Are At The Right Track.',
    },
  ];

  return (
    <div className="relative h-screen">
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={5000}
        showStatus={false}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="relative h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.imageUrl})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
              <h1 className="text-2xl md:text-3xl font-bold mb-4">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                {slide.description}
              </p>
              <Link
                to={"/get-started"}
                className="bg-orange-500 hover:bg-transparent text-white font-semibold py-3 px-6 rounded-md border-orange-500 border-2"
              >
                Get a Free Consultation
              </Link>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HeroSection;
