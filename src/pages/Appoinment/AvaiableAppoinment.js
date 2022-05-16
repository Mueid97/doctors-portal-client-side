import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import ServiceCard from './ServiceCard';
import { format } from 'date-fns';

const AvaiableAppoinment = ({date}) => {
    const [services, setServices] = useState([]);
    const [treatment,setTreatment] = useState(null);

    const formattedDate = format(date, 'PP');

        useEffect(()=>{
            fetch(`http://localhost:5000/avaiable?date=${formattedDate}`)
            .then(res => res.json())
            .then(data=> setServices(data));
        },[formattedDate])

    
    return (
        <div>
            <h1 className='text-secondary text-bold text-2xl text-center mt-5'>Avaiable Appoinment Date: {format(date, 'PP')}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-12 mt-20 mb-20'>
                {
                    services.map(service => <ServiceCard
                    key={service._id}
                    service={service}
                    setTreatment={setTreatment}
                    ></ServiceCard>)
                }
            </div>
            {treatment && <BookingModal date={date}  treatment={treatment} setTreatment={setTreatment}></BookingModal>}
        </div>
    );
};

export default AvaiableAppoinment;