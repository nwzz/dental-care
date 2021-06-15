import React from 'react';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';
import ServiceDetails from '../ServiceDetails/ServiceDetails';

const serviceData = [
    {
        name: 'Fluoride Treatment',
        img: fluoride
    },
    {
        name: 'Cavity Filling',
        img: cavity
    },
    {
        name: 'Tooth Whitening',
        img: whitening
    }
]

const Services = () => {
    return (
        <section className="services-container pb-5 mt-5">
            <div className="text-center mt-5 mb-3">
                <h4 style={{ color: '#1cc7c1' }}>OUR SERVICES</h4>
                <h2>Services We Provides</h2>
            </div>
            <div className="d-flex justify-content-center">
                <div className="row w-75">
                    {
                        serviceData.map(service => <ServiceDetails service={service}></ServiceDetails>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;