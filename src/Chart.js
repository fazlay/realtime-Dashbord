import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
// const url = "https://immense-sierra-60249.herokuapp.com";
const url = 'http://localhost:5000/';

const socket = io(url, {
  transports: ['websocket', 'polling'],
});

// NIFTY50: 8094.7,
// MARUTI: 8593.65,
// AXISBANK: 799.55,
// SBIN: 540.1,
// " INDUSINDBK": 958.35,

const Chart = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    socket.on('symbol', (stockPrice) => {
      console.log(stockPrice);
      setDatas(stockPrice);
    });
  }, []);
  const keys = Object.values(datas);

  return (
    <div>
      <h1>This is the stock Current Price </h1>
      {Object.entries(datas).map((element) => (
        <h1>
          {element[0]}--{element[1]}
        </h1>
      ))}
    </div>
  );
};

export default Chart;
