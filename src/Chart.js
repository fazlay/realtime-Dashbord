import React, { useEffect, useState } from 'react';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import './App.css';

const Chart = (props) => {
  return (
    <div>
      <LineChart
        width={500}
        height={300}
        data={props.datas}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='name' />
        <YAxis type='number' domain={['dataMin-2', 'dataMax+2']} dataKey='uv' />
        <Tooltip />
        <Legend />

        <Line type='monotone' dataKey='uv' stroke='#82ca9d' />
      </LineChart>
    </div>
  );
};

export default Chart;
