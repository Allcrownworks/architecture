import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className=" bg-orange-500 text-white mx-auto p-4 w-full">
      <div className="flex mx-auto flex-1 items-center justify-center px-6">
        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 flex-1">
          {/* <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul>
              <li><a href="#about" className="hover:underline">About</a></li>
              <li><a href="#services" className="hover:underline">Services</a></li>
              <li><a href="#portfolio" className="hover:underline">Portfolio</a></li>
              <li><a href="#blog" className="hover:underline">Blog</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </div> */}
          
          {/* Social Media Icons */}
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-500"><FaFacebook size={24} /></a>
              <a href="#" className="hover:text-blue-500"><FaTwitter size={24} /></a>
              <a href="#" className="hover:text-blue-500"><FaInstagram size={24} /></a>
              <a href="#" className="hover:text-blue-500"><FaLinkedin size={24} /></a>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter Signup</h3>
            <form>
              <input
                type="email"
                placeholder="Enter your email"
                className="border border-gray-300 rounded-lg w-full p-2 mb-2 outline-none text-slate-800"
                required
              />
              <button type="submit" className="bg-orange-800 text-white font-semibold py-2 px-4 rounded-md hover:bg-orange-300 hover:text-slate-900">
                Subscribe
              </button>
            </form>
          </div>

          {/* Legal Information */}
          <div>
            <h3 className="text-lg font-bold mb-4">Legal</h3>
            <ul>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Terms of Service</a></li>
            </ul>
            <p className="mt-4 text-sm">© {new Date().getFullYear()} Allcrownworks. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
