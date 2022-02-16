import React from "react";
import { Route, Routes } from "react-router-dom";
import Examinations from "../modules/examination/Examinations";
import MainPage from "../modules/mainPage/MainPage";
import PatientForm from "../modules/patientDashboard/PatientForm";
import PatientTable from "../modules/patientDashboard/PatientTable";
import ResearchProjectForm from "../modules/researchProjectDashboard/ResearchProjectForm";
import ResearchProjectTable from "../modules/researchProjectDashboard/ResearchProjectTable";


export default function AppRoutes(){
    return (
      <Routes>
        <Route path="/" element={<MainPage />} />

        {/* Patients */}
        <Route path="patients" element={<PatientTable />} />
        {/* Patients Form */}
        <Route path="/patientEdit/:id" element={<PatientForm />} />
        <Route path="/patientCreate" element={<PatientForm />} />

        {/* Research Projects */}
        <Route path="/projects" element={<ResearchProjectTable />}></Route>
        {/* Research Projects Form */}
        <Route path="/projectEdit/:id" element={<ResearchProjectForm />} />
        <Route path="/projectCreate" element={<ResearchProjectForm />} />

        {/* Medical Examinations */}
        <Route path="/examinations" element={<Examinations />} />

      </Routes>
    );
}