import { Grid } from '@mui/material';
import React from 'react';
import PatientQuantity from './PatientQuantity';
import ProjectsPatients from './ProjectsPatients';
import ProjectsQuantity from './ProjectsQuantity';


const divStyle = {
  margin: "5em" 
}

export default function Summaries(){


    return (
      <Grid container spacing={4} marginTop={5}>
        <Grid item xs={2}/>
        <Grid item xs={8} width={600} height={300} >
          <PatientQuantity/>
          <div style={divStyle}></div>
          <ProjectsQuantity />
          <div style={divStyle}></div>
          <ProjectsPatients/>
        </Grid>
        <Grid item xs={2}/>
        
      </Grid>
    );
}