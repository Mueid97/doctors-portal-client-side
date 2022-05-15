import React from 'react';
import bannarImg from '../../assets/images/chair.png'
import PrimaryButton from '../../PrimaryButton/PrimaryButton';
import bgBanner from '../../assets/images/bg.png'
const Banner = () => {
    return (

        <div style={{ background: `url(${bgBanner})`, backgroundSize: 'cover' }}>
            <div className='px-12'>
                <div className="hero min-h-screen  ">
                    <div className="hero-content flex-col lg:flex-row-reverse gap-x-28">
                        <img src={bannarImg} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                        <div>
                            <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <PrimaryButton>Get started</PrimaryButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Banner;