'use client'
import {useState} from 'react'
import ParallaxImage from './ParallaxImage'
import Image from 'next/image'
import ChevronLeft from './icons/ChevronLeft'
import ChevronRight from './icons/ChevronRight'
import slides from '../../../public/carousel/slides';
import { div } from 'three/examples/jsm/nodes/Nodes.js'
import ChevronDown from './icons/ChevronDown'

interface Props {
  text: any
}

const Carousel = ({ text }: Props) => {
    const [currentSlide, setCurrentSlide] = useState(0)

    return (
    <div className='maxw-1085px h-600px w-60percent'>
        <div className='w-full h-550px rounded-l-30px overflow-hidden solid-border'>
            <ParallaxImage srcImagePath='/carousel/1.jpg' depthMapPath='/carousel/1-depth.jpg' />
            <div className='absolute bottom-16 pl-6 text-white' style={{width: "500px", lineHeight: "18px"}}>
                <p className="txt16">{slides[currentSlide].description}</p>
                <button className='dark-box py-2.5 px-4 my-3 hover'>
                    {text.carouselButton}
                    <ChevronDown color='white' className='w-4 h-4 inline svg ml-1 -mt-0.5' />
                </button>
            </div>
        </div> 
        <div className='w-full flex justify-center items-center mt-4'>
            <div className='mr-5 carousel-control hover' onClick={()=> setCurrentSlide((3 + currentSlide -1) % slides.length)}>
                <ChevronLeft  color="#d9d9d9" className='w-6 h-6 svg' />
            </div>
            {
                slides.map((slide, index) => (
                    <div key={index} className={`mx-0.5 w-3 h-3 rounded-lg darkgrey-border ${index == currentSlide ? 'darkgrey' : ''}`}>
                    </div>
                ))
            }
            <div className='ml-5 carousel-control hover' onClick={()=> setCurrentSlide((currentSlide+1) % slides.length)}>
                <ChevronRight color="#d9d9d9" className='w-6 h-6 svg' />
            </div>
        </div>
    </div>)
}

export default Carousel