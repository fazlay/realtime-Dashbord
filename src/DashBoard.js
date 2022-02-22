import React, { useEffect, useState } from 'react';
import Chart from './Chart';
import BtcBarChart from './BtcBarChart.js';
import Topdesignbar from './TopDesignBar';
import io from 'socket.io-client';
const url = 'https://immense-sierra-60249.herokuapp.com';
// const url = 'http://localhost:5000/';

const socket = io(url, {
  transports: ['websocket', 'polling'],
});
const DashBoard = () => {
  const [datas, setDatas] = useState([
    { name: `${new Date().getSeconds()}`, uv: 0 },
  ]);

  useEffect(() => {
    socket.on('symbol', (stockPrice) => {
      console.log(stockPrice);

      setDatas(stockPrice);
    });
  }, []);
  return (
    <>
      <div className='bg-gray-200 top-0 py-2 '>DashBoard</div>
      {/* LEFT SIDE BAR-------------------------------------------------------- */}
      <div className='bg-gray-900 top-0 h-screen left-0 text-white top-0 fixed w-48 py-2 '>
        <div className='text-2xl flex items-center pb-4 px-2'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            class='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z'
            />
          </svg>{' '}
          <span className='pl-1 font-bold'>MINDSET</span>
        </div>
        <ul className='text-left  pt-10'>
          <li className='flex items-center text-xl font-light py-2 pl-4 hover:bg-gray-800'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              class='h-4 w-4'
              fill='none'
              viewBox='0 0 22 22'
              stroke='currentColor'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z'
              />
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z'
              />
            </svg>
            <span className='pl-2'> DashBoard</span>
          </li>
          <li className='flex items-center text-xl font-light py-2  pl-4 hover:bg-gray-800'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              class='h-4 w-4'
              fill='none'
              viewBox='0 0 22 22'
              stroke='currentColor'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z'
              />
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z'
              />
            </svg>
            <span className='pl-2'> Analytics</span>
          </li>
          <li className='flex items-center text-xl font-light py-2  pl-4 hover:bg-gray-800'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              class='h-4 w-4'
              fill='none'
              viewBox='0 0 22 22'
              stroke='currentColor'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z'
              />
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z'
              />
            </svg>
            <span className='pl-2'> Insights</span>
          </li>
        </ul>
      </div>
      {/* -----------------CURRENT PRICE AND OTHER INFO CARD ------------------------- */}
      <Topdesignbar></Topdesignbar>
      <div></div>

      {/* -----------------------------CHARTS------------------------- */}
      <div className='flex justify-center '>
        <Chart datas={datas}></Chart>
        <BtcBarChart datas={datas}></BtcBarChart>
      </div>
    </>
  );
};

export default DashBoard;
