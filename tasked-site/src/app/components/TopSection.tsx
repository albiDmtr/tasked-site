import React from 'react'
import Image from 'next/image'
import ParallaxImage from './ParallaxImage'

interface Props {
  text: any
}

const TopSection = ({ text }: Props) => {
  return (
    <section className='col-start-2 col-end-edge flex justify-between items-center mt-4'>
    <img src='/gradient-blur/gb1.jpg' alt='Gradient blur' width={1200} className='absolute -top-10 -left-200 -z-10' />
    <div className='maxw-575px w-40percent '>
        <h1>
            {text.topText}
        </h1>
        <div className='flex items-center mt-4'>
          <p>
              {text.topSubText}
          </p>
          <div className='main-cta-btn hover ml-3'>
            <div className='main-cta-btn-inner'>
              {text.topButtonText}
              <Image alt='Chevron left' width={18} height={18} className='text-white fill-current inline svg' src='/icons/chevron-left.svg' />
            </div>
          </div>
        </div>
    </div>
    <div className='maxw-1085px h-550px bg-red-500 rounded-l-30px w-60percent overflow-hidden'>
        <ParallaxImage text={"hehe"} srcImagePath='/top-carousel/1.jpg' depthMapPath='/top-carousel/1-depth.jpg' />
    </div>  
    </section>
  )
}

export default TopSection