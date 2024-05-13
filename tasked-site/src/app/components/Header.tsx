import React from 'react'
import Image from 'next/image'

interface Props {
    text: any,
    changeLang: (lang: string) => void
}

const Header = ({ text, changeLang }: Props) => {

    return (
        <>
            <div className='header-outer'>
                <div className='grad-1'></div>
                <div className='grad-2'></div>
                <div className='grad-3'></div>
                <div className='grad-4'></div>
                <div className='grad-5'></div>
                <div className='grad-6'></div>
            </div>
            <div className='main-header flex items-center justify-between h-20'>
                <a className="cursor-pointer">
                    <Image alt='Tasked logo' width={135} height={31.8} src='/tasked-logo.svg' />
                </a>
                <li className='menu-elems flex items-center justify-right txt16 hover-parent'>
                    <a href='/'>{text.offer}</a>
                    <a href='/'>{text.references}</a>
                    <a href='/'>{text.aboutUs}</a>
                    <a href='/'>{text.jobs}</a>
                    <a href='/'>{text.getInTouch}</a>
                    <div className='h11 box w-fit-content'>
                        <p className='txt16 lh44 px-2 leading-none'>
                            <span className={`px-2 ${text.lang == 'fi' ? 'font-bold' : ''}`} onClick={() => changeLang("fi")}>FI</span>
                            <span className={`px-2 ${text.lang == 'en' ? 'font-bold' : ''}`} onClick={() => changeLang("en")}>EN</span>
                        </p>
                    </div>
                </li>
            </div>
        </>
  )
}

export default Header