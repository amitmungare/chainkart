import { CircularProgress } from "@mui/material";
import React, { lazy, Suspense } from "react";

const Slider = lazy(() => import("./Slider"));
const Preview = lazy(() => import("./Preview"));
const NewArrival = lazy(() => import("./NewArrival"));
const Banner = lazy(() => import("./Banner"));
const AboutUs = lazy(() => import("./AboutUs"));

const Main = () => {
  return (
    <div>
      <Suspense fallback={<CircularProgress />}>
        <Slider />
        <Preview />
        <NewArrival />
        <AboutUs />
        <Banner />
      </Suspense>
    </div>
  );
};

export default Main;
