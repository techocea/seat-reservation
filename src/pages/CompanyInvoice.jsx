import React from 'react'
import { FaPhone } from 'react-icons/fa'

const CompanyInvoice = () => {
  return (
    <div className='w-full col-span-1 border-dashed border-l-2 border-neutral-400 relative'>
      <div className='w-full bg-primary px-4 py-5 rounded-tr-3xl'>
            <h1 className='text-2xl text-neutral-50 font-bold text-center'>
                Bus Ticket
            </h1>
      </div>
      <div className='w-full px-4 py-7 space-y-1'>
        <p className='text-sm text-neutral-600 font-normal'>
            Bill No: 356
        </p>

        <p className='text-sm text-neutral-600 font-normal'>
            Date: 2025-09-12
        </p>

        <p className='text-sm text-neutral-600 font-normal'>
            Name: kevin
        </p>

        <p className='text-sm text-neutral-600 font-normal'>
            From: Matara <span className='text-xs'>(Bus Park)</span>
        </p>

        <p className='text-sm text-neutral-600 font-normal'>
            From: Galle <span className='text-xs'>(Bus Park)</span>
        </p>

        <p className='text-sm text-neutral-600 font-normal'>
            Departure Time: 08:00 AM
        </p>

        <p className='text-sm text-neutral-600 font-normal'>
            Seat No: A2, A3, A4, B6
        </p>

        <p className='text-sm text-neutral-600 font-normal'>
           Total Passengers 04 Only
        </p>

        <p className='text-sm text-neutral-600 font-normal'>
           Total Price: Rs.1600.00
        </p>
      </div>

      {/* Right Bottom section */}
      <div className='w-full bg-primary absolute bottom-0 left-0 rounded-br-3xl flex items-center justify-center px-5 py-1.5'>
            
            <div className='flex items-center gap-x-2'>
                            <FaPhone className='w-3 h-3 text-neutral-100'/>
                            <p className='text-sm text-neutral-100 font-light'>
                                077-1234567
                            </p>
            </div>
        </div>
    </div>
  )
}

export default CompanyInvoice
