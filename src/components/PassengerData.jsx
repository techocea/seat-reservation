import React from 'react'
import PaymentMethod from './PaymentMethod'

const PassengerData = () => {
  return (
    <div className='w-full col-span-4 py-4 space-y-6'>
        <h1 className='text-xl text-neutral-700 font font-semibold'>
            Passenger Information
        </h1>
        <div className='space-y-7'>
            <div className='w-full space-y-2'>
                <label htmlFor="fullname" className='text-sm text-neutral-500 font-medium'>Full Name</label>
                <input type="text" placeholder='Kumara Sangakkara' className='w-full h-14 px-4 bg-neutral-100/40 focus:bg-neutral-100/70 border border-neutral-400/50 text-neutral-600 rounded-xl focus:outline-none focus:border-neutral-400 text-base font-normal placeholder:text-neutral-400' />
            </div>

            <div className='w-full space-y-2'>
                <label htmlFor="email" className='text-sm text-neutral-500 font-medium'>Email Address</label>
                <input type="email" placeholder='Sangakkara@gmail.com' className='w-full h-14 px-4 bg-neutral-100/40 focus:bg-neutral-100/70 border border-neutral-400/50 text-neutral-600 rounded-xl focus:outline-none focus:border-neutral-400 text-base font-normal placeholder:text-neutral-400' />
            </div>

            <div className='w-full space-y-2'>
                <label htmlFor="phone" className='text-sm text-neutral-500 font-medium'>Phone Number</label>
                <input type="number" placeholder='077-1234567' className='w-full h-14 px-4 bg-neutral-100/40 focus:bg-neutral-100/70 border border-neutral-400/50 text-neutral-600 rounded-xl focus:outline-none focus:border-neutral-400 text-base font-normal placeholder:text-neutral-400' />
            </div>

            <div className='w-full space-y-2'>
                <label htmlFor="altphone" className='text-sm text-neutral-500 font-medium'>Alternative Phone Number</label>
                <input type="number" placeholder='077-1234567' className='w-full h-14 px-4 bg-neutral-100/40 focus:bg-neutral-100/70 border border-neutral-400/50 text-neutral-600 rounded-xl focus:outline-none focus:border-neutral-400 text-base font-normal placeholder:text-neutral-400' />
            </div>

            <div className='w-full space-y-2'>
                <label className='text-sm text-neutral-500 font-medium'>Pickup Station</label>
                {/* <input type="text" placeholder='Kumara Sangakkara' className='w-full h-14 px-4 bg-neutral-100/40 focus:bg-neutral-100/70 border border-neutral-400/50 text-neutral-600 rounded-xl focus:outline-none focus:border-neutral-400 text-base font-normal placeholder:text-neutral-400' /> */}
                <select className='w-full h-14 px-4 bg-neutral-100/40 focus:bg-neutral-100/70 border border-neutral-400/50 rounded-xl focus:outline-none focus:border-neutral-400 text-base text-neutral-600 font-normal placeholder:text-neutral-400'>
                    <option selected disabled>Choose Your Nearest Pickup Station</option>
                    <option value="galle">Galle</option>
                    <option value="matara">Matara</option>
                    <option value="colombo">Colombo</option>
                    <option value="kandy">Kandy</option>
                </select>

            </div>
        </div>

        {/* Payment Method */}
        <PaymentMethod/>

    </div>
  )
}

export default PassengerData
