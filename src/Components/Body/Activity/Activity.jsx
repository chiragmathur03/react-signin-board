import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { RiArrowDropDownLine } from 'react-icons/ri';
import './activity.css';
import './activity.scss';
import {
    Chart as ChartJS,
    LineElement,
    Title, Tooltip,
    Legend, PointElement, CategoryScale, LinearScale, Filler
} from 'chart.js';

ChartJS.register (
    LineElement,
    Title, Tooltip,
    Legend, PointElement, CategoryScale, LinearScale , Filler
  );
  
// const options = { 
//   indexAxis: 'y', 
//   elements: { 
//     bar: {
//       borderWidth: 2,
//     },
//   },
//   responsive: true,
//   plugins: {
//     legend: {
//       position: 'left',
//     },
//   title: {
//     display: true,
//     text: 'Chart.js Horizontal Bar Chart',
//   },
// },
// };

// // const labels =['Sunday', 'Monday', 'tuesday', 'wednesday', 'friday', 'saturday']
// const data = { 
//   labels,
//   datasets: [
//     {
//       label: 'Dataset 1',
//       data: [1, 2, 3, 4, 5],
//       borderColor: 'rgb(255, 99, 132)',
//       backgroundColor: 'rgba(255, 99, 132, 0.5)',
//     },
//     {
//       label: 'Dataset 2',
//       data: [1, 2, 3, 4, 5],
//       borderColor: 'rgb(53, 162, 235)',
//       backgroundColor: 'rgba(53, 162, 235, 0.5)',
//     },
//   ],
// };

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  cubicInterpolationMode: 'monotone',
  plugins:{
    legend: {
      align: 'end',
      // position: 'start',
      // // display: 'flex',
      labels: {
        font: {
          weight: 'bold',
          color: 'black'
        },
        usePointStyle: true,
        boxWidth: 20,
        // boxHeight: 50,
        fontColor: 'red'
        // fontSize: 12,
        // padding: 20,
        // pointStyle
      }
  }
    },
    scales: {
      x:{
        grid: {
          display: false
        }
      },
      y: {
        beginAtZero: true,
          ticks: {
            stepSize: 100,
          },
        },
    },
};

const Activity = () => {
  const [data,setData] = useState(
  {
    labels: ['','Week 1', 'Week 2', 'Week 3', 'Week 4',''],
    datasets: [
      {
        // label: 'Dataset 1',
        // data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120],
        // borderColor: 'rgb(255, 99, 132)',
        // backgroundColor: 'rgba(255, 99, 132, 0.5)',
        // tension: 0.4,
        // fill: true,
        // pointStyle: 'circle',
        // pointBorderColor:'blue',
        // pointBackgroundColor: '#fff',
        // showLine:true,
        // drawBorder: false
      },
    ]
  }
  )

  useEffect(() =>{
    const height = [];
    const weight = [];
    fetch('https://dummyjson.com/users')
      .then(response => response.json())
      .then(json => {
        console.log('json',json)
        json.users.map(item => {
          // const height = item.height
          // const weight = item.weight
          height.push(item.height);
          weight.push(item.weight);
        })
        
        
        setData (
          {
            labels: ['','Week 1', 'Week 2', 'Week 3', 'Week 4',''],
            datasets: [
              {
              label: 'Height',
              data: height,
              borderColor: 'rgb(155,220,125)',
              backgroundColor: 'rgba(155, 220, 125, 0.5)',
              pointRadius: 0,
              // showLine:true,
              // drawBorder: false,
            },
            {
              label: 'Weight',
              data: weight,
              borderColor: 'rgb(232,160,161)',
              backgroundColor: 'rgba(232, 160, 161, 0.5)',
              pointRadius: 0,
            },
          ],
        }
      )
      }

      )
  },[])
  return (
    <div className='activitySection'>
      <h3>Activities</h3>
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
      <div className="chartArea">
       <Line data={data} options={chartOptions} />
      </div>
    </div>
  )
} 

export default Activity