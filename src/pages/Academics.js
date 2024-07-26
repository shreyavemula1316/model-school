import React from "react";
import Banner from "../components/Academics/Banner";
import Curriculum from "../components/Academics/Curriculum";
import Resources from "../components/Academics/Resources";
import Timetable from "../components/Academics/Timetable";
import Conduct from "../components/Academics/Conduct";

const Academics = () => {
  return (
    <div className="px-4 py-8 md:px-0 md:py-0 bg-gray-100">
      <div className="max-w-full mx-auto">
        <Banner />
        <Curriculum />
        <Resources />
        <Timetable />
        <Conduct />
      </div>
    </div>
  );
};

export default Academics;
