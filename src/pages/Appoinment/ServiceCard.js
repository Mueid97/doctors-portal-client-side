import React from 'react';


const ServiceCard = ({ service, setTreatment }) => {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body text-center">
                    <h2 className="text-2xl text-bold text-secondary text-center">{service.name}</h2>
                    <p>
                        {
                            service.slots.length > 0 ? <span>{service.slots[0]}</span> : <span className='text-red-500'>No space Avaiable</span>
                        }
                    </p>
                    <p> {service.slots.length} {service.slots.length > 1 ? 'spaces' : 'space'} avaiable </p>
                    <div className="card-actions justify-center ">

                        <label onClick={() => setTreatment(service)} disabled={service.slots.length === 0} htmlFor="booking-modal" className="btn modal-button text-white btn-primary ">Book Appoinment</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;