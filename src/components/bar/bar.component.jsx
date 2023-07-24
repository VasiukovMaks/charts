import React from 'react';
import {
  BarChart, Legend, XAxis, YAxis, Bar,
} from 'recharts';

export default function BarComponent({ data }) {
  if (!data) {
    return null;
  }

  return (
    data.length && (
      <BarChart width={730} height={250} data={data}>
        <XAxis dataKey="xAxis" />
        <YAxis />
        <Legend />
        <Bar dataKey="valueOne" fill="#000000" name="Фабрика А" />
        <Bar dataKey="valueTwo" fill="#ff0000" name="Фабрика Б" />
      </BarChart>
    )
  );
}
