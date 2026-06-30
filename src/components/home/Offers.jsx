import React from 'react'
import Heading from '../common/Heading'
import Para from '../common/Para'
import { OFFER_CARD } from '../../utils/helper'
import Offer from '../common/Offer'

const Offers = () => {
  return (
    <section className='px-3 lg:pt-30 md:pt-22 sm:pt-15 pt-10'> 
        <div className='max-w-[1760px] w-full mx-auto flex flex-col items-center justify-center'>
            <div className='max-w-238.5 w-full flex flex-col items-center justify-center text-center'>
                <Heading heading={<><span className='text-orange underline'>Services</span> We Offer</>} vari="sec" />
                <Para para={"We offer a comprehensive range of travel solutions designed to make your journey effortless and enjoyable. From personalized trip planning and exclusive deals to expert advice and 24/7 support, we handle every detail to ensure a seamless and memorable travel experience. Whether you need assistance with bookings, insurance, or custom experiences, our team is here to provide exceptional service tailored to your needs."} vari="sec" />
            </div>

            <div className='w-full flex flex-col items-center justify-center lg:gap-22.5 md:gap-20 sm:gap-15 gap-10 lg:mt-22.5 md:mt-18 sm:mt-15 mt-10'>
                {OFFER_CARD.map((card, index) => (

                    <Offer key={card.id} image={card.image} frameImage={card.frameImage} title={card.title} description={card.description} reverse={index % 2 !== 0} />
                ))}
            </div>
        </div>
    </section>
  )
}

export default Offers