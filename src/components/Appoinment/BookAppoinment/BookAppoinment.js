import React from 'react';
import BookingCard from '../BookingCard/BookingCard';

const bookingData=[
    {
        subject: 'teeth Orthodontics',
        visitingHour: '6:00 AM - 8:00 PM',
        totalSpace: 10,
    },
    {
        subject: 'teeth Orthodontics',
        visitingHour: '6:00 AM - 8:00 PM',
        totalSpace: 10,
    },
    {
        subject: 'teeth Orthodontics',
        visitingHour: '6:00 AM - 8:00 PM',
        totalSpace: 10,
    },
    {
        subject: 'teeth Orthodontics',
        visitingHour: '6:00 AM - 8:00 PM',
        totalSpace: 10,
    },
    {
        subject: 'teeth Orthodontics',
        visitingHour: '6:00 AM - 8:00 PM',
        totalSpace: 10,
    },
    {
        subject: 'teeth Orthodontics',
        visitingHour: '6:00 AM - 8:00 PM',
        totalSpace: 10,
    },
    
]

const BookAppoinment = ({date}) => {
    return (
        <section className="container">
            <h2 className="text-center text-brand" >Available Appointment on {date.toDateString()} </h2>

            <div className="row">
                {
                    bookingData.map(booking =><BookingCard date={date} booking={booking}></BookingCard>)
                }
            </div>
        </section>
    );
};

export default BookAppoinment;