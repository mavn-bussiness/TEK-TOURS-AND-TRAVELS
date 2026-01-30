import React from 'react';
import './App.css';
import TopBanner from './components/TopBanner';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import Destinations from './components/Destinations';
import Footer from './components/Footer';
import { Package } from 'lucide-react';
import Packages from './components/Packages';

function App() {
  return (
    <div className="App">
      <TopBanner />
      <Navbar />
      <Hero />
      <Introduction />
      <Destinations/>
      <Packages/>
      <Footer/>
      {/* More sections will be added here as we build them */}
    </div>
  );
}

export default App;