import React from 'react'

const Heading = ({heading, vari}) => {
    const variants = {
        pri: "lg:text-[84px] md:text-[60px] sm:text-[42px] text-[32px] text-white",
        sec: "lg:text-[60px] md:text-[48px] sm:text-[38px] text-[32px] text-charcoal-blue mb-5",
        dan: "lg:text-[60px] md:text-[48px] sm:text-[38px] text-[32px] text-orange underline"
        
    }
  return (
    <h2 className={`font-medium leading-[120%] ${variants[vari]}`}>{heading}</h2>
  )
}

export default Heading