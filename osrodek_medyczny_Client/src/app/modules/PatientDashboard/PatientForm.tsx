import React, { useEffect, useState } from "react";
import { useStore } from "../../../stores/store";
import LoadingComponent from "../../common/LoadingComponent";
import * as Yup from 'yup';
import { useNavigate, useParams } from "react-router-dom";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import { Field, Form, Formik, useFormik } from "formik";
import {TextField} from 'formik-mui';
import Patient from "../../../models/patient";


export default function PatientForm(){

    let navigate = useNavigate();
    const {patientStore} = useStore();
    const {loadPatients,loadPatient,createPatient,updatePatient} = patientStore;

    const {id} = useParams<{id: string}>();

    const [patient, setPatient] = useState({
        id: 0,
        name: '',
        surname: '',
        pesel: 0,
        street: '',
        city: '',
        homeNumber:0,
    })

    const patientValidationSchema = Yup.object().shape({
        name: Yup.string().required('Imię jest wymagane!'),
        surname: Yup.string().required('Nawisko jest wymagane!!'),
        pesel: Yup.number().required('Pesel jest wymagany!!').typeError("Pesel ?musi? być numerem"),
        street: Yup.string().required('Ulica jest wymagane!!'),
        city: Yup.string().required('Miasto jest wymagane!!'),
        homeNumber:Yup.string().required('Numer mieszkania jest wymagane!!'),
    })

    useEffect(()=>{
        if(id!== undefined) 
        loadPatient(parseInt(id)).then(
            o=>{
                //czyszczenie nullowanych danych
                o = JSON.parse(JSON.stringify(o).replace(/:null/gi, ":\"\"")); 
                console.log(o);
            setPatient(o!);
        });

    },[id,loadPatient])

   
    function handleFormSubmit(patient: Patient){
       alert(JSON.stringify(patient));
       if(!patient.id) createPatient(patient).then(()=> navigate(`../patients`))
       else updatePatient(patient).then(()=> navigate(`../patients`))
    }
    // if(patientStore.loadingInitial) return <LoadingComponent content={"Ładuje formularz ..."}/> 

   return (
     <Paper >
         <Box padding={4} margin={4}>
         <Typography variant="h4" align="center" sx={{margin:'0 0 1em'}}>
          {!patient.id ? "Dodaj nowego pacjenta":"Edytuj pacjenta"}
        </Typography>
       <Formik
         validationSchema={patientValidationSchema}
         enableReinitialize
         initialValues={patient}
         onSubmit={(values) => handleFormSubmit(values)}
       >
         {({ handleSubmit, isValid, dirty, isSubmitting }) => (
           <Form onSubmit={handleSubmit} autoComplete="off">
             <Grid
               sx={{display:'flex'}}
               alignItems="center"
               justifyContent="center"
               container
               spacing={4}
             >
                 {/* md wzwyż */}
               <Grid item xs={12} md={4}>
                 <Field
                   component={TextField}
                   id="name"
                   name="name"
                   label="Imie"
                   fullWidth
                 />
               </Grid>
               <Grid item xs={12} md={4}>
                 <Field
                   component={TextField}
                   id="surname"
                   name="surname"
                   label="Nazwisko"
                   fullWidth
                 />
               </Grid>
               <Grid item xs={12} md={4}>
                 <Field
                   component={TextField}
                   id="pesel"
                   name="pesel"
                   label="Pesel"
                   fullWidth
                 />
               </Grid>
               <Grid item xs={12} md={4}>
                 <Field
                   component={TextField}
                   id="street"
                   name="street"
                   label="Ulica"
                   fullWidth
                 />
               </Grid>
               <Grid item xs={12} md={4}>
                 <Field
                   component={TextField}
                   id="city"
                   name="city"
                   label="Miasto"
                   fullWidth
                 />
               </Grid>
               <Grid item xs={12} md={4}>
                 <Field
                   component={TextField}
                   id="homeNumber"
                   name="homeNumber"
                   label="Numer domu"
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