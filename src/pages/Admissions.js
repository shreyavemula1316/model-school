import React from "react";
import BannerSection from "../components/Admission/BannerSection";
import EligibilityCriteria from "../components/Admission/EligibilityCriteria";
import AdmissionProcess from "../components/Admission/AdmissionProcess";
import DownloadableForms from "../components/Admission/DownlodableForms";
import ImportantDates from "../components/Admission/ImportantDates";
import RequiredDocuments from "../components/Admission/RequiredDocuments";

const Admissions = () => {
  return (
    <div>
      <BannerSection />
      <EligibilityCriteria />
      <AdmissionProcess />
      <div className="px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-200 p-6 rounded-lg shadow-md">
              <RequiredDocuments />
            </div>
            <div className="bg-slate-200 p-6 rounded-lg shadow-md">
              <DownloadableForms />
            </div>
          </div>
        </div>
      </div>
      <ImportantDates />
    </div>
  );
};

export default Admissions;
