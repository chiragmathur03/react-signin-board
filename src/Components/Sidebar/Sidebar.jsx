import React from 'react';
import './sidebar.css';
import './sidebar.scss';

// Imported Icons
import { FiPieChart } from 'react-icons/fi';
import { BsTagsFill } from 'react-icons/bs';
import { TbCalendarTime } from 'react-icons/tb';
import { FaRegUserCircle } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';

const Sidebar = () => {
  return (
    <div className="sideBar grid">

      <div className="logo">
        <h2>Board.</h2>
      </div>

      <div className="menuDiv">
        {/* <h3 className="divTitle">
          Quick Menu
        </h3> */}
        <ul className="menuLists grid">

          <li className="listItem">
            <a href='#' className='menuLink flex' >
            <FiPieChart className='icon'/>
            <span className='smallText selected'>Dashboard</span>
            </a>
          </li>
          <li className="listItem">
            <a href='#' className='menuLink flex'>
            <BsTagsFill className='icon' />
            <span className='smallText'>Transactions</span>
            </a>
          </li>
          <li className="listItem">
            <a href='#' className='menuLink flex'>
            <TbCalendarTime className='icon' />
            <span className='smallText'>Schedules</span>
            </a>
          </li>
          <li className="listItem">
            <a href='#' className='menuLink flex'>
            <FaRegUserCircle className='icon' />
            <span className='smallText'>Users</span>
            </a>
          </li>
          <li className="listItem">
            <a href='#' className='menuLink flex'>
            <FiSettings className='icon' />
            <span className='smallText'>Settings</span>
            </a>
          </li>
        </ul>
      </div>

      <div className="sideBarBottom">
        <ul className="menuLists grid">
          <li className='listItem'><a href='#' className='menuLink flex'>Help</a></li>
          <li className='listItem'><a href='#' className='menuLink flex'>Contact Us</a></li>
        </ul>
      </div>

    </div>
  )
}

export default Sidebar