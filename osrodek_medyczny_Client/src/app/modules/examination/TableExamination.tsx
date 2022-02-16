import { Box, Button, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import DetailsIcon from '@mui/icons-material/Details';
import { DataGrid, GridActionsCellItem, GridCellParams, GridRowId, GridToolbar, plPL } from '@mui/x-data-grid';
import data from "../../../data/examinations.json"
import { Link } from "react-router-dom";
import ResearchProjectModal from "../researchProjectDashboard/ResearchProjectModal";
import ExaminationResultModal from "./ExaminationResultModal";

export default function TableExamination()
{
   const [open,setOpen]= useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);

    const columns=[
        {field: 'name', headerName:'Nazwa badania', flex:1},
        {field: 'dateVisit', headerName:'Data wizyty',flex:1},
        {
            field: "result",
            headerName: "Wynik",
            sortable: false,
            filterable: false,
            flex: 0.4,
            renderCell: (params: GridCellParams) => {
               const id = Number.parseInt(params.row.id as string);
               return (
                  <IconButton onClick={() => onDetailsSelected(id)} color="primary">
                     <DetailsIcon />
                  </IconButton>
               );
            },
         },
    ];

    const onDetailsSelected = (id:number) => {
      handleOpen();
   };
   


    const result=data;

    return(
       <>
           <ExaminationResultModal handleOpen={handleOpen} handleClose={handleClose} open={open}/>

        <Box margin={4} sx={{ height: '400px', width: 'auto'}}>

         <DataGrid
        localeText={plPL.components.MuiDataGrid.defaultProps.localeText}
        sx={{
           
           fontSize: {
              lg: 16,
              md: 14,
              sm: 12,
              xs: 10,
            }
         }}
         rows={result}
         columns={columns}
         pageSize={10}
         components={{ Toolbar: GridToolbar }}
         />
         </Box>

         </>
    );
}