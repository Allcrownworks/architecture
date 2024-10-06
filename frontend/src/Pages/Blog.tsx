
const articles = [
  {
    id: 1,
    title: '10 Tips for Designing Your Dream Home',
    excerpt: 'Discover essential tips for creating a home that reflects your style and meets your needs.',
    imageUrl: '/path-to-image1.jpg',
    link: '#',
  },
  {
    id: 2,
    title: 'The Importance of Sustainable Architecture',
    excerpt: 'Learn how sustainable practices are reshaping the future of architecture.',
    imageUrl: '/path-to-image2.jpg',
    link: '#',
  },
  {
    id: 3,
    title: 'Trends in Interior Design for 2024',
    excerpt: 'Explore the latest trends that will dominate the interior design landscape this year.',
    imageUrl: '/path-to-image3.jpg',
    link: '#',
  },
  // Add more articles as needed
];

const LatestNews = () => {
  return (
    <section id="latest-news" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Latest News & Blog</h2>
          <p className="text-lg text-gray-600">
            Stay updated with our latest articles, design tips, and industry news.
          </p>
        </div>

        {/* Recent Articles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {articles.map(article => (
            <div key={article.id} className="bg-gray-100 rounded-lg shadow-md overflow-hidden">
              <img src={article.imageUrl} alt={article.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <a
                  href={article.link}
                  className="text-blue-600 hover:underline"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Feature a Signature Project */}
        <div className="bg-gray-200 rounded-lg shadow-md p-6 text-center">
          <h3 className="text-2xl font-bold mb-4">Featured Project: Modern Villa</h3>
          <img src="/path-to-featured-project.jpg" alt="Modern Villa" className="w-full h-64 object-cover mb-4 rounded-md" />
          <p className="text-gray-600 mb-4">
            Take a look at our recently completed Modern Villa, showcasing innovative design and sustainable materials.
          </p>
          <a
            href="#"
            className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700"
          >
            View Project
          </a>
        </div>

        {/* CTA: Subscribe to Our Newsletter */}
        <div className="text-center mt-12">
          <h3 className="text-xl font-bold mb-4">Subscribe to Our Newsletter</h3>
          <p className="text-gray-600 mb-4">Get the latest news and updates directly to your inbox.</p>
          <a
            href="#"
            className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700"
          >
            Subscribe
          </a>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
