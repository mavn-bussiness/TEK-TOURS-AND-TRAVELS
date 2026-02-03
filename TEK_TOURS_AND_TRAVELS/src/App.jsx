import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import TopBanner from './components/TopBanner';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import Destinations from './components/Destinations';
import GalleryPreview from './components/GalleryPreview';
import Footer from './components/Footer';
import Packages from './components/Packages';
import AllDestinations from './pages/AllDestinations';
import AllPackages from './pages/AllPackages';
import DestinationDetail from './pages/DestinationDetail';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Booking from './pages/Booking';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <TopBanner />
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Introduction />
            <Destinations />
            <Packages />
            <GalleryPreview />
          </>
        } />
        <Route path="/destinations" element={<AllDestinations />} />
        <Route path="/destination/:id" element={<DestinationDetail />} />
        <Route path="/packages" element={<AllPackages />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;