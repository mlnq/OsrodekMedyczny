import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Summaries from '../summary/Summaries';



export default function MainPage(){

    return(
        <Grid container justifyContent='center'>

            <Grid item xs={12} container justifyContent='center' >
                    <Box >
                        <Typography variant="h1" color="primary">
                            MEDICUS <HealthAndSafetyIcon sx={{fontSize:"1em"}}/>
                        </Typography>
                        
                        <Typography variant="h6" color="secondary">
                            ZMIENIAMY MEDYCYNĘ NA LEPSZE
                        </Typography>
                    </Box>
            </Grid>
            
            <Typography variant="h5" marginTop={10} >
                Dane statystyczne
            </Typography>
            <Summaries></Summaries>
        </Grid>
    );
}