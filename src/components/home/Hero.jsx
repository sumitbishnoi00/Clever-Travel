import React from 'react'
import Heading from '../common/Heading'
import Button from '../common/Button'
import Para from '../common/Para'


const Hero = () => {
  return (
    <section>
      <div className='w-full bg-[url("/assets/image/webp/herobg.webp")] sm:pr-56 pr-20  bg-cover bg-center lg:min-h-270 md:min-h-240 sm:min-h-210 min-h-155 max-w-[1920px] mx-auto lg:pt-64 md:pt-58 sm:pt-50 pt-40'>
        <div className='max-w-237.5 lg:py-20 lg:pl-20 lg:pr-24.5 md:py-15 md:pl-15 md:pr-19 sm:py-10 sm:px-10 py-8 px-8   bg-dark-charcol '>
          <div className='max-w-193 '>
            <img className=' md:w-[273.41px] sm:w-50 w-40  md:h-20 sm:h-18 h-14  xl:mb-10 lg:mb-8 md:mb-6 mb-4' src="/assets/image/webp/navlogo.webp" alt="hero-logo" />
            <Heading heading={<>Escape to Paradise with <span className='text-orange underline'>Clever Travel</span></>} vari={"pri"} />
            <div className='max-w-140.25 md:mt-5 mt-2.5'>
              <Para para={"Discover the peace and beauty of breathtaking destinations, meticulously selected by our travel professionals to offer you a relaxing and luxurious escape."} vari={"pri"} />
            </div>
            <Button btn={"Book Now"} vari={"pri"} />
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero