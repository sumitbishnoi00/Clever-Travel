import React from 'react'
import Heading from '../common/Heading'
import Para from '../common/Para'

const Marquee = () => {
  return (
    <section className='px-3 pt-30'>
        <div className='max-w-[1920px] w-full mx-auto flex flex-col items-center justify-center'>
            <div className='max-w-210.5 w-full flex flex-col items-center justify-center text-center'>
                <Heading heading={<>Our <span className='text-orange underline'>Partners</span></>} vari="sec" />
                <Para para={"At Clever Travel Solutions, we proudly partner with leading airlines, luxury hotels, and exclusive resorts worldwide to provide you with unparalleled travel experiences."} vari="sec" />
            </div>

            
        </div>
    </section>
  )
}

export default Marquee