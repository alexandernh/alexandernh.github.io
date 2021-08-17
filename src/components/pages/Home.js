import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Cool from '../Cool';

function componentDidMount() {
  window.scrollTo(0, 0)
}


function Home() {
  componentDidMount();
  return (
    <>
      <HeroSection />
      {/* <Cards />
      <Footer /> */}
      {/* <Cool /> */}
    </>
  );
}

export default Home;
