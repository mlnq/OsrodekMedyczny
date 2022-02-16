import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import { constants } from "buffer";
import { Field, Form, Formik } from "formik";
import { TextField } from 'formik-mui';
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as Yup from 'yup';
import Project from "../../../models/project";
import { useStore } from "../../stores/store";


export default function ProjectForm(){

    const navigate = useNavigate();
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
          project=>{
                project = JSON.parse(JSON.stringify(project).replace(/:null/gi, ":\"\"")); 
                console.log(project);
                setProject(project!);
        });

    },[id,loadProject])

   
    function handleFormSubmit(project: Project){
       if(!project.id) createProject(project).then(()=> navigate(`../projects`))
       else updateProject(project).then(()=> navigate(`../projects`))

      }

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