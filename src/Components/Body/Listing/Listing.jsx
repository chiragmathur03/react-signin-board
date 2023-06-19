import React from 'react';
import './listing.css';
import './listing.scss';

// imported Images
import img from '../../../Assets/images.png';

// imported Icons
import { BsTags } from 'react-icons/bs';
import { AiOutlineLike } from 'react-icons/ai';
import { FiUsers } from 'react-icons/fi';

const Listing = () => {
  return (
    <div className="listingSection">
      <div className="secContainer flex">
        <div className="singleItem firstcolor">
          <img src={img} alt='Deposits'/>
          <div className="containerData">
            <h5>Total Revenues</h5>
            <h2>$2,129,430</h2>
          </div>
        </div>
        <div className="singleItem seccolor">
          <BsTags className='icon'/>
          <div className="containerData">
            <h5>Total Transcations</h5>
            <h2>1,520</h2>
          </div>
        </div>
        <div className="singleItem thirdcolor">
          <AiOutlineLike className='icon'/>
          <div className="containerData">
            <h5>Total Likes</h5>  
            <h2>9,721</h2>
          </div>
        </div>
        <div className="singleItem fourcolor">
          <FiUsers className='icon'/>
          <div className="containerData">
            <h5>Total Users</h5>
            <h2>892</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Listing