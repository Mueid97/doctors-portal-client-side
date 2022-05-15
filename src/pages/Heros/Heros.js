import React from 'react';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'
import Hero from './Hero';
const Heros = () => {

    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 lg:mt-10 gap-6 px-12'>
            <Hero cardTitle="Opening Hours" detail="EveryDay 10qm-5pm" bgclass="bg-gradient-to-r from-secondary to-primary" img={clock} ></Hero>
            <Hero cardTitle="Visite Our Location" detail="Uttora-6, Dhaka" bgclass="bg-accent" img={marker}  ></Hero>
            <Hero cardTitle="Contact us Now" detail="+8801719844338" bgclass="bg-gradient-to-r from-secondary to-primary" img={phone} ></Hero>
        </div>
    );
};

export default Heros;