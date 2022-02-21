import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
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
const url = 'https://immense-sierra-60249.herokuapp.com';
// const url = 'http://localhost:5000/';

const data = [
  {
    name: 'Page A',
    uv: 4000,
  },
  {
    name: 'Page B',
    uv: 3000,
  },
  {
    name: 'Page C',
    uv: 2000,
  },
  {
    name: 'Page D',
    uv: 2780,
  },
  {
    name: 'Page E',
    uv: 1890,
  },
  {
    name: 'Page F',
    uv: 2390,
  },
  {
    name: 'Page G',
    uv: 3490,
  },
];
const socket = io(url, {
  transports: ['websocket', 'polling'],
});

const Chart = () => {
  const [datas, setDatas] = useState([
    { name: `${new Date().getSeconds()}`, uv: 0 },
  ]);

  // let obj = [{ time: `${new Date().getSeconds()}`, MarketPrice: 0 }];

  // { time: `${new Date().getSeconds()}`, MarketPrice: 0 },
  //{
  //  time: `${new Date().getSeconds()}`,
  //  MarketPrice: stockPrice.regularMarketPrice,
  //}

  useEffect(() => {
    socket.on('symbol', (stockPrice) => {
      console.log(stockPrice);
      // let newPrice = {
      //   name: `${new Date().getSeconds()}`,
      //   uv: parseInt(stockPrice.regularMarketPrice),
      // };

      // chartData.push(newPrice);

      setDatas(stockPrice);
    });
  }, []);

  // const keys = Object.values(datas);

  return (
    <div>
      <LineChart
        width={500}
        height={300}
        data={datas}
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
      {/* {Object.entries(datas).map((element) => (
        <h1>
          {element[0]}--{element[1]}
        </h1>
      ))} */}
    </div>
  );
};

export default Chart;
