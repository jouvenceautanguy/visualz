import React from 'react';
import Hero from '../components/landingPage/Hero/Hero';
import Newsletter from './landingPage/Newsletter/Newsletter';

function LandingPage() {
  return (
    <div className="Landing">
      <Hero/>
      <Newsletter/>
         
    </div>
  );
}

export default LandingPage;