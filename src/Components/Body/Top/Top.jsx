import React from 'react';
import './top.css';
import './top.scss';
import { useUserAuth } from '../../../context/UserAuthContext';

// Imported Icon
import { IoMdNotificationsOutline } from 'react-icons/io';
import { BsSearch } from 'react-icons/bs';

// Imported Images
import img  from '../../../Assets/UserProfile.jpg'


const Top = () => {
  const { user, logOut } = useUserAuth();
  console.log('This is the user',user);
  const handleLogout = async () => {
    try{
      await logOut();
    }catch (error){
      console.log('this is error',error.message);
    }
  }
  return (
    <div className="topSection">
      <div className="headerSection flex">
        <div className="title">
          <h2>Dashboard</h2>
        </div>
      <div className="adminDiv flex">
        <div className="searchBar flex">
          <input type='text' placeholder='Search...'/>
          <BsSearch className='searchicon'/>
        </div>
          <IoMdNotificationsOutline className='notiicon'/>
          <div className="adminImage">
            <img src={img} alt='Admin Image'/>
          </div>
            {user && user.email}
          <button onClick={handleLogout}>LogOut</button>
        </div>

      </div>
    </div>
  )
}

export default Top