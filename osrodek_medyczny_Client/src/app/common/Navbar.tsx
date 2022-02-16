import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import {
  AppBar,
  Button, IconButton, Toolbar
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {

  const navigate = useNavigate();

  return (
    <AppBar position="static" sx={{margin:'0 0 2em' }}>
      <Toolbar>
        <IconButton sx={{color:"#fff", }} onClick={()=>navigate('/')} >
          Medicus 
          <HealthAndSafetyIcon />
      </IconButton>

        <Button
          onClick={()=> navigate("/patients")}
          color="inherit">
        Pacjenci
        </Button>

        <Button
          onClick={()=> navigate("/projects")}
          color="inherit">
        Projekty badawcze
        </Button>

        <Button
          onClick={()=> navigate("/examinations")}
          color="inherit">
          Badania
        </Button>

      </Toolbar>
    </AppBar>
  );
}
