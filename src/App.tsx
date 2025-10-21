import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About'; 
import { Home } from './pages/Home/Home';
import Footer from './components/Footer';
import Contact from './pages/Contact Us/Contact';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
         </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
