import React from 'react';

const ServiceDetails = ({ service }) => {
    return (
        <div className="col-md-4 text-center mt-5">
            <img style={{height:'50px'}} src={service.img} alt="" />
            <h4 className="mt-3 mb-3">
                {service.name}
            </h4>
            <small className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet nulla ab necessitatibus atque id nemo!</small>

        </div>

    );
};

export default ServiceDetails;