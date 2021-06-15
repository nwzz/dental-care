import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons';

const infoData =[
    {
        title: 'Opening Hour',
        description: 'We Open 7 days 24 Hours',
        icon: faClock,
        background:'primary'
    },
    {
        title: 'Visit Our Location',
        description: 'Brooklyn, NY 1000345, US',
        icon: faMapMarker,
        background:'dark'
    },
    {
        title: 'Contact Us Now',
        description: '+13456789043',
        icon: faPhone,
        background:'primary'
    }
]

const BusinessInfo = () => {

    return (
        <section className="d-flex justify-content-center">
            <div className="w-75 row">
            {
                infoData.map(info => <InfoCard info={info} ></InfoCard>)
            }
            </div>
        </section>
    );
};

export default BusinessInfo;