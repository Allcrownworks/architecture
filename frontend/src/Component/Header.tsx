import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import the icons

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    // { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    // { name: 'Testimonials', path: '/testimonial' },
    // { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="bg-transparent fixed w-full z-20 px-6">
      <div className="container mx-auto flex justify-between items-center p-2">
        {/* Logo */}
        <Link to="/">
        <div className="text-2xl font-bold text-orange-500">
          Allcrownworks
        </div>
        </Link>
       

        {/* Hamburger Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <FaTimes className="w-6 h-6 text-orange-500" />
            ) : (
              <FaBars className="w-6 h-6 text-orange-500" />
            )}
          </button>
        </div>

        {/* Navigation Menu */}
        <nav
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:block absolute md:static backdrop-blur-sm md:bg-transparent w-full md:w-auto left-0 top-full md:top-auto z-10`} 
        >
          <ul className="flex flex-col md:flex-row md:space-x-6 p-4 md:p-0 items-center">
            {navItems.map((item) => (
              <li key={item.name} className="py-2 md:py-0">         
                <Link
                  to={item.path}
                  className="text-orange-500 hover:text-white hover:bg-orange-400 py-2 px-48 md:py-0 md:px-0 md:hover:bg-transparent  md:hover:text-orange-400"
                  onClick={() => setIsOpen(false)}>
                  {item.name}
                </Link>               
              </li>
            ))}
          </ul>
        </nav>

        {/* Call to Action Button */}
        {/* <Link
          to="/get-started"
          className="hidden md:block bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-700 transition duration-300"
        >
          Get Started
        </Link> */}
      </div>
    </header>
  );
};

export default Header;
