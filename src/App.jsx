import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './pages/Home';
import Events from './pages/Events';
import EventDetails from './pages/EventDetails';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
            <Route exact path="/" component={Home} />
            <Route exact path="/events" component={Events} />
            <Route path="/events/:id" component={EventDetails} />
            <Route path="/about-us" component={AboutUs} />
            <Route path="/contact" component={Contact} />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
