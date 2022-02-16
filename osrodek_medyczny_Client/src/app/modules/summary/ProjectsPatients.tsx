import React from "react";
import chart from "../../../data/chartPatientsProjects.json";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  RadialBarChart,
  RadialBar,
} from "recharts";
import { Grid } from "@mui/material";

const data = chart;

export default function ProjectsPatients() {
   
  return (
   <ResponsiveContainer width="100%" height="100%">
    <BarChart
      data={data}
      margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      {/* <Legend /> */}
      <Bar stackId="a" name="Ilość kobiet" type="monotone" dataKey="fm"  strokeWidth={2} fill="#1976d2"/>
      <Bar stackId="a" name="Ilość mężczyzn" type="monotone" dataKey="m" strokeWidth={2} fill="#07813A" />
      {/* <Line name="Ilość wszystkich pacjentów" type="monotone" dataKey="all" strokeWidth={2} stroke="#888" /> */}
    </BarChart>
    </ResponsiveContainer>
  );
}
