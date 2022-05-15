import React from 'react';
import chair from '../../assets/images/chair.png';
import bg from '../../assets/images/bg.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppoinmentBanner = ({date, setDate}) => {
    
    return (
        <div className="" style={{ background: `url(${bg})`, backgroundSize: 'cover', }}>
            <div className="hero-content flex-col lg:flex-row-reverse justify-evenly">
                <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                <div>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />
                    
                </div>
            </div>
        </div>
    );
};

export default AppoinmentBanner;