import React from 'react'
import HeroSection from '../../heroSection/HeroSection';
import Footer from '../../footer/Footer';
import Pricing from '../../pricing/Pricing'
import {homeObjOne,homeObjTwo,homeObjThree,homeObjFour} from './Data';

function Home() {
    return (
        <>
           <HeroSection {...homeObjOne} /> 
           <HeroSection {...homeObjThree} /> 
           <HeroSection {...homeObjTwo} /> 
           <Pricing />
           <HeroSection {...homeObjFour} /> 
           <Footer />
        </>
    )
}

export default Home
