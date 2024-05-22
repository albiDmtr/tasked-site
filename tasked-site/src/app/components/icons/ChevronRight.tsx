import React from 'react'

interface Props {
    color: string
    className?: string
}

const ChevronRight = ({color, className}: Props) => {
    return (
        <svg className={className ? className : ""} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke={color}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
    )
}

export default ChevronRight