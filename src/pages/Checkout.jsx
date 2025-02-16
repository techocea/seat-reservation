import React from 'react'
import TopLayout from '../layout/TopLayout';
import RootLayout from '../layout/RootLayout';
import PassengerData from '../components/PassengerData';
import BookingStatus from '../components/BookingStatus';

const Checkout = () => {
  return (
    <div className='w-full space-y-12 pb-16'>
        <TopLayout title={"Checkout"} />
        
        <RootLayout className="space-y-12 w-full pb-16">
            <div className='w-full grid grid-cols-7 items-start gap-44 relative'>
                {/* Passenger Details */}
                <PassengerData/>



                {/* Ticket Report Status */}
                <BookingStatus/>

            </div>
        </RootLayout>
      
    </div>
  )
}

export default Checkout
