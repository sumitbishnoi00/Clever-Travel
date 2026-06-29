import React from 'react'
import Heading from './Heading'
import Button from './Button'
import Icons from './Icons'

const Footer = () => {
  return (
    <footer className='px-4 my-30' >
      <div className='max-w-[1760px] mx-auto flex w-full relative '>
        {/* form */}
        <div className='p-15 max-w-260 w-full border border-cool-gray'>
          <div className='flex flex-row justify-between flex-nowrap'>
            <Heading heading={<>Get in <span className='text-orange underline flex-nowrap'>Touch</span> </>} vari={"sec"} />
            <img className=' md:w-[273.41px] sm:w-50 w-40  md:h-20 sm:h-18 h-14  lg:mb-10 md:mb-8 sm:mb-6 mb-4' src="/assets/navlogo.webp" alt="" />
          </div>
          <div className='flex flex-col '>
            <div className='flex flex-row justify-between mb-7.5'>
              <div className='max-w-112.25 w-full'>
                <h3 className='text-[16px] font-medium leading-[100%] text-charcoal-blue'>First Name</h3>
                <input type="text" placeholder='Enter First Name...' className='px-3.75 py-3.5 text-[16px] font-medium leading-[100%] text-cool-gray border w-full outline-none mt-3.75 border-ash-blue ' />
              </div>
              <div className='max-w-112.25 w-full'>
                <h3 className='text-[16px] font-medium leading-[100%] text-charcoal-blue'>Email</h3>
                <input type="email" placeholder='Enter Email...' className='px-3.75 py-3.5 text-[16px] font-medium leading-[100%] text-cool-gray border w-full outline-none mt-3.75 border-ash-blue ' />
              </div>
            </div>
          </div>
          <div className='mb-7.5'>
            <h3 className='text-[16px] font-medium leading-[100%] text-charcoal-blue'>Message</h3>
            <input type="message" placeholder='Lorem ipsum dolor sit amet consectetur...' className='px-3.75 py-3.5 text-[16px] font-medium leading-[100%] pb-15 text-cool-gray border w-full outline-none mt-3.75 border-ash-blue ' />
          </div>
          <div className='flex flex-row items-center justify-between'>
            <div className='flex flex-row  items-center gap-3.75'>
              <Icons icon={"pin"} />
              <h2 className='text-[24px] font-medium leading-[100%] text-charcoal-blue'>Attach Files</h2>
            </div>
            <Button btn={"Send"} vari={"dan"} />
          </div>

        </div>
        {/* contact */}
        <div className='bg-[url("/assets/footer-img.webp")] w-full max-w-143.5 bg-cover pt-15 pb-14.75 pl-15 bg-no-repeat  bg-center min-h-153.75'>
          <Heading heading={"Contact"} vari={"dan"} />

          <div className='mb-10 mt-15'>
            <h2 className='font-medium text-[30px] leading-[100%] mb-5 underline text-white'>Location:</h2>
            <p className='font-normal text-[18px] leading-[100%] text-white'>123 Main Street, Anytown, CA 12345, USA</p>
          </div>

          <div className='mb-10'>
            <h2 className='font-medium text-[30px] leading-[100%] mb-5 underline text-white'>Email:</h2>
            <p className='font-normal text-[18px] leading-[100%] text-white'>clever.travel@example.com</p>
          </div>

          <div className='mb-10'>
            <h2 className='font-medium text-[30px] leading-[100%] mb-5 underline text-white'>Phone:</h2>
            <p className='font-normal text-[18px] leading-[100%] text-white'>+01 234 5676 23</p>
          </div>
          <div className='flex flex-row gap-4 cursor-pointer'>
            <Icons icon={"twiter"} />
            <Icons icon={"in"} />
            <Icons icon={"insta"} />
            <Icons icon={"facebook"} />
          </div>
        </div>
        {/* img */}
        <div>
          <img className='max-w-130.5 h-130.5 -z-10 w-full absolute right-0 top-10 ' src="/assets/footer-bg-img.png" alt="golden frame" />
        </div>

      </div>
    </footer >
  )
}

export default Footer