import Layout from "./Layout/Layout"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Portfolio from "./Pages/Portfolio";
import Service from "./Pages/Service";
import Testimonial from "./Pages/Testimonial"
// import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import ConsultationForm from "./Pages/Get"


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PortfolioDetail from "./Pages/PortfolioDetail";


// import GetStarted from './GetStarted';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
       <Route path="/about" element={<Layout><About /></Layout>}  />
       <Route path="/portfolio" element={<Layout><Portfolio /></Layout>}  />
       <Route path="/portfolio/:id" element={<Layout><PortfolioDetail /></Layout>}  />
          <Route path="/services" element={<Layout><Service /></Layout>} />
          <Route path="/testimonial" element={<Layout><Testimonial/></Layout>} />
        {/* <Route path="/blog" element={<Layout><Blog/></Layout>} /> */}
       <Route path="/contact" element={<Layout><Contact /></Layout>} />
      <Route path="/get-started" element={<Layout><ConsultationForm  /></Layout>} />
      </Routes>
    </Router>
  );
};

export default App;


    

