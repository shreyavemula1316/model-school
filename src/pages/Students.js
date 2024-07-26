// pages/Students.js
import React from "react";
import BannerSection from "../components/Students/BannerSection";
import ExtracurricularActivities from "../components/Students/Activities";
import ClubsAndSocieties from "../components/Students/ClubAndSocieties";
import Achievements from "../components/Students/Achievements";
import StudentCouncil from "../components/Students/StudentCouncil";

const Students = () => {
  return (
    <>
      <BannerSection />
      <ExtracurricularActivities />
      <ClubsAndSocieties />
      <Achievements />
      <StudentCouncil />
    </>
  );
};

export default Students;
