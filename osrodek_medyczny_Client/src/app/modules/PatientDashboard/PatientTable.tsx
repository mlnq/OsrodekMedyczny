import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Button, IconButton } from '@mui/material';
import { DataGrid, GridCellParams, plPL } from '@mui/x-data-grid';
import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../../stores/store';
import LoadingComponent from '../../common/LoadingComponent';

export default observer(function PatientTable() {
 
  const {patientStore} = useStore();

  const {patients,loadPatients,deletePatient,loadingInitial}=patientStore;

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
         const id = Number.parseInt(params.row.id as string);
         return (
            <IconButton component={Link} to={`../patientEdit/${id}`} color="primary">
               <EditIcon />
            </IconButton>
         );
      },
   },
   {
      field: "delete",
      headerName: "Usuń",
      sortable: false,
      filterable: false,
      flex: 0.4,
      renderCell: (params: GridCellParams) => {
         const id = Number.parseInt(params.row.id as string);
         return (
            <IconButton onClick={() => onDeleteSelected(id)} color="primary">
               <DeleteIcon />
            </IconButton>
         );
      },
   },
  ]
  
  const onDeleteSelected = (id:number) => {
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
      <Button component={Link} to="../patientCreate"  startIcon={<AddIcon/>}>Dodaj Pacjenta</Button>
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
        rows={patients}
        columns={columns}
        pageSize={10}
        />
    </div>
  );
  
});


