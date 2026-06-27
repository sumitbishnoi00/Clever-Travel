import React from 'react'
import Icons from './Icons'
import Para from './Para'

const FeatureCard = ({ icon, title, desc }) => {
  return (
    <div className='max-w-85.25 w-full text-left flex flex-col gap-5'>
        <Icons icon={icon} />
        <h3 className='font-semibold text-[30px] leading-[100%] text-charcoal-blue'>{title}</h3>
        <Para para={desc} vari="sec" />
    </div>
  )
}

export default FeatureCard