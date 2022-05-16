import React from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../../share/Loading/Loading';
import { toast } from 'react-toastify';

const BookingModal = ({ treatment, date, setTreatment }) => {
    const { _id, name, slots } = treatment;
    const [user, loading] = useAuthState(auth);
    const formatedDate = format(date, 'PP');

    const handleBooking = e => {
        e.preventDefault();
        const slot = e.target.slot.value;
        console.log(_id, name, slot, date);
        //backend
        const booking = {
            treatmentId: _id,
            treatment: name,
            patiantName: user.displayName,
            patiant: user.email,
            date: formatedDate,
            slot,
            phone: e.target.phone.value,

        }
        // send data to backend 
        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.success){
                    toast(`Appoinment is set ${formatedDate} at ${slot}`)
                }else{
                    toast.error(`Already Have an Appoinment ${data.booking?.date} to ${data.booking?.slot}`)
                }
                //modal hide
                setTreatment(null);
            })

    }

    if (loading) {
        return <Loading></Loading>
    }
    // console.log(user)



    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">

                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className=''>
                        <h3 className="font-bold text-lg text-center text-secondary">{name}</h3>
                        <form onSubmit={handleBooking} className='grid grid-cols-1 gap-4 justify-items-center mt-2'>
                            <input type="text" name='name' disabled value={user?.displayName || ' '} className="input input-bordered  w-full max-w-xs" />
                            <input type="email" name='email' disabled value={user?.email || ' '} className="input input-bordered  w-full max-w-xs" />
                            <input type="text" name='phone' placeholder="Phone" className="input input-bordered  w-full max-w-xs" />
                            <input type="text" value={format(date, 'PP')} className="input input-bordered  w-full max-w-xs" disabled />
                            <select name='slot' className="select select-bordered w-full max-w-xs">
                                {
                                    slots.map((slot, index) => <option
                                        value={slot}
                                        key={index}
                                    >{slot}</option>)
                                }


                            </select>
                            <input type="submit" value='Submit' className="btn btn-secondary w-full max-w-xs" />
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BookingModal;