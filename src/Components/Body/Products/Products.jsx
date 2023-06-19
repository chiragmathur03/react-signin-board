import React, { useEffect, useState } from 'react';
import './products.scss';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJs, Tooltip, Title, ArcElement, Legend } from 'chart.js';
import { RiArrowDropDownLine } from 'react-icons/ri';

ChartJs.register(
  Tooltip, Title,ArcElement, Legend
);

// const data = { 
//   datasets: [{
//     data: [10,20,30],
//     backgroundColor:[
//       'red',
//       'yellow',
//       'blue'
//     ]
//   }],

//   //These labels appears in the legend and in the tooltips when hovering different arcs
//   labels:[
//     'Red',
//     'Yellow',
//     'Blue' 
//   ]
// }
const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  // cubicInterpolationMode: 'monotone',
  width: 200, // set the width of the chart
  height: 200,
  plugins:{
    legend: {
      // align: 'right',
      position: 'right',
      // // display: 'flex',
      labels: {
        font: {
          weight: 'bold',
        },
        // fontWeight: 'bold',
        usePointStyle: true,
        boxWidth: 20,
        // boxHeight: 50,
        // fontColor: 'black',
        fontSize: 14,
        padding: 25,
        // pointStyle
      }
  }
    },
    // scales: {
    //   x:{
    //     grid: {
    //       display: false
    //     }
    //   },
    //   y: {
    //     beginAtZero: true,
    //       ticks: {
    //         stepSize: 100,
    //       },
    //     },
    // },
};

const Products = () => {
  const [data, setData] = useState({ 
    datasets: [{
      // data: [10,20,30],
      backgroundColor:[
        // 'red',
        // 'yellow',
        // 'blue'
      ]
    }],
  
    //These labels appears in the legend and in the tooltips when hovering different arcs
    labels:[
      // 'Red',
      // 'Yellow',
      // 'Blue' 
    ],
  });

  useEffect(() =>{
    const fetchData = () => {
      fetch('https://api.escuelajs.co/api/v1/categories')
      .then((data) => {const res=data.json();
        return res
  }).then((res) => {
    console.log('res',res)
    var label = [];
    var data = [];
    for (var i of res){
      label.push(i.name);
      data.push(i.id) 
      data.reverse()
      label.reverse()
      data = data.slice(0,3)
      label = label.slice(0,3)
    }
    setData(
      {
        datasets: [{
          data: data,
          backgroundColor:[
            'rgba(152,216,158,255)',
            'rgba(239,133,132,255)',
            'rgba(246,220,125,255)',
            'rgb(108,108,108)'
          ]
        }],
      
        labels:label,
      }
    )
  }).catch(e=>{
    console.log('error',e)
  })
}
fetchData();
},[])
  return (
    <div className='productSection'>
      <div className="pieTitle flex">
        <h3>Top Products</h3>
        {/* <button className='btn flex'>See All <BsArrowRightShort className='icon'/></button> */}
        <div className="dropdownmenu">
          <select>
            <option value='M1'>Jan - Feb 2021</option>
            <option value='M2'>Mar - Apr 2021</option>
            <option value='M3' selected>May - June 2021</option>
            <option value='M4'>July - Aug 2021</option>
            <option value='M5'>Sept - Oct 2021</option>
            <option value='M6'>Nov - Dec 2021</option>
          </select>
         {/* <RiArrowDropDownLine className='icon'/> */}
        </div>
      </div>
        <div className="chartContainer">
          <Pie data={data} options={chartOptions}/>
        </div>
      </div>
  )
}

export default Products