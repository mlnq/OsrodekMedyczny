import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './app/common/Navbar';
import { Grid } from '@mui/material';
import PatientDashboard from './app/modules/PatientDashboard/PatientDashboard';
import PatientTable from './app/modules/PatientDashboard/PatientTable'
import {
  Routes,Route, BrowserRouter,
} from "react-router-dom";
import PatientCard from './app/modules/PatientDashboard/PatientCard';
import PatientModal from './app/modules/PatientDashboard/___PatientModal';
import PatientForm from './app/modules/PatientDashboard/PatientForm';
import MainPage from './app/modules/mainPage/MainPage';



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
              <Route path="patients" element={<PatientTable/>}/>
              {/* Form */}
              <Route path="/patientEdit/:id" element={<PatientForm/>}/>
              <Route path="/patientCreate" element={<PatientForm/>}/>
      </Routes>
            
            </Grid>
            <Grid item xs={0} sm={2}/>
            </Grid>
          </Grid>


    </>


  );
}

export default App;
