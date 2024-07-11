import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Events from './pages/Events';
import EventDetails from './pages/EventDetails';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import InteractiveButton from './components/InteractiveButton';
import InteractiveCard from './components/InteractiveCard';
import PageLoading from './components/PageLoading';
import PageTransition from './components/PageTransition';
import FloatingGradient from './components/FloatingGradient';
import InteractiveSVG from './components/InteractiveSVG';

function App() {
  return (
    <Router>
      <div className="relative">
        <FloatingGradient />
        <InteractiveSVG />
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<PageTransition><Home /></PageTransition>} />
              <Route path="/events" element={<PageTransition><Events /></PageTransition>} />
              <Route path="/events/:id" element={<PageTransition><EventDetails /></PageTransition>} />
              <Route path="/about-us" element={<PageTransition><AboutUs /></PageTransition>} />
              <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
      <PageLoading />
    </Router>
  );
}

export default App;
