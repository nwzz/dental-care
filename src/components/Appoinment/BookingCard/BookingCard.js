import React from 'react';
import AppoinmentForm from '../AppoinmentForm/AppoinmentForm';

const BookingCard = ({booking}) => {
    return (
        <div className="col-md-4 ml-5 mt-5 ">
            <div className="card p-3">
                <div className="card-body text-center" >
                    <h4 className="card-title text-brand">{booking.subject}</h4>
                    <h6>{booking.visitingHour}</h6>
                    <small>{booking.totalSpace} Space available</small><br /> <br />
                    <button className="btn btn-brand">Book Appointment</button>
                    <AppoinmentForm></AppoinmentForm>
                </div>
                
            </div>
            
        </div>
    );
};

export default BookingCard;