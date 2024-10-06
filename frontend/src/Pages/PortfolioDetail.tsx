import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import pdfFile from "../assets/A_merge-compressed.pdf";
import owo from "../assets/Owodunni-compressed (1).pdf";
import okun from "../assets/OKUNNOWO-compressed.pdf";
import imgA from "../assets/A.jpg";
import img1 from "../assets/1.jpg";
import imgC from "../assets/C.jpg";
// import imgD from "../assets/1b.jpg";
// import imgE from "../assets/Hero.jpg";
// import imgF from "../assets/Aruna.jpg";
// import imgG from "../assets/Akande.jpg";

const ProjectDetail = () => {
  const { id } = useParams();

  // Example project data (this would ideally come from a backend or context)

  const projects = [
    {
      id: 1,
      title: "Modern Refine Structure",
      imageUrl: imgA,
      description:
        "An exquisite and roomy abode that reflects meticulous attention to detail, providing a peaceful and adaptable living space that merges contemporary design with a friendly and inviting ambiance.",
      features: "Features",
      body: "Lounge for relaxation and entertainment. Modern kitchen with ample storage and counter space. Dining room for family meals and gatherings. Antiroom as a small reception area. 4 spacious bedrooms with natural light. 5 toilets and bathrooms for convenience. Study room for work or study purposes. Number of floors: 2. Number of units: 1",
      pdfLink: pdfFile,
    },
    {
      id: 2,
      title: "Modern Exquisite Structure",
      imageUrl: img1,
      description:
        "Beautifully designed structure seamlessly combines modern elegance with practicality, offering a perfect balance of luxury and comfort for an exceptional living experience.",
      features: "Features",
      body: "This magnificent building offers an elegant and spacious living experience, featuring 8 rooms, 4 dining areas, 4 lounges, 10 bathrooms and toilets, and 4 modern kitchens. Designed to blend functionality with luxury, it provides ample space for relaxation, family gatherings, and everyday living. Number of floors: 2. Number of units: 4.",
      pdfLink: owo,
    },
    {
      id: 3,
      title: "Modern Refine Structure",
      imageUrl: imgC,
      description:
        "An elegant, spacious, and luxurious home with a functional and sophisticated design that offers a tranquil and versatile living experience, blending modern elements with a welcoming and harmonious atmosphere.",
      features: "Features",
      body: "This duplex offers 4 spacious bedrooms, 1 dining area, 2 lounges for relaxation, 4 bathrooms and toilets for convenience, and 2 modern kitchens with ample storage. Number of floors: 2. Number of units: 1.",
      pdfLink: okun,
    },
    // {
    //   id: 1,
    //   title: "Modern Refine Structure",
    //   imageUrl: imgA,
    //   description:
    //     "This magnificent residence boasts a chic and spacious layout, offering a sophisticated yet comfortable lifestyle that harmoniously balances modern aesthetics with a welcoming and serene environment.",
    //   body: "Lounge for relaxation and entertainment. Modern kitchen with ample storage and counter space. Dining room for family meals and gatherings. Antiroom as a small reception area. 4 spacious bedrooms with natural light. 5 toilets and bathrooms for convenience. Study room for work or study purposes. Number of floors: 2. Number of units: 1",
    //   pdfLink: pdfFile,
    // },
    // {
    //   id: 1,
    //   title: "Modern Refine Structure",
    //   imageUrl: imgA,
    //   description:
    //    "A refined and expansive dwelling that showcases a perfect blend of luxury and practicality, creating a serene environment that embraces both style and comfort for its residents.",
    //   body: "Lounge for relaxation and entertainment. Modern kitchen with ample storage and counter space. Dining room for family meals and gatherings. Antiroom as a small reception area. 4 spacious bedrooms with natural light. 5 toilets and bathrooms for convenience. Study room for work or study purposes. Number of floors: 2. Number of units: 1",
    //   pdfLink: pdfFile,
    // },
    // {
    //   id: 1,
    //   title: "Modern Refine Structure",
    //   imageUrl: imgA,
    //   description:
    //     "This stunning home combines sophistication and functionality, offering spacious living areas and an atmosphere of tranquility, making it an ideal sanctuary for modern living.",
    //   body: "Lounge for relaxation and entertainment. Modern kitchen with ample storage and counter space. Dining room for family meals and gatherings. Antiroom as a small reception area. 4 spacious bedrooms with natural light. 5 toilets and bathrooms for convenience. Study room for work or study purposes. Number of floors: 2. Number of units: 1",
    //   pdfLink: pdfFile,
    // },
    // {
    //   id: 1,
    //   title: "Modern Refine Structure",
    //   imageUrl: imgA,
    //   description:
    //    "A beautifully designed residence that exudes elegance and comfort, featuring a harmonious layout that promotes relaxation and versatility while seamlessly integrating contemporary style with inviting warmth.",
    //   body: "Lounge for relaxation and entertainment. Modern kitchen with ample storage and counter space. Dining room for family meals and gatherings. Antiroom as a small reception area. 4 spacious bedrooms with natural light. 5 toilets and bathrooms for convenience. Study room for work or study purposes. Number of floors: 2. Number of units: 1",
    //   pdfLink: pdfFile,
    // },
    // {
    //   id: 1,
    //   title: "Modern Refine Structure",
    //   imageUrl: imgA,
    //   description:
    //     "An elegant, spacious, and luxurious home with a functional and sophisticated design that offers a tranquil and versatile living experience, blending modern elements with a welcoming and harmonious atmosphere.",
    //   features: "Features",
    //   body: "Lounge for relaxation and entertainment. Modern kitchen with ample storage and counter space. Dining room for family meals and gatherings. Antiroom as a small reception area. 4 spacious bedrooms with natural light. 5 toilets and bathrooms for convenience. Study room for work or study purposes. Number of floors: 2. Number of units: 1",
    //   pdfLink: pdfFile,
    // },
    // {
    //   id: 1,
    //   title: "Modern Refine Structure",
    //   imageUrl: imgA,
    //   description:
    //     "An elegant, spacious, and luxurious home with a functional and sophisticated design that offers a tranquil and versatile living experience, blending modern elements with a welcoming and harmonious atmosphere.",
    //   features: "Features",
    //   body: "Lounge for relaxation and entertainment. Modern kitchen with ample storage and counter space. Dining room for family meals and gatherings. Antiroom as a small reception area. 4 spacious bedrooms with natural light. 5 toilets and bathrooms for convenience. Study room for work or study purposes. Number of floors: 2. Number of units: 1",
    //   pdfLink: pdfFile,
    // },
    // {
    //   id: 1,
    //   title: "Modern Refine Structure",
    //   imageUrl: imgA,
    //   description:
    //     "An elegant, spacious, and luxurious home with a functional and sophisticated design that offers a tranquil and versatile living experience, blending modern elements with a welcoming and harmonious atmosphere.",
    //   features: "Features",
    //   body: "Lounge for relaxation and entertainment. Modern kitchen with ample storage and counter space. Dining room for family meals and gatherings. Antiroom as a small reception area. 4 spacious bedrooms with natural light. 5 toilets and bathrooms for convenience. Study room for work or study purposes. Number of floors: 2. Number of units: 1",
    //   pdfLink: pdfFile,
    // },
    // {
    //   id: 1,
    //   title: "Modern Refine Structure",
    //   imageUrl: imgA,
    //   description:
    //     "An elegant, spacious, and luxurious home with a functional and sophisticated design that offers a tranquil and versatile living experience, blending modern elements with a welcoming and harmonious atmosphere.",
    //   features: "Features",
    //   body: "Lounge for relaxation and entertainment. Modern kitchen with ample storage and counter space. Dining room for family meals and gatherings. Antiroom as a small reception area. 4 spacious bedrooms with natural light. 5 toilets and bathrooms for convenience. Study room for work or study purposes. Number of floors: 2. Number of units: 1",
    //   pdfLink: pdfFile,
    // },

    // Add more projects...
  ];

  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return <h2>Project not found!</h2>;
  }

  return (
    <div className="p-6 mx-auto bg-white shadow-lg rounded-lg mt-8 flex-1 py-10">
      <div className="flex flex-col md:flex-row items-center">
        {/* Image Section */}
        <div className="md:w-1/2 h-full">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="rounded-lg w-full h-full object-cover transition-transform duration-500 transform hover:scale-105"
          />
        </div>

        {/* Details Section */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0 md:ml-8 h-auto flex flex-col justify-center p-4">
          <h1 className="text-2xl md:text-4xl font-bold text-orange-600 mb-2 break-words">
            {project.title}
          </h1>
          <p className="text-sm md:text-base text-gray-700 mb-6 break-words">
            {project.description}
          </p>
          <h1 className="text-xl md:text-xl font-bold text-orange-600 mb-2 break-words">
            {project.features}
          </h1>
          <p className="text-sm md:text-base text-gray-600 mb-4 break-words">
            {project.body}
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="">
              {/* PDF Download Button */}
              <a
                href={project.pdfLink}
                target="_blank"
                rel="noopener noreferrer"
                className="border-orange-500 border-2 bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300 ease-in-out inline-block mt-4"
              >
                Download PDF
              </a>
            </div>
            {/* Back to Portfolio Button */}
            <div className="text-center">
              <Link to="/portfolio">
                <button className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out mt-4">
                  Back to Portfolio
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
