import React from 'react';

const TestimonialCard = ({ patient }) => {
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">

                    <p>{patient.message}</p>
                </div>
                <div className='flex justify-center items-center gap-6'>
                    <div>
                        <div className="avatar">
                            <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={patient.img} alt='' />
                            </div>
                        </div>
                    </div>
                    <div className='pb-6'>
                        <h2 className="card-title">{patient.name}</h2>
                        <h4>{patient.city}</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;