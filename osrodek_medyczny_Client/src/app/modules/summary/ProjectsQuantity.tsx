import React from "react";
import chart from "../../../data/chartPatients.json";

import {
RadarChart ,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  PolarRadiusAxis,
} from "recharts";
import { Grid } from "@mui/material";
import testData from '../../../data/charProjects.json'

const data = testData;

interface Props{
    style?: object;
}

export default function ProjectsQuantity(props:Props) {
  return (
    <ResponsiveContainer width="100%" height="100%" {...props}>
      <RadarChart outerRadius={90} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis angle={30} domain={[0, 150]} />
        <Radar
          name="Ilość zleceń badań"
          dataKey="m"
          stroke="#07813A"
          fill="#07813A"
          fillOpacity={0.6}
        />
        <Radar
          name="Ilość badań"
          dataKey="fm"
          stroke="#1976d2"
          fill="#1976d2"
          fillOpacity={0.6}
        />
        <Legend />
      </RadarChart>
    </ResponsiveContainer>
   
  );
}
