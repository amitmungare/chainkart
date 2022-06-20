import React from "react";
import Slider from "./Slider";
import Preview from "./Preview";
import NewArrival from "./NewArrival";
import Banner from "./Banner";
import AboutUs from "./AboutUs";

const Main = () => {
  return (
    <div>
      <Slider />
      <Preview />
      <NewArrival />
      <AboutUs />
      <Banner />
    </div>
  );
};

export default Main;
