import React from 'react'
import Heading from '../common/Heading'
import Para from '../common/Para'
import { FEATURES_LEFT, FEATURES_RIGHT } from '../../utils/helper'
import FeatureCard from '../common/FeatureCard'

const Roadmap = () => {
  return (
    <section className='px-3 lg:pt-30 md:pt-22 sm:pt-15 pt-10'>
      <div className='max-w-360 w-full mx-auto flex flex-col items-center justify-center'>

        <img src="/assets/navlogo.webp" className='w-[273.42px] h-20 mb-5' alt="travel-logo" />

        <div className='max-w-238.5 w-full flex flex-col items-center justify-center text-center'>
          <Heading heading={<><span className='text-orange underline'>Clever Travel Solutions:<br></br></span> Your Trusted Travel Partner</>} vari="sec" />
          <Para para={"Clever Travel Solutions specializes in booking the best and most affordable flight options, particularly for international business and first-class travel. Our exceptional customer service ensures a seamless and enjoyable travel experience from start to finish."} vari="sec" />
        </div>

        <div className='grid lg:grid-cols-[1fr_588px_1fr] gap-20.25 items-center mt-22.5'>

            <div className='flex flex-col gap-10'>
              {FEATURES_LEFT.map((item, index) => (

                <FeatureCard key={index} {...item} />
              ))}
            </div>

            <div className='flex justify-center'>
                <img src="/assets/Roadmap-img.webp" className='max-w-147 w-full' alt="Roadmap-img" />
            </div>

            <div className='flex flex-col gap-10'>
              {FEATURES_RIGHT.map((item, index) => (

                <FeatureCard key={index} {...item} />
              ))}
            </div>
        </div>
      </div>
    </section>
  )
}

export default Roadmap