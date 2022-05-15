import React from 'react';
import Footer from '../../share/Footer/Footer';
import Heros from '../Heros/Heros';
import OurServices from '../OurServices/OurServices';
import ApponmenSection from './ApponmenSection';
import Banner from './Banner';
import Contact from './Contact';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Heros></Heros>
            <OurServices></OurServices>
            <ApponmenSection></ApponmenSection>
            <Testimonial></Testimonial>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;