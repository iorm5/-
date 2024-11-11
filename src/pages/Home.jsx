import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Activities from '../components/Activities';
import Gallery from '../components/Gallery';
import Map from '../components/Map';
import Booking from '../components/Booking';
import Contact from '../components/Contact';

function Home() {
  return (
    <div className="space-y-16">
      <Hero />
      <Features />
      <Activities />
      <Gallery />
      <Map />
      <Booking />
      <Contact />
    </div>
  );
}

export default Home;