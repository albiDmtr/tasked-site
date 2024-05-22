import React from 'react'
import RevealText from './RevealText'

interface Props {
    text: any
}

const Services = ({ text }: Props) => {
    return (
        <>  
            <RevealText text={text.intro} className='col-start-2 col-end-12 mt-10' />
            <div className="col-start-3 col-end-11">
                <RevealText text={text.title}
                            className='mt-10'
                            textSize={52}
                            style={{width: "280px", lineHeight: "52px"}} />
            </div>
            <section className='col-start-4 col-end-10 box grid grid-cols-2'>
                <div className='bg-gray-200'>Box 1</div>
                <div className='bg-gray-200'>Box 2</div>
                <div className='bg-gray-200'>Box 3</div>
                <div className='bg-gray-200'>Box 4</div>
            </section>
        </>
)}

export default Services