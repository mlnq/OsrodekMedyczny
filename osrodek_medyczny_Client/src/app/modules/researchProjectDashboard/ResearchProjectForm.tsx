import React, { useEffect, useState } from "react";
import { useStore } from "../../../stores/store";
import LoadingComponent from "../../common/LoadingComponent";
import * as Yup from 'yup';
import { useNavigate, useParams } from "react-router-dom";
import { Box, Button, Grid, Paper, TextareaAutosize, Typography } from "@mui/material";
import { Field, Form, Formik, useFormik } from "formik";
import {TextField} from 'formik-mui';
import Project from "../../../models/project";


export default function ProjectForm(){

    let navigate = useNavigate();
    const {projectStore} = useStore();
    const {loadProjects,loadProject,createProject,updateProject} = projectStore;

    const {id} = useParams<{id: string}>();

    const [project, setProject] = useState({
        id: 0,
        name: '',
        goal: '',
        patientQuantity: 0
    })

    const projectValidationSchema = Yup.object().shape({
        name: Yup.string().required('Nazwa projektu jest wymagana!'),
        goal: Yup.string().required('Cel projektu jest wymagany!'),
    })

    useEffect(()=>{
        if(id!== undefined) 
        loadProject(parseInt(id)).then(
            o=>{
                //czyszczenie nullowanych danych
                o = JSON.parse(JSON.stringify(o).replace(/:null/gi, ":\"\"")); 
                console.log(o);
            setProject(o!);
        });

    },[id,loadProject])

   
    function handleFormSubmit(project: Project){
      //  alert(JSON.stringify(project));
       if(!project.id) createProject(project).then(()=> navigate(`../projects`))
       else updateProject(project).then(()=> navigate(`../projects`))

      }

   // if(projectStore.loadingInitial) return <LoadingComponent content={"Ładuje formularz ..."}/> 
   return (
     <Paper>
       <Box padding={4} margin={4}>
         <Typography variant="h4" align="center" sx={{ margin: "0 0 1em" }}>
           {!project.id ? "Dodaj nowy projekt" : "Edytuj projekt"}
         </Typography>
         <Formik
           validationSchema={projectValidationSchema}
           enableReinitialize
           initialValues={project}
           onSubmit={(values) => handleFormSubmit(values)}
         >
           {({ handleSubmit, isValid, dirty, isSubmitting }) => (
             <Form onSubmit={handleSubmit} autoComplete="off">
               <Grid
                 sx={{ display: "flex" }}
                 alignItems="center"
                 justifyContent="flex-start"
                 container
                 spacing={4}
               >
                 {/* md wzwyż */}
                 <Grid item xs={12} md={4}>
                   <Field
                     component={TextField}
                     id="name"
                     name="name"
                     label="Nazwa projektu"
                     fullWidth
                   />
                 </Grid>
                 <Grid item xs={12} md={12}>
                   <Field
                     component={TextField}
                     id="goal"
                     name="goal"
                     label="Cel projektu"
                     fullWidth
                   />
                 </Grid>

                 <Grid item xs={12}>
                   <Button
                     disabled={isSubmitting || !isValid}
                     color="primary"
                     variant="contained"
                     type="submit"
                     fullWidth
                   >
                     Zapisz
                   </Button>
                 </Grid>
               </Grid>
             </Form>
           )}
         </Formik>
       </Box>
     </Paper>
   );
}