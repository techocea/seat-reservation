import React from 'react'

const BusImage = () => {
  return (
    <div className='w-full grid grid-cols-4 gap-5 items-center border-t border-neutral-300 pt-7 pb-2'>
        <div className='w-full rounded-xl overflow-hidden'>
        <img src="/001.jpg" 
          alt="bus image1"  className='w-full aspect-video object-cover object-center rounded-xl border border-neutral-300/50 bg-neutral-200/15'/>
        </div>

        <div className='w-full rounded-xl overflow-hidden'>
        <img src="/008.jpeg" 
          alt="bus image1"  className='w-full aspect-video object-cover object-center rounded-xl border border-neutral-300/50 bg-neutral-200/15'/>
        </div>

        <div className='w-full rounded-xl overflow-hidden'>
        <img src="/009.jpeg" 
          alt="bus image1"  className='w-full aspect-video object-cover object-center rounded-xl border border-neutral-300/50 bg-neutral-200/15'/>
        </div>

        <div className='w-full rounded-xl overflow-hidden'>
        <img src="/006.jpeg" 
          alt="bus image1"  className='w-full aspect-video object-cover object-center rounded-xl border border-neutral-300/50 bg-neutral-200/15'/>
        </div>
    </div>
  )
}

export default BusImage
