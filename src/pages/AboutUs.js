import React from "react";
import AboutBanner from "../components/About/AboutBanner";
import History from "../components/About/History";
import Vision from "../components/About/Vision";
import PrincipalMessage from "../components/About/PrincipalMessage";
import Infrastructure from "../components/About/Infrastructure";

const AboutUs = () => {
  return (
    <div className="px-4 py-8 md:px-0 md:py-0 bg-gray-100">
      <div className="max-w-max mx-auto">
        <AboutBanner />
        <History />
        <Vision />
        <PrincipalMessage />
        <Infrastructure />
      </div>
    </div>
  );
};

export default AboutUs;
