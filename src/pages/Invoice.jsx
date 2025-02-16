import React, { useRef } from 'react';
import TopLayout from '../layout/TopLayout';
import RootLayout from '../layout/RootLayout';
import { toPng } from 'html-to-image';
import PassengerInvoice from './PassengerInvoice';
import CompanyInvoice from './CompanyInvoice';
import download from 'downloadjs';

const Invoice = () => {

    const invoiceRef = useRef(null);

    const handleDownloard = async () => {
        if(invoiceRef.current === null) return;

        try{
            //convert invoice car to an image
            const dataUrl = await toPng(invoiceRef.current);

            //downloard the image
            download(dataUrl, 'SL-Highway-invoice.png');

        }catch(error){
            console.error("Error while downloarding the invoice",error);
        }
    }


  return (
    <div className='w-full space-y-12 pb-16'>
        <TopLayout title={"Collect Your Invoice"} />
        
        <RootLayout className="space-y-12 w-full pb-16">
            <div className='w-full flex justify-center items-center'>
                
                {/* Invoice Card */}
                <div ref={invoiceRef} //refer to invoice card
                    className='w-[90%] grid grid-cols-5 bg-white rounded-3xl border border-neutral-200 shadow-sm relative'
                >
                        
                        {/* Left side for passenger */}
                            <PassengerInvoice/>
                        {/* Right side for company */}
                            <CompanyInvoice/>

                        {/* Cut Circle */}
                        <div className='absolute -top-3 right-[18.8%] h-6 w-6 rounded-full bg-neutral-50 border border-neutral-50'/>

                        <div className='absolute -bottom-3 right-[18.8%] h-6 w-6 rounded-full bg-neutral-50 border border-neutral-50'/>

                        

                </div>
            </div>
                {/* Downloard Invoice Card Button */}
                <div className='w-full flex justify-center items-center'>
                    <button onClick={handleDownloard} className='w-fit px-8 h-10 bg-primary text-neutral font-bold text-lg rounded-lg'>
                        Downloard Invoice
                    </button>
                </div>
        </RootLayout>
      
    </div>
  )
}

export default Invoice
