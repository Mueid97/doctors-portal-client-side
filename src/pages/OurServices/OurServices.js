import React from 'react';
import OurService from '../../share/OurService/OurService';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whiten from '../../assets/images/whitening.png';
import treatment from '../../assets/images/treatment.png'
import PrimaryButton from '../../PrimaryButton/PrimaryButton';
const OurServices = () => {
    const services = [
        {
            "_id": 1,
            "name": "Fluoride Treatment",
            "details": "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            "img": fluoride,
        },
        {
            "_id": 2,
            "name": "Cavity Filling",
            "details": "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            "img": cavity,
        },
        {
            "_id": 3,
            "name": "Teeth Whitening",
            "details": "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            "img": whiten,
        },
    ]
    return (
        <section className='mt-32'>
            <div>
                <h4 className='text-center text-primary text-2xl font-bold uppercase'>Our Services</h4>
                <h1 className='text-center text-4xl font-bold uppercase'>Service we Provided</h1>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 px-12'>
                {
                    services.map(service => <OurService
                        key={service._id}
                        service={service}
                    ></OurService>)
                }
            </div>
            <div className='lg:flex justify-center items-center gap-24 lg:px-48 px-12 my-36'>
                <div>
                    <img className='rounded max-w-sm' src={treatment} alt="" />
                </div>
                <div className='mt-4'>
                    <h1 className='text-4xl pb-3 font-extrabold'>Exceptional Dental Care, <br /> on Your Terms</h1>
                    <p className='pb-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </section>
    );
};

export default OurServices;