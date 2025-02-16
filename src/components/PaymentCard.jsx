import React from 'react'
import { IoMdRadioButtonOff, IoMdRadioButtonOn } from 'react-icons/io'

const PaymentCard = ({
    selectedpayment,
    value,
    onChange,
    cardHolderName,
    cardNumber,
    cardImage,
}) => {
  return (
    <label className={'w-full flex items-end px-4 py-2 border-2 ${selectedpayment === value ? "border-indigo-500/15" : "border-neutral-300 bg-neutral-100/40"}rounded-xl relative cursor-pointer'}>

        <div className='w-full flex items-center justify-between gap-7'>
            <div className='flex items-center gap-x-3'>
                <div className='w-fit h-16 rounded-lg'>
                    <img src="{cardImage}" alt="payment img" className='w-full h-full object-contain object-center rounded-lg' />
                </div>
                <div className='space-y-0.5'>
                    <h1 className='text-base text-neutral-600 font-medium'>{cardHolderName}</h1>
                    <p className='text-neutral-500 text-sm font-normal'>
                        ****{cardNumber.slice(-4)}
                    </p>
                </div>
            </div>

            <div className='flex items-center justify-center'>
                {selectedpayment === value ? (
                    <IoMdRadioButtonOn className='w-7 h-7 text-indigo-500'/>
                ) : (
                    <IoMdRadioButtonOff className='w-7 h-7 text-neutral-500s'/>
                )
            }
            </div>
        </div>

        {/* radio button */}
        <input type="radio" value={value} checked={selectedpayment === value} onChange={onChange} className='hidden' />

    </label>
  )
}

export default PaymentCard
