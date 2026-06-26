import React, { useEffect, useState } from "react";
import { NAV_DATA } from "../../utils/helper";
import { Link, useLocation } from "react-router-dom";

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
        <img className="w-[273.42px] h-20 " src="/assets/navlogo.webp" alt="" />
        <ul
          className={`flex flex-row max-lg:fixed max-lg:top-0 max-lg:w-full max-lg:h-screen max-lg:bg-white max-lg:z-50 max-lg:flex-col max-lg:justify-center max-lg:items-center duration-300 transition-all ${nav ? "max-lg:right-0" : "max-lg:-right-full"}`}
        >
          {NAV_DATA.map((item, index) => (
            <Link to={item.link} key={index} onClick={() => setNav(false)}>
              <li className={`text-[24px] font-medium text-muted-blue `}>{item.title}</li>
            </Link>
          ))}
        </ul>
        <button className="px-5 py-2.5 ">

        </button>
        <button
          onClick={() => setNav(!nav)}
          className="sm:hidden relative w-6 h-6 z-60 cursor-pointer"
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
