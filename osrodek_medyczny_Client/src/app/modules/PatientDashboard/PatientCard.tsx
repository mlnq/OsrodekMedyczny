import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Avatar, IconButton } from "@mui/material";
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import InfoIcon from '@mui/icons-material/Info';

export default function PatientCard() {
  const bull = (
    <Box component="span" sx={{ transform: "scale(4.0)" }}>
      •
    </Box>
  );

  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe">
            ĆŚ
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
                        <InfoIcon/>
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      >
        
      </CardHeader>

      <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Word of the Day
            </Typography>
      </CardContent>

      <CardActions>
        <Button size="small">Sprawdź</Button>
      </CardActions>
    </Card>
  );
}
