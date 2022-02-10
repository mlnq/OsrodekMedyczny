import { Grid } from "@mui/material";
import React from "react";
import PatientCard from "./PatientCard";



export default function PatientDashboard(){

    return (
            
            <Grid container spacing={4}>
                <Grid item xs={12} sm={4}>
                    <PatientCard/>
                </Grid>
                
            </Grid>
            
    );
}