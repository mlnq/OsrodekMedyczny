import React from "react";
import chart from "../../../data/chartPatients.json";

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
} from "recharts";
import { Grid } from "@mui/material";

const data = chart;

export default function PatientQuantity() {
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
      <Legend />
      <Bar name="Ilość kobiet"  type="monotone" dataKey="fm"  strokeWidth={2} fill="#1976d2"/>
      <Bar name="Ilość mężczyzn" type="monotone" dataKey="m" strokeWidth={2} fill="#07813A" />
      <Bar name="Łącznie" type="monotone" dataKey="all" strokeWidth={2} fill="#888" />
    </BarChart>
    </ResponsiveContainer>
   
  );
}
