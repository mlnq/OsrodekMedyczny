import AddIcon from '@mui/icons-material/Add';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, darken, lighten } from '@mui/material';
import Box from '@mui/material/Box';
import { DataGrid, GridActionsCellItem, GridRowId, GridRowsProp, GridToolbar, plPL } from '@mui/x-data-grid';
import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import researchPatientsTable from '../../../data/researchPatientsTable.json';



const getBackgroundColor = (color: string, mode: string) =>
  mode === 'dark' ? darken(color, 0.6) : lighten(color, 0.6);

const getHoverBackgroundColor = (color: string, mode: string) =>
  mode === 'dark' ? darken(color, 0.5) : lighten(color, 0.5);

export default function ResearchProjectPatientsTable(){

    const test= researchPatientsTable;
    const [rows, setRows] = useState<GridRowsProp>(test);

    const columns=[
        {field: 'id', headerName:'Id',flex:1},
        {field: 'name', headerName:'Imię pacjenta',flex:1},
        {field: 'surname', headerName:'Nazwisko',flex:1},
        {field: 'address', headerName:'Adres',flex:1},
        {field: 'agreement', headerName:'Zgoda udziału',flex:1,type:'boolean'},
       {
            field: 'actions',
            type: 'actions',
            width: 80,
            getActions: (params:any) => [
              <GridActionsCellItem
                icon={<DeleteIcon />}
                label="Usuń"
                onClick={() => onDeleteSelected(params.id)}
                showInMenu
              />,
              <GridActionsCellItem
                icon={<ChangeCircleIcon />}
                label="Zmień zgodę udziału"
                onClick={() => toggleAgreement(params.id)}
                showInMenu
              />,
            ],
          },
       ]

       const toggleAgreement = useCallback(
        (id: GridRowId) => () => {
          
            setRows((prevRows) =>
            prevRows.map((row) =>
              row.id === id ? { ...row, agreement: !row.agreement } : row,
            ),
          );
        },
        [],
      );
       const onDeleteSelected = (id:number) => {
        console.log(id);
      };

    return (
      <>
        <Box
          sx={{
            height: 400,
            width: 1,
            "& .super-app-theme--true": {
              bgcolor: (theme) =>
                getBackgroundColor(
                  theme.palette.success.main,
                  theme.palette.mode
                ),
              "&:hover": {
                bgcolor: (theme) =>
                  getHoverBackgroundColor(
                    theme.palette.success.main,
                    theme.palette.mode
                  ),
              },
            },
            "& .super-app-theme--false": {
              bgcolor: (theme) =>
                getBackgroundColor(
                  theme.palette.error.main,
                  theme.palette.mode
                ),
              "&:hover": {
                bgcolor: (theme) =>
                  getHoverBackgroundColor(
                    theme.palette.error.main,
                    theme.palette.mode
                  ),
              },
            },
          }}
        >
          <Button component={Link} to="../projectCreate"  startIcon={<AddIcon/>}>
           Dodaj pacjenta do projektu
          </Button>

          <>
            <DataGrid
              getRowClassName={(params) =>
                `super-app-theme--${params.row.agreement}`
              }
              localeText={plPL.components.MuiDataGrid.defaultProps.localeText}
              sx={{
                fontSize: {
                  lg: 16,
                  md: 14,
                  sm: 12,
                  xs: 10,
                },
              }}
              rows={test}
              columns={columns}
              pageSize={10}
              components={{ Toolbar: GridToolbar }}
            />
          </>
        </Box>
      </>
    );
}