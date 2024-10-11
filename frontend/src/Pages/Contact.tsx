
const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg text-gray-600">
            We’d love to hear from you! Reach out for inquiries or to discuss your project.
          </p>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <p className="text-gray-600"><strong>Address:</strong>3 Anifowoshe Street, Abule-Egba, Ifako-Ijaye, Lagos, Nigeria.</p>
            <p className="text-gray-600"><strong>Phone:</strong> (123) 456-7890</p>
            <p className="text-gray-600"><strong>Email:</strong> <a href="mailto:info@architecturefirm.com" className="text-blue-600 hover:underline">info@architecturefirm.com</a></p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-blue-600 hover:underline">Facebook</a>
              <a href="#" className="text-blue-600 hover:underline">Twitter</a>
              <a href="#" className="text-blue-600 hover:underline">Instagram</a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 mb-1">Name</label>
                <input type="text" id="name" className="border border-gray-300 rounded-lg w-full p-2" required />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-1">Email</label>
                <input type="email" id="email" className="border border-gray-300 rounded-lg w-full p-2" required />
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="block text-gray-700 mb-1">Subject</label>
                <input type="text" id="subject" className="border border-gray-300 rounded-lg w-full p-2" required />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 mb-1">Message</label>
                <textarea id="message" className="border border-gray-300 rounded-lg w-full p-2" rows={4} required></textarea>
              </div>
              <button type="submit" className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700">
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Google Map */}
        <div className="bg-white rounded-lg shadow-md mb-12">
          <h3 className="text-xl font-bold p-4">Our Location</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345099863!2d144.9537353156813!3d-37.81720997975187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f0b3c61%3A0x6c2ab5b4d7e7a49!2sYour%20Office%20Name!5e0!3m2!1sen!2sus!4v1616765568261!5m2!1sen!2sus"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            title="Google Map"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
