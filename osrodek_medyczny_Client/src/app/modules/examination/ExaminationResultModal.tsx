import ScienceIcon from '@mui/icons-material/Science';
import { Backdrop, Box, Fade, Grid, Modal, Typography } from "@mui/material";
import React from "react";
import TableResult from "./TableResult";


interface Props{
  handleOpen:any,
  handleClose:any,
  open:boolean,
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width:'80%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 6,
};

export default function ExaminationResultModal({handleOpen,handleClose,open}:Props){

    return (
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 200,
        }}
      >
        <Fade in={open}>
          <Box sx={style} >
           
            <Grid container margin={3}>
            <ScienceIcon  sx={{justifyContent:"center", fontSize:"3em"}}/>
            <Box>
              <Typography color="primary" >Badanie laboratoryjne</Typography>
              <Typography color="">30 Stycznia 2016</Typography>
            </Box>
            </Grid>


            <Typography
              margin={4}
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Badanie zrealizowane w Uniwersyteckim Szpitalu Klinicznym w
              Białymstoku
            </Typography>

            <Box margin={4}>
              <TableResult></TableResult>
            </Box>
          </Box>
        </Fade>
      </Modal>
    );
}