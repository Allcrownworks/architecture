import { useState } from 'react';
import { Link } from 'react-router-dom';
import imgA from '../assets/a.jpg';
import imgB from '../assets/1.jpg';
import imgC from '../assets/C.jpg';
// import imgD from '../assets/1b.jpg';
// import imgE from '../assets/Hero.jpg';
// import imgF from '../assets/Aruna.jpg';
// import imgG from '../assets/Akande.jpg';
// import imgH from '../assets/Aminat.jpg';
// import imgI from '../assets/';
// import imgJ from '../assets/Aruna.jpg';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'Modern Villa',
      category: 'Residential',
      imageUrl: imgA,
      description: 'A luxurious modern villa with a stunning pool and garden.',
      body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, provident.',
    },
    {
      id: 2,
      title: 'Corporate Office',
      category: 'Commercial',
      imageUrl: imgB,
      description: 'A sleek and functional corporate office space.',
      body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, provident.',
    },
    {
      id: 3,
      title: 'City Apartment',
      category: 'Residential',
      imageUrl: imgC,
      description: 'A chic city apartment with an open-plan layout.',
      body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, provident.',
    },
    // {
    //   id: 4,
    //   title: 'Historic Building Renovation',
    //   category: 'Renovation',
    //   imageUrl: imgD,
    //   description: 'A sensitive renovation of a historic building.',
    //   body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, provident.',
    // },
    // {
    //   id: 5,
    //   title: 'Historic Building Renovation',
    //   category: 'Renovation',
    //   imageUrl: imgE,
    //   description: 'Three Families Apartment',
    //   body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, provident.',
    // },
    // {
    //   id: 6,
    //   title: 'Historic Building Renovation',
    //   category: 'Renovation',
    //   imageUrl: imgF,
    //   description: 'Three Families Apartment',
    //   body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, provident.',
    // },
    // {
    //   id: 7,
    //   title: 'Corporate Office',
    //   category: 'Commercial',
    //   imageUrl: imgG,
    //   description: 'A sleek and functional corporate office space.',
    //   body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, provident.',
    // },
    // {
    //   id: 8,
    //   title: 'Corporate Office',
    //   category: 'Commercial',
    //   imageUrl: imgG,
    //   description: 'A sleek and functional corporate office space.',
    //   body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, provident.',
    // },
    // {
    //   id: 9,
    //   title: 'Corporate Office',
    //   category: 'Commercial',
    //   imageUrl: imgG,
    //   description: 'A sleek and functional corporate office space.',
    //   body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, provident.',
    // },
    // {
    //   id: 10,
    //   title: 'Corporate Office',
    //   category: 'Commercial',
    //   imageUrl: imgG,
    //   description: 'A sleek and functional corporate office space.',
    //   body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, provident.',
    // },
    // Add more projects as needed
  ];

  const categories = ['All', 'Residential', 'Commercial', 'Renovation'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="portfolio" className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Portfolio</h2>
          <p className="text-lg text-gray-600">
            Explore some of our recent projects showcasing our design excellence and attention to detail.
          </p>
        </div>

        {/* Filter Options */}
        <div className="text-center mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 m-2 text-sm font-medium rounded-full focus:outline-none ${selectedCategory === category ? 'bg-orange-700 text-white' : 'bg-orange-500 text-white'}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Projects Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="relative group overflow-hidden rounded-lg shadow-lg">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-300 transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-white px-4">
                  <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                  <p className="mb-4">{project.description}</p>
                  <Link to={`/portfolio/${project.id}`}>
                  <div className="bg-orange-500 hover:bg-transparent text-white font-semibold py-2 rounded-md border-orange-500 border-2">View Details</div>
                  </Link>
                   
                  
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
