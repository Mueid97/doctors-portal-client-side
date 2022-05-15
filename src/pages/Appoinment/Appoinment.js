import React, { useState } from 'react';
import Footer from '../../share/Footer/Footer';
import AppoinmentBanner from './AppoinmentBanner';
import AvaiableAppoinment from './AvaiableAppoinment';

const Appoinment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <AppoinmentBanner date={date} setDate={setDate}></AppoinmentBanner>
            <AvaiableAppoinment date={date} ></AvaiableAppoinment>
            <Footer></Footer>
        </div>
    );
};

export default Appoinment;