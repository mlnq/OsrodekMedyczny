import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './app/common/Navbar';
import { Grid } from '@mui/material';
import PatientDashboard from './app/modules/patientDashboard/PatientDashboard';
import PatientTable from './app/modules/patientDashboard/PatientTable'
import {
  Routes,Route, BrowserRouter,
} from "react-router-dom";
import PatientCard from './app/modules/patientDashboard/PatientCard';
import PatientModal from './app/modules/patientDashboard/___PatientModal';
import PatientForm from './app/modules/patientDashboard/PatientForm';
import MainPage from './app/modules/mainPage/MainPage';
import ResearchProjectTable from './app/modules/researchProjectDashboard/ResearchProjectTable';
import ResearchProjectForm from './app/modules/researchProjectDashboard/ResearchProjectForm';



function App() {
  return (
   <>
          <Grid container direction="column">
            <Grid item> <Navbar/> </Grid>
            <Grid item container> 
            <Grid item xs={0} sm={2}/>
            <Grid item xs={12} sm={8}>
            
      <Routes>
              <Route path="/" element={<MainPage/>}/>
              {/* Patients */}
              <Route path="patients" element={<PatientTable/>}/>
              {/* Form */}
              <Route path="/patientEdit/:id" element={<PatientForm/>}/>
              <Route path="/patientCreate" element={<PatientForm/>}/>

              {/* ResearchProjects */}
              <Route path="/projects" element={<ResearchProjectTable/>}></Route>
               {/* Form */}
               <Route path="/projectEdit/:id" element={<ResearchProjectForm/>}/>
               <Route path="/projectCreate" element={<ResearchProjectForm/>}/>
      </Routes>
            
            </Grid>
            <Grid item xs={0} sm={2}/>
            </Grid>
          </Grid>


    </>


  );
}

export default App;
