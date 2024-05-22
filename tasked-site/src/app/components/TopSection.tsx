import React from 'react'
import Image from 'next/image'
import Carousel from './Carousel'
import ChevronRight from './icons/ChevronRight'

interface Props {
  text: any
}

const TopSection = ({ text }: Props) => {
  return (
    <section className='col-start-2 col-end-edge flex justify-between items-center mt-4 pb-12'>
    <img src='/gradient-blur/gb1.jpg' alt='Gradient blur' width={1200} className='absolute -top-10 -left-200 -z-10' />
    <div className='maxw-575px w-40percent -mt-16'>
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
              <ChevronRight color='white' className='w-4 h-4 inline svg' />
            </div>
          </div>
        </div>
    </div>
    <Carousel text={text} />
    </section>
  )
}

export default TopSection