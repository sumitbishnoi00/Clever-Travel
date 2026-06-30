import React from "react";
import Hero from "../home/Hero";
import Roadmap from "../home/Roadmap";
import Offers from "../home/Offers";
import Marquee from "../home/Marquee";
import TravelImg from "../home/TravelImg";
import Cards from "../home/Cards";
import BasicApi from "../home/BasicApi";

const Home = () => {
  return (
    <>
      <Hero />
      <BasicApi />
      <Roadmap />
      <Offers />
      <Marquee />
      <TravelImg />
      <Cards />
    </>
  );
};

export default Home;
