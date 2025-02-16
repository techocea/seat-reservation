import React, { useState } from 'react';
import PaymentCard from './PaymentCard';
import MasterCardImg from '/mastercard3.png';
import CreditCardImg from '/credit card.png';
import { FaPlus } from 'react-icons/fa';

const PaymentMethod = () => {

    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

    const handleChange = (e) => {
        setSelectedPaymentMethod(e.target.value);
    }

    return (
        <div className='w-full space-y-3'>
            <h6 className='text-sm text-neutral-500 font-medium'>
                Select Payment Method
            </h6>
            <div className='w-full grid grid-cols-2 gap-10'>

            <PaymentCard 
                    selectedpayment={selectedPaymentMethod} 
                    value={"MasterCard"} 
                    onChange={handleChange} 
                    cardHolderName={"Osanda Indunika"} 
                    cardNumber={"8888"} 
                    cardImage={MasterCardImg} 
                />
                <PaymentCard 
                    selectedpayment={selectedPaymentMethod} 
                    value={"CreditCard"} 
                    onChange={handleChange} 
                    cardHolderName={"Osanda Indunika"} 
                    cardNumber={"8899"} 
                    cardImage={CreditCardImg} 
                />

            </div>

            <div className='w-full flex justify-end'>
                <div className='w-fit flex items-center justify-center gap-x-2 cursor-pointer text-base font-normal text-primary'>
                    <FaPlus/>
                    <p className='capitalize'>Add New Card</p>
            
                </div>
            </div>
        </div>
    )
}

export default PaymentMethod;