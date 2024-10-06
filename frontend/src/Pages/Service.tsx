import { FaHome, FaPaintBrush, FaClipboardCheck, FaUsers } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Architectural Design',
      description: 'We create innovative and functional architectural designs that bring your vision to life.',
      icon: <FaHome className="text-4xl text-orange-500 mb-4" />,
    },
    {
      id: 2,
      title: 'Interior Design',
      description: 'Our interior design services focus on creating beautiful and functional spaces tailored to your needs.',
      icon: <FaPaintBrush className="text-4xl text-orange-500 mb-4" />,
    },
    {
      id: 3,
      title: 'Project Management',
      description: 'We ensure that your project is completed on time and within budget, managing every detail along the way.',
      icon: <FaClipboardCheck className="text-4xl text-orange-500 mb-4" />,
    },
    {
      id: 4,
      title: 'Consultation',
      description: 'Our expert team provides consultation services to help you make informed decisions about your project.',
      icon: <FaUsers className="text-4xl text-orange-500 mb-4" />,
    },
  ];

  // Framer Motion variant for staggered animations
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.2, // Delay each child animation
        staggerChildren: 0.3, // Stagger children animations
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="services" className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-gray-600">
            We offer a range of services to meet your architectural and design needs. Explore what we can do for you!
          </p>
        </div>

        {/* Services List */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="bg-white rounded-lg shadow-md p-6 transition-transform duration-300 hover:shadow-lg"
              variants={itemVariants}
            >
              <div className="flex flex-col items-center">
                {service.icon}
                <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
