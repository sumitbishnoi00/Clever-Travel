import React, { useEffect, useState } from "react";

import { Link, useLocation } from "react-router-dom";

import Icons from "./Icons";
import { NAV_DATA } from "../../utils/helper";


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const path = useLocation().pathname;

  useEffect(() => {
    document.body.style.overflow = nav ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [nav]);

  return (
    <div className="sm:px-4 px-3 bg-white lg:py-5 md:py-4 sm:py-3 py-2 ">
      <nav className="max-w-[1760px] mx-auto flex flex-row justify-between items-center ">
        <Link href="/">
        <img
          className=" lg:w-[273.42px] lg:h-20 md:w-55 md:h-18 sm:w-50 sm:h-15 w-30 h-8 cursor-pointer"
          src="/assets/navlogo.webp"
          alt=""
        />
        </Link>
        <ul
          className={`flex flex-row xl:gap-12.5 gap-10 max-lg:fixed max-lg:top-0 max-lg:w-full  max-lg:h-screen max-lg:bg-white max-lg:z-50 max-lg:flex-col max-lg:justify-center max-lg:items-center duration-300 transition-all ${nav ? "max-lg:right-0" : "max-lg:-right-full"}`}
        >
          {NAV_DATA.map((item, index) => (
            <Link to={item.link} key={index} onClick={() => setNav(false)}>
              <li
                className={`jost xl:text-[24px] text-[20px]  font-medium leading-[100%] text-muted-blue  hover:text-orange duration-300 transition-all`}
              >
                {item.title}
              </li>
            </Link>
          ))}
        </ul>
        <button className="jost group lg:px-5 md:px-4 sm:px-3 px-2 cursor-pointer lg:py-2.5 md:py-2 py-1 flex lg:text-[24px] md:text-[20px] sm:text-[18px] text-[14px] font-medium leading-[140%] items-center gap-2.5 bg-muted-blue text-white border border-transparent hover:bg-white hover:border-muted-blue transition-all duration-300">
          <Icons icon={"phone"} className={"lg:w-7.5 lg:h-7.5 md:w-6 md:h-6 sm:w-5 sm:h-5 w-4 h-4"} />
          <a href="tel:+347-385-6647" className="transition-all duration-300  group-hover:text-muted-blue">
            347-385-6647
          </a>
        </button>
        <button
          onClick={() => setNav(!nav)}
          className="lg:hidden relative w-6 h-6 z-60 cursor-pointer"
        >
          <span
            className={`absolute left-0 md:w-6 w-5 h-1 bg-black rounded transition-all duration-300 ${nav ? "rotate-45 top-2.5" : "md:top-0 top-0.5"
              }`}
          ></span>

          <span
            className={`absolute left-0 md:w-6 w-5 h-1 bg-black rounded transition-all duration-300 ${nav ? "opacity-0" : "top-2.5 "
              }`}
          ></span>

          <span
            className={`absolute left-0 md:w-6 w-5 h-1 bg-black rounded transition-all duration-300 ${nav ? "-rotate-45 top-2.5" : " md:top-5 top-4.5"
              }`}
          ></span>
        </button>
      </nav>
    </div>
  );
};

export default Navbar;