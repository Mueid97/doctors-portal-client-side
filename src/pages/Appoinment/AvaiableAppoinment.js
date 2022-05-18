import React, {  useState } from 'react';
import BookingModal from './BookingModal';
import ServiceCard from './ServiceCard';
import { format } from 'date-fns';
import { useQuery } from 'react-query';
import Loading from '../../share/Loading/Loading';

const AvaiableAppoinment = ({date}) => {
   
    const [treatment,setTreatment] = useState(null);

    const formattedDate = format(date, 'PP');
    const {data: services, isLoading, refetch} = useQuery(['avaiable', formattedDate], ()=>
        fetch(`http://localhost:5000/avaiable?date=${formattedDate}`)
           .then(res => res.json())
    )

    if(isLoading){
        return <Loading></Loading>
    }
       

    
    return (
        <div>
            <h1 className='text-secondary text-bold text-2xl text-center mt-5'>Avaiable Appoinment Date: {format(date, 'PP')}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-12 mt-20 mb-20'>
                {
                    services?.map(service => <ServiceCard
                    key={service._id}
                    service={service}
                    setTreatment={setTreatment}
                    ></ServiceCard>)
                }
            </div>
            {treatment && <BookingModal date={date} refetch={refetch}  treatment={treatment} setTreatment={setTreatment}></BookingModal>}
        </div>
    );
};

export default AvaiableAppoinment;