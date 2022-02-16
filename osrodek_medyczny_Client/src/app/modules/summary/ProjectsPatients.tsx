import React from "react";
import {
  Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis,
  YAxis
} from "recharts";
import chart from "../../../data/chartPatientsProjects.json";


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
    </BarChart>
    </ResponsiveContainer>
  );
}
