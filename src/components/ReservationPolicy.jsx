import React from 'react'

const ReservationPolicy = () => {
  return (
    <div className='col-span-4 w-full border-l border-neutral-300 pl-5'>
      <div className='w-full space-y-3 text-left'>
            <h1 className='text-lg text-neutral-600 font-medium text-start'>
                Reservation Policies
            </h1>
            <ul className='w-full list-disc list-outside space-y-2.5 px-4'>
                <li className='text-sm text-neutral-500 font-normal'>Please note that this ticket is non-refundable.</li>
                <li className='text-sm text-neutral-500 font-normal'>Passengers must keep their tickets until the journey ends.</li>
                <li className='text-sm text-neutral-500 font-normal'>Tickets can be cancelled 24 hours before the departure time.</li>
                <li className='text-sm text-neutral-500 font-normal'>Bus Service may be cancelled,rescheduled or delayed due to natural disasters.</li>
                <li className='text-sm text-neutral-500 font-normal'>Passengers must arrive the bording point 30min before the departure time.</li>
                
            </ul>
      </div>
    </div>
  )
}

export default ReservationPolicy
