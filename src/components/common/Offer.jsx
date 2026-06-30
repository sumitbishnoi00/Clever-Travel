import React from 'react'
import Para from './Para'
import Button from './Button'

const Offer = ({image, frameImage, title, description, reverse = false }) => {
  return (
    <div className='flex justify-center'>
        <div className={` relative flex flex-col xl:flex-row items-center justify-center mx-auto ${reverse ? "xl:flex-row-reverse" : "" }`}>
            <div className=' relative z-10 max-w-75 sm:max-w-105 md:max-w-130 lg:max-w-162.5 xl:max-w-190 2xl:max-w-208 w-full mx-auto shrink-0'>
                <img src={frameImage} alt="golden-frame" className={` absolute z-0 hidden min-[1720px]:block pointer-events-none max-w-130.5 w-full top-0 ${reverse ? "-right-32" : "-left-32"}`} />
                <img src={image} alt={title} className=' relative z-10 w-full h-auto object-contain' />
            </div>

            <div className={`z-20 relative w-full max-w-75 sm:max-w-95 md:max-w-115 lg:max-w-135 xl:max-w-155 2xl:max-w-183.5 min-h-auto xl:min-h-100.5 bg-cover bg-center bg-no-repeat px-3 py-3 md:px-5 md:py-5 lg:px-7 lg:py-7 xl:px-10 xl:py-10 2xl:px-15 2xl:pt-15 2xl:pb-15 flex flex-col justify-center ${reverse ? "xl:-mr-20 2xl:-mr-25.5 lg:-mt-16 md:-mt-14 mt-0 xl:mt-0" : "xl:-ml-20 2xl:-ml-25.5 lg:-mt-16 md:-mt-14 mt-2 xl:mt-0"}`} style={{backgroundImage: "url('/assets/image/webp/offers-bg.webp')"}}>
                <h3 className='josefin font-semibold lg:text-[30px] md:text-[24px] sm:text-[20px] text-[18px] leading-[100%] text-orange underline mb-5'>{title}</h3>
                <Para para={description} vari="pri" />
                <Button btn={"Book Now"} vari="sec" />
            </div>
        </div>
    </div>
  )
}

export default Offer