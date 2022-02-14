import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import Summaries from '../summary/Summaries';



export default function MainPage(){




    return(
        <Grid container justifyContent='center'>

            <Grid item xs={12} container justifyContent='center' >
                    <Box >
                        <Typography variant="h1" >
                            MEDICUS
                        </Typography>
                        
                        <Typography variant="h6" >
                            ZMIENIAMY MEDYCYNĘ NA LEPSZE
                        </Typography>
                    </Box>
            </Grid>
            
            {/* <Grid item xs={12} margin={5} container justifyContent='center'>
                        <Typography variant="h6" >
                            ZAUFALI NAM
                        </Typography>            </Grid>
            <Grid item xs={12} sm={2} container justifyContent='center'>
                    <div style={{width:'100px',height:'100px', backgroundColor:'#ddd'}}></div>
            </Grid>
            <Grid item xs={12} sm={2} container justifyContent='center'>
                    <div style={{width:'100px',height:'100px', backgroundColor:'#ddd'}}></div>
            </Grid>
            <Grid item xs={12} sm={2} container justifyContent='center'>
                    <div style={{width:'100px',height:'100px', backgroundColor:'#ddd'}}></div>
            </Grid>
            <Grid item xs={12} sm={2} container justifyContent='center'>
                    <div style={{width:'100px',height:'100px', backgroundColor:'#ddd'}}></div>
            </Grid>
            <Grid item xs={12} sm={2} container justifyContent='center'>
                    <div style={{width:'100px',height:'100px', backgroundColor:'#ddd'}}></div>
            </Grid> */}

            <Summaries></Summaries>
        </Grid>
    );
}