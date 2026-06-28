import React, { useEffect, useState } from "react";

import { Link, useLocation } from "react-router-dom";
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
    <div className="px-4 bg-white py-5">
      <nav className="max-w-[1760px] mx-auto flex flex-row justify-between items-center ">
        <img
          className=" lg:w-[273.42px] lg:h-20 md:w-55 md:h-18 sm:w-50 sm:h-15 w-47 h-13"
          src="/assets/navlogo.webp"
          alt=""
        />
        <ul
          className={`flex flex-row gap-12.5 max-lg:fixed max-lg:top-0 max-lg:w-full  max-lg:h-screen max-lg:bg-white max-lg:z-50 max-lg:flex-col max-lg:justify-center max-lg:items-center duration-300 transition-all ${nav ? "max-lg:right-0" : "max-lg:-right-full"}`}
        >
          {NAV_DATA.map((item, index) => (
            <Link to={item.link} key={index} onClick={() => setNav(false)}>
              <li
                className={`text-[24px] font-medium text-muted-blue  hover:text-orange duration-300 transition-all`}
              >
                {item.title}
              </li>
            </Link>
          ))}
        </ul>
        <button className="group px-5 cursor-pointer py-2.5 flex items-center gap-2.5 bg-muted-blue text-white border border-transparent hover:bg-white hover:border-muted-blue transition-all duration-300">
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17.9448 2.50991C17.666 2.46994 17.3859 2.55238 17.163 2.72976C16.934 2.90964 16.7908 3.16946 16.7597 3.46051C16.6937 4.04886 17.1182 4.58099 17.7058 4.64719C21.7579 5.09938 24.9074 8.25597 25.363 12.3207C25.424 12.8653 25.8809 13.2763 26.4262 13.2763C26.4672 13.2763 26.5071 13.2738 26.5482 13.2688C26.8332 13.2375 27.0872 13.0964 27.2664 12.8715C27.4445 12.6467 27.5254 12.3669 27.493 12.0808C26.9254 7.00932 23.0003 3.07328 17.9448 2.50991ZM18.0226 6.86242C17.4276 6.7525 16.8811 7.13224 16.7678 7.71309C16.6545 8.29394 17.0354 8.86105 17.6143 8.97472C19.3571 9.31449 20.7028 10.6636 21.0439 12.4124V12.4136C21.141 12.917 21.5842 13.283 22.0946 13.283C22.1631 13.283 22.2315 13.2768 22.3013 13.2643C22.8801 13.1481 23.2611 12.5822 23.1478 12.0001C22.6386 9.38819 20.6281 7.37082 18.0226 6.86242ZM20.0001 18.8632C20.5644 18.5378 21.2018 18.1703 22.0058 18.3413C22.7341 18.4949 25.2164 20.5098 25.8961 21.2081C26.3418 21.6653 26.5895 22.1374 26.6281 22.6096C26.6953 24.4621 24.1782 26.5769 23.72 26.8405C23.1113 27.2789 22.403 27.5 21.6075 27.5C20.7946 27.5 19.8883 27.2689 18.8999 26.808C13.5369 24.5695 5.34441 16.5388 3.17833 11.2174C2.27952 9.23629 2.2733 7.60241 3.16339 6.37451C3.51818 5.79865 5.5411 3.39156 7.3524 3.46775C7.83417 3.50898 8.30224 3.75631 8.7616 4.206C9.45624 4.88678 11.4207 7.37632 11.5725 8.10707C11.7406 8.91901 11.3721 9.56482 11.0447 10.1319C10.9749 10.2538 10.8808 10.3985 10.7777 10.557C10.3865 11.1585 9.8658 11.9592 10.05 12.4703C11.3709 15.7131 14.4221 18.5424 17.6662 19.8715C18.1679 20.0538 18.9681 19.5294 19.5677 19.1365C19.7239 19.0341 19.8665 18.9406 19.9867 18.8709L20.0001 18.8632Z"
              fill="white"
              className="fill-white transition-all duration-300 group-hover:fill-muted-blue"
            />
          </svg>
          <span className="transition-all duration-300 group-hover:text-muted-blue">
            347-385-6647
          </span>
        </button>
        <button
          onClick={() => setNav(!nav)}
          className="lg:hidden relative w-6 h-6 z-60 cursor-pointer"
        >
          <span
            className={`absolute left-0 w-6 h-1 bg-black rounded transition-all duration-300 ${
              nav ? "rotate-45 top-2.5" : "top-0"
            }`}
          ></span>

          <span
            className={`absolute left-0 w-6 h-1 bg-black rounded transition-all duration-300 ${
              nav ? "opacity-0" : "top-2.5"
            }`}
          ></span>

          <span
            className={`absolute left-0 w-6 h-1 bg-black rounded transition-all duration-300 ${
              nav ? "-rotate-45 top-2.5" : "top-5"
            }`}
          ></span>
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
