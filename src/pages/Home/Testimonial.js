import React from 'react';
import quote from '../../assets/icons/quote.svg'
import TestimonialCard from '../../share/TestimonialCard';
import patient1 from '../../assets/images/people1.png'
import patient2 from '../../assets/images/people2.png'
import patient3 from '../../assets/images/people3.png'
const Testimonial = () => {
    const patients = [
        {
            "_id": 1,
            "name": "William carry",
            "city": "London",
            "message": "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            "img": patient1,
        },
        {
            "_id": 2,
            "name": "William carry",
            "city": "London",
            "message": "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            "img": patient2,
        },
        {
            "_id": 3,
            "name": "William carry",
            "city": "London",
            "message": "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            "img": patient3,
        },
    ]

    return (
        <section className='lg:px-12 px-12'>
            <div className='flex justify-between pt-5'>
                <div className=''>
                    <h3 className='text-primary uppercase text-2xl'>Testimonial</h3>
                    <h1 className='text-accent uppercase text-4xl'>Whats Our patients says</h1>
                </div>
                <div>
                    <img style={{ width: '192px', height: '156px' }} src={quote} alt="" />
                </div>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-28'>
                {
                    patients.map(patient => <TestimonialCard
                        key={patient._id}
                        patient={patient}
                    ></TestimonialCard>)
                }
            </div>
        </section>
    );
};

export default Testimonial;