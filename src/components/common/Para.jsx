import React from 'react'

const Para = ({para, vari}) => {
    const variants = {
        pri: " text-white",
        sec: "text-charcoal-blue",
        
    }
  return (
    <p className={`Poppins font-normal md:text-[18px] sm:text-[16px] text-sm leading-[166.67%] ${variants[vari]}`}>{para}</p>
  )
}

export default Para