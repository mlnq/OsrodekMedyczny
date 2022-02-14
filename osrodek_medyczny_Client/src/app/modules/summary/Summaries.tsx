import { Grid, Paper } from '@mui/material';
import React from 'react'
import PatientQuantity from './PatientQuantity';
import ProjectsPatients from './ProjectsPatients';
import ProjectsQuantity from './ProjectsQuantity';



export default function Summaries(){


    return (
      <Grid container spacing={4} marginTop={5}>
        <Grid item xs={2}/>
        <Grid item xs={8} width={600} height={300} >
          <PatientQuantity/>
          <div style={{ margin: "5em" }}></div>
          <ProjectsQuantity />
          <div style={{ margin: "5em" }}></div>
          <ProjectsPatients/>
        </Grid>
        <Grid item xs={2}/>
        
      </Grid>
    );
}