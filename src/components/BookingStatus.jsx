import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const BookingStatus = () => {
  return (
    <div className='w-full col-span-3 sticky top-20 space-y-7'>
        <div className='w-full bg-neutral-50 rounded-xl py-4 px-6 border border-neutral-200 shadow-sm space-y-5'>
            <h1 className='text-lg text-neutral-700 font-bold text-center border-b border-neutral-200 pb-4'>
                Your Ticket Report Status
            </h1>
            <div className='space-y-5'>
                <div className='space-y-2 w-full'>
                    <h1 className='text-base text-neutral-700 font-medium'>
                        Your Destinantion
                    </h1>

                    <div className='space-y-0.5 w-full'>
                            <div className='w-full flex items-center justify-between gap-x-5'>
                                <p className='text-sm text-neutral-400 font-normal'>
                                    From <span className='text-xs'>(Galle)</span>
                                </p>
                                <p className='text-sm text-neutral-400 font-normal'>
                                    To <span className='text-xs'>(Matara)</span>
                                </p>
                            </div>

                            <div className='w-full flex items-center justify-between gap-x-4'>
                                <h1 className='text-sm text-neutral-600 font-normal'> 
                                    Colombo <span className='font-medium'>(06:15P.M)</span>
                                </h1>

                                <div className='flex-1 border-dashed border border-neutral-300' />
                                <h1 className='text-sm text-neutral-600 font-normal'> 
                                    Kandy <span className='font-medium'>(04:00P.M)</span>
                                </h1>
                                    
                                    
                                
                            </div>

                            <div className='w-full flex items-center justify-between gap-x-4 mt-1.5'>
                                <h1 className='text-sm text-neutral-600 font-normal'>
                                    Bus No:
                                </h1>
                                <h1 className='text-base text-neutral-700 font-medium'>
                                    (EX1-18)
                                </h1>
                            </div>
                        </div>
                </div>

                <div className='space-y-2 w-full'>
                    <h1 className='text-base text-neutral-700 font-medium'>
                        Your Seats
                    </h1>

                    <div className="w-full flex items-center gap-x-3">
                        <div
                            className="w-9 h-9 bg-neutral-200/80 rounded-lg flex items-center justify-center text-base text-neutral-700 font-semibold"
                            >
                            A2
                        </div>
                        <div
                            className="w-9 h-9 bg-neutral-200/80 rounded-lg flex items-center justify-center text-base text-neutral-700 font-semibold"
                            >
                            A3
                        </div>
                        <div
                            className="w-9 h-9 bg-neutral-200/80 rounded-lg flex items-center justify-center text-base text-neutral-700 font-semibold"
                            >
                            A4
                        </div>
                        <div
                            className="w-9 h-9 bg-neutral-200/80 rounded-lg flex items-center justify-center text-base text-neutral-700 font-semibold"
                            >
                            B6
                        </div>
                    
                    </div>    
                    
                </div>

                <div className='space-y-2 w-full'>
                    <h1 className='text-base text-neutral-700 font-medium'>
                        Total Fare Price
                    </h1>

                    <div className='flex items-center justify-between gap-x-4'>
                                <div className='flex gap-y-0.5 flex-col'>
                                    <h3 className='text-base text-neutral-500 font-medium'>Total Price:</h3>
                                    <span className='text-xs text-neutral-500 font-normal'>(Including all Taxes)</span>
                                    
                                </div>

                                {/* Calculating the total Price */}
                                <p className='text-base text-neutral-600 font-semibold'>
                                    Rs 1600.00
                                </p>
                            </div>

                </div>

            </div> 
        </div>

      <div className='w-full px-1.5'>
      <Link to="/busease/payment" className='w-full bg-primary hover:bg-blue-200 text-sm text-neutral-50 font-normal py-2.5 flex items-center justify-center uppercase rounded-lg transition'>Processed to Pay
        <FaArrowRightLong/>
      </Link>  
      </div>
    </div>
  )
}

export default BookingStatus
