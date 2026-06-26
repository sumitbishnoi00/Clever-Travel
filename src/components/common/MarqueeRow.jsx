import React from 'react'

const MarqueeRow = ({ data, reverse = false }) => {

    const items = [...data, ...data, ...data, ...data];
    return (
        <div className='overflow-hidden w-full'>
            <div className={`marquee ${reverse ? "reverse" : ""} flex items-center gap-25`}>
                {items.map((item, index) => (
                    <div key={index} className='w-50 h-25 shrink-0 bg-white flex items-center justify-center'>
                        <img src={item} alt="marquee-img" className='object-contain' />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MarqueeRow