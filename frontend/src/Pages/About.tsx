import CountUp from 'react-countup';
const About = () => {
  return (
    <section id="about-us" className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Introduction */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">About Us</h2>
          <p className="text-lg text-gray-600">
           Allcrownworks was established to meet the need of the society by providing them the master plan of their choice based on the approve building code. Believe it or not you will enjoy our services because we delivered with good managerial skills.
          </p>
        </div>

        {/* Key Statistics */}
        <div className="flex flex-wrap justify-center text-center mb-12">
      <div className="w-1/2 md:w-1/4 px-4 mb-6">
        <h3 className="text-3xl font-bold text-blue-600">
          <CountUp start={0} end={50} duration={2} />+
        </h3>
        <p className="text-gray-600">Projects Completed</p>
      </div>
      <div className="w-1/2 md:w-1/4 px-4 mb-6">
        <h3 className="text-3xl font-bold text-blue-600">
          <CountUp start={0} end={5} duration={2} />+
        </h3>
        <p className="text-gray-600">Years in Business</p>
      </div>
      <div className="w-1/2 md:w-1/4 px-4 mb-6">
        <h3 className="text-3xl font-bold text-blue-600">
          <CountUp start={0} end={100} duration={2} />%
        </h3>
        <p className="text-gray-600">Client Satisfaction</p>
      </div>
    </div>

        {/* Meet the Team */}
        {/* <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-8">Meet the Team</h3>
          <div className="flex flex-wrap justify-center">
            <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-8">
              <img className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" src="/1.jpg" alt="Team Member 1" />
              <h4 className="text-xl font-semibold">John Doe</h4>
              <p className="text-gray-600">Lead Architect</p>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-8">
              <img className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" src="/C.jpg" alt="Team Member 2" />
              <h4 className="text-xl font-semibold">Jane Smith</h4>
              <p className="text-gray-600">Interior Designer</p>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-8">
              <img className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" src="/Hero.jpg" alt="Team Member 3" />
              <h4 className="text-xl font-semibold">Michael Brown</h4>
              <p className="text-gray-600">Project Manager</p>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-8">
              <img className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" src="/vite.svg" alt="Team Member 4" />
              <h4 className="text-xl font-semibold">Emily White</h4>
              <p className="text-gray-600">Landscape Designer</p>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default About;
