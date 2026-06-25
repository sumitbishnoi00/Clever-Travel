import React from 'react'

const Button = ({btn, vari}) => {

    const variants = {
        pri: "border border-transparent bg-orange text-white hover:bg-white hover:border-orange hover:text-orange",
        sec: className=" border border-white bg-transparent text-white hover:border-transparent hover:bg-white hover:text-charcoal-blue",
        
    }
  return (
    <button className={` btn py-6 px-12 font-semibold text-[24px] leading-[100%] transition-all duration-500 cursor-pointer ${variants[vari]} `}>
        {btn}
    </button>
  )
}

export default Button