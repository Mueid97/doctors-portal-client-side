import React from 'react';
import PrimaryButton from '../../PrimaryButton/PrimaryButton';
import apponmentSection from '../../assets/images/appointment.png'
const Contact = () => {
    return (
        <div>
            <div className="hero min-h-screen mt-36 " style={{ background: `url(${apponmentSection})`, backgroundSize: 'cover' }}>
                <div className="hero-content flex-col ">

                    <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <input type="text" placeholder="Email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <input type="text" placeholder="Subject" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <textarea type="text" placeholder="Message" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <PrimaryButton>Submit</PrimaryButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;