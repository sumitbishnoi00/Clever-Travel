import React from 'react'

import { CARD_DATA } from '../../utils/helper'
import Icons from '../common/Icons'
import Heading from '../common/Heading'
import Para from '../common/Para'

const Cards = () => {
  return (
    <section className='px-4'>
      <div className='max-w-[1760px] mx-auto'>
        <div className='max-w-201 '>
          <Heading heading={<>Happy <span className='text-orange underline'>Travelers</span> </>} vari={"sec"} />
          <Para para={"Experience the joy of traveling with Clever Travel Solutions through the words of our satisfied clients. Here’s what they have to say about their journeys with us:"} vari={"sec"} />
        </div>
        <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-items-center  marker: gap-5 lg:mt-22.5 md:mt-18 sm:mt-15 mt-10 '>
          {CARD_DATA.map((item, index) => (
            <div key={index} className='max-w-143.25 w-full p-7.5 bg-wheet' >
              <div className='flex flex-row justify-between items-center'>
                <Icons icon={"doublecot"} className={"md:w-[30.39px] md:h-[26.80px] w-9 h-5"} />
                <Icons icon={"fivestars"} className={"lg:w-25 md:w-22 sm:w-20 w-19 "} />
              </div>
              <div className='flex flex-col max-w-100 lg:mt-11.5 md:mt-9 sm:mt-6 mt-5'>
                <div className='flex flex-row gap-3.75 items-center mb-5'>
                  <div>
                    <img className='md:w-15 md:h-15 w-12 h-12 ' src={item.image} alt="" />
                  </div>
                  <div>
                    <h3 className='josefin font-medium lg:text-[24px]  md:text-[20px] sm:text-[18px] text-[16px] leading-[100%]'>{item.heading}</h3>
                    <h3 className='Poppins font-medium lg::text-[24px] md:text-[20px] sm:text-[18px] text-[16px]  text leading-[100%] text-orange mt-2.5'>{item.title}</h3>
                  </div>
                </div>
               <Para para={item.para} vari={"sec"} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Cards