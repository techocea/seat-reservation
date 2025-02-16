import React from 'react';
import { Link } from 'react-router-dom';
import TopLayout from '../layout/TopLayout';
import RootLayout from '../layout/RootLayout';
import Warning from '../components/Warning';
import BusSeat from './BusSeat';
import ToggleBtn from '../components/ToggleBtn';
import Amenities from '../components/Amenities';
import ReservationPolicy from '../components/ReservationPolicy';
import BusImage from '../components/BusImage';

const Detail = () => {
  // show the warning message
  const message = (
    <>
      One individual can only book 10 seats. If you want to book more than 10 seats,
      please <Link to={"/about"} className="text-yellow-700 font-medium">contact our support team</Link>
    </>
  );

  return (
    <div className='w-full space-y-12 pb-16'>
      <TopLayout title={"Bus Seat Details"} />
      
      <RootLayout className="space-y-12 w-full pb-16">
        {/* Seat Selection and selection action details */}
        <div className='w-full space-y-8'>
          {/* Warning Message */}
          <Warning message={message} />
          {/* Seat Layout */}
          <BusSeat/>
        </div>

        {/* Bus Details */}
        <div className='w-full flex items-center justify-center flex-col gap-8 text-center'>
          {/* Short Description about bus */}
          <p className='text-base text-neutral-500 font-normal text-justify'>
            This is just a sample text.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat aliquam corporis reiciendis voluptates consectetur aspernatur fuga unde quo nostrum. Itaque laborum quasi sint eligendi assumenda recusandae earum amet perferendis minima.
            <span className='text-lg text-neutral-600 font-medium ml-2'>Want to see more about the bus?</span>
          </p>


          {/* Button */}
          <div className='w-full items-center justify-center gap-6 flex-col'>

            <ToggleBtn buttonText={"See Bus Details"} buttonTextHidden={"Hide Bus Details"}>
              <div className='w-full space-y-10'>

                {/* Reservation policy and amenities */}
                <div className='w-full grid grid-cols-7 gap-20'>

                  {/* Amenities */}
                  <Amenities/>

                  {/* Reservation Policy */}
                  <ReservationPolicy/>
                </div>


                {/* Bus Images */}
                  <BusImage/>
              </div>
            </ToggleBtn>
          </div>


        </div>
      </RootLayout>
    </div>
  );
}

export default Detail;