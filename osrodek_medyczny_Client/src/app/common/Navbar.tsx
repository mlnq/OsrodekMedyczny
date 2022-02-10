import {
  AppBar,
  Box,
  Button,
  Grid,
  IconButton,
  Paper,
  Switch,
  Toolbar,
  Typography,
  typographyClasses,
} from "@mui/material";
import React from "react";
import xd from "../../logo.svg";
import { Badge } from "@mui/material";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import { flexbox } from "@mui/system";
import { Link, useNavigate } from "react-router-dom";


export default function Navbar() {

  let navigate = useNavigate();

  return (
    <AppBar position="static" sx={{margin:'0 0 2em' }}>
      <Toolbar>
        


        <IconButton sx={{color:"#fff"}} onClick={()=>navigate('/')} >
          Medicus
          <HealthAndSafetyIcon />
        </IconButton>

        <Button
          onClick={()=> navigate("/patients")}
          color="inherit">
        Pacjenci
        </Button>

        <Button
          onClick={()=> navigate("/patients/:id")}
          color="inherit">
        Cokolwiek
        </Button>
      </Toolbar>
    </AppBar>
  );
}
