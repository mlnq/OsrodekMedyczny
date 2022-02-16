import { Box } from "@mui/material";
import { DataGrid, GridToolbar, plPL } from '@mui/x-data-grid';
import React from "react";
import data from "../../../data/examinations.json";

export default function TableExaminationResult()
{

    const columns=[
        {field: 'name', headerName:'Nazwa badania', flex:1},
        {field: 'dateVisit', headerName:'Data wizyty',flex:1},
    ];

    const fontSizing={
        fontSize: {
             lg: 16,
             md: 14,
             sm: 12,
             xs: 10,
         }
      }
      
    const result=data;

    return(
        <Box margin={4} sx={{ height: '400px', width: 'auto'}}>

         <DataGrid
        localeText={plPL.components.MuiDataGrid.defaultProps.localeText}
        sx={fontSizing}
         rows={result}
         columns={columns}
         pageSize={10}
         components={{ Toolbar: GridToolbar }}
         />
         </Box>

    );
}