import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../../share/Loading/Loading';

const MyAppoinment = () => {
    const [appionment, setAppionment] = useState([]);
    const [user, loading] = useAuthState(auth);
    

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?patiant=${user.email}`)
                .then(res => res.json())
                .then(data => setAppionment(data));
        }
    }, [user])

    if(loading){
        return <Loading></Loading>
    }
    return (
        <div>
            <h1>My Appionments: {appionment.length} </h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
                  
                    <thead>
                        <tr className='text-center'>
                            <th></th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Treatment</th>
                            <th></th>
                            <th></th>

                        </tr>
                    </thead>
                    <tbody>
                       {
                           appionment.map((a, index)=><tr className='text-center'>
                               
                            <th>{index+1}</th>
                            <td>{a.patiantName}</td>
                            <td>{a.date}</td>
                            <td>{a.slot}</td>
                            <td>{a.treatment}</td>
                            <td><button class="btn btn-success btn-sm">Pay</button></td>
                            <td><button class="btn btn-error btn-sm">Delete</button></td>
                            
                        </tr>)
                       }
                        
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppoinment;