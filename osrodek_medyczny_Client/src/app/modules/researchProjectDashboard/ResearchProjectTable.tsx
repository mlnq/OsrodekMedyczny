import { Button, IconButton } from "@mui/material";
import { DataGrid, GridCellParams, GridToolbar, plPL } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import DetailsIcon from '@mui/icons-material/Details';
import DeleteIcon from '@mui/icons-material/Delete';
import { useStore } from "../../../stores/store";
import { Console } from "console";
import { observer } from "mobx-react-lite";
import LoadingComponent from "../../common/LoadingComponent";
import ResearchProjectModal from "./ResearchProjectModal";
import ResearchProjectPatientsTable from "./ResearchProjectPatientsTable";
import AddIcon from '@mui/icons-material/Add';

export default observer(function ResearchProjectTable()
{
   const [open,setOpen]= useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);

   const {projectStore} = useStore();
   const {projects,deleteProject,loadProjects,loadProject} =projectStore;
   

   const columns=[
        {field: 'id', headerName:'Id'},
        {field: 'name', headerName:'Nazwa Projektu',flex:1},
        {field: 'patientQuantity', headerName:'Ilość zapisanych pacjentów',flex:1},
        {
          field: "edit",
          headerName: "Edytuj",
          sortable: false,
          filterable: false,
          flex: 0.4,
          renderCell: (params: GridCellParams) => {
             const id = Number.parseInt(params.row.id as string);
             return (
                <IconButton component={Link} to={`../projectEdit/${id}`} color="primary">
                   <EditIcon />
                </IconButton>
             );
          },
        },
        {
           field: "details",
           headerName: "Szczegóły",
           sortable: false,
           filterable: false,
           flex: 0.5,
           renderCell: (params: GridCellParams) => {
              const id = Number.parseInt(params.row.id as string);   
              return (
                 <IconButton onClick={() => onDetailsSelected(id)} color="primary">
                    <DetailsIcon />
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
       
       const onDetailsSelected = (id:number) => {
          console.log(id);
          loadProject(id);
          handleOpen();
       };
       const onDeleteSelected = (id:number) => {
         console.log(id);
         deleteProject(id);
       };

       useEffect(()=>{
          if(projects.length <=0 ){
            setTimeout(()=>loadProjects(), 1000);
          }
          
       },[projects]);
      
   if(projectStore.loadingInitial) return <LoadingComponent content={"Ładowanie projektów badawczych"}/> 

    return (
   <>
    <ResearchProjectModal handleOpen={handleOpen} handleClose={handleClose} open={open}/>
    
    <div style={{ height: 520, width: '100%'}}>
      <Button component={Link} to="../projectCreate"><AddIcon></AddIcon>Utwórz nowy projekt badawczy</Button>
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
         rows={projects}
         columns={columns}
         pageSize={10}
         components={{ Toolbar: GridToolbar }}
         />
    </div>

   </>
    );
});