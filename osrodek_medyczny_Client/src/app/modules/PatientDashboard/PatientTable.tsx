import * as React from 'react';
import { DataGrid, GridCellParams, plPL } from '@mui/x-data-grid';
import { Box, Button, Grid, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DetailsIcon from '@mui/icons-material/Details';
import DeleteIcon from '@mui/icons-material/Delete';
import testData from './testData.json'
import { useStore } from '../../../stores/store';
import { useEffect } from 'react';
import LoadingComponent from '../../common/LoadingComponent';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';


export default observer(function PatientTable() {
 
  const {patientStore} = useStore();

  const {patients,loadPatients,deletePatient,createPatient,loadingInitial}=patientStore;

  const columns=[
    {field: 'name', headerName:'Imie', flex:1},
    {field: 'surname', headerName:'Nazwisko',flex:1},
    {field: 'pesel', headerName:'Pesel',flex:1},
    {field: 'city', headerName:'Miasto',flex:1},
    {field: 'street', headerName:'Ulica',flex:1},
    {field: 'homeNumber', headerName:'Numer Domu',flex:1},
    {
      field: "edit",
      headerName: "Edytuj",
      sortable: false,
      filterable: false,
      flex: 0.4,
      renderCell: (params: GridCellParams) => {
        //  const id = Number.parseInt(params.row.id as string);
         const id=params.row.id as string;
         return (
            <IconButton component={Link} to={`../patientEdit/${id}`} color="primary">
               <EditIcon />
            </IconButton>
         );
      },
   },
   // {
   //    field: "details",
   //    headerName: "Szczegóły",
   //    sortable: false,
   //    filterable: false,
   //    flex: 0.5,
   //    renderCell: (params: GridCellParams) => {
   //      //  const id = Number.parseInt(params.row.id as string);
   //      const id=params.row.id as string;
  
   //       return (
   //          <IconButton onClick={() => console.log(id)} color="primary">
   //             <DetailsIcon />
   //          </IconButton>
   //       );
   //    },
   // },
   {
      field: "delete",
      headerName: "Usuń",
      sortable: false,
      filterable: false,
      flex: 0.4,
      renderCell: (params: GridCellParams) => {
        //  const id = Number.parseInt(params.row.id as string);
         const id=params.row.id as string;
  
         return (
            <IconButton onClick={() => onDeleteSelected(id)} color="primary">
               <DeleteIcon />
            </IconButton>
         );
      },
   },
  ]
  
  const onDeleteSelected = (id:string) => {
    deletePatient(id);
  };

  


  useEffect(()=>{
    if(patients.length<=0)
    {
      setTimeout(()=>loadPatients(), 3000);
    }
    
  },[patients])


  if(loadingInitial) return <LoadingComponent content={"Wczytuje Medicus"}/> 

   return (
    <div style={{ height: 520, width: '100%'}}>
      <Button component={Link} to="../patientCreate">Dodaj Pacjenta</Button>
      <DataGrid
        localeText={plPL.components.MuiDataGrid.defaultProps.localeText}
        // sx={{fontSize:'0.8em'}}
        sx={{
          fontSize: {
            lg: 16,
            md: 14,
            sm: 12,
            xs: 10
          }
        }}
        rows={patients}
        columns={columns}
        pageSize={10}
        // checkboxSelection
        />
    </div>
  );
  
});


