import { IconButton } from "@mui/material";
import React from "react";
import EditIcon from '@mui/icons-material/Edit';
import { DataGrid, GridActionsCellItem, GridCellParams, GridRowId, GridToolbar, plPL } from '@mui/x-data-grid';
import resultData from "../../../data/results.json"

export default function TableResult()
{

    const columns=[
        {field: 'val', headerName:'Wartość', flex:1},
        {field: 'result', headerName:'Wynik',flex:1},
        {field: 'norm', headerName:'Norma',flex:1},
    ];

    const result=resultData;

    return(
        <div style={{ height: '400px', width: '100%'}}>

         <DataGrid
        localeText={plPL.components.MuiDataGrid.defaultProps.localeText}
        sx={{
            
           fontSize: {
              lg: 16,
              md: 14,
              sm: 12,
              xs: 10
            }
         }}
         rows={result}
         columns={columns}
         pageSize={10}
         components={{ Toolbar: GridToolbar }}
         />
         </div>

    );
}