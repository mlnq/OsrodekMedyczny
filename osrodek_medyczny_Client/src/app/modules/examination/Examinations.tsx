import { Paper, Typography } from "@mui/material";
import React from "react";
import TableExamination from "./TableExamination";
import TableExaminationResult from "./TableExaminationResult";



export default function Examinations(){

    return (
    <>
          <Typography
           id="transition-modal-title" variant="h6" component="h2">
              Zlecenia badań
           </Typography>
            <TableExaminationResult/>
           <Typography
           id="transition-modal-title" variant="h6" component="h2">
              Historia badań
           </Typography>
           <TableExamination/>


    </>
    );
}