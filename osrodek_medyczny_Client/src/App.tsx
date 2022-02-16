import { Grid, ThemeProvider } from "@mui/material";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./app/common/Navbar";
import Examinations from "./app/modules/examination/Examinations";
import MainPage from "./app/modules/mainPage/MainPage";
import PatientForm from "./app/modules/patientDashboard/PatientForm";
import PatientTable from "./app/modules/patientDashboard/PatientTable";
import ResearchProjectForm from "./app/modules/researchProjectDashboard/ResearchProjectForm";
import ResearchProjectTable from "./app/modules/researchProjectDashboard/ResearchProjectTable";
import AppRoutes from "./app/routes/AppRoutes";
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Grid container direction="column">
        <Grid item><Navbar /></Grid>

        <Grid item container>
          
          <Grid item xs={0} sm={2} />
          <Grid item xs={12} sm={8}>
            <AppRoutes />
          </Grid>
          <Grid item xs={0} sm={2} />

        </Grid>
      </Grid>
  </BrowserRouter>
  </ThemeProvider>
  );
}

export default App;
