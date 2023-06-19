import React from 'react'
import './schedule.scss'
import { BiChevronRight } from 'react-icons/bi';

const Schedule = () => {
  return (
    <div className='scheduleSection'>
      <div className="header flex">
        <h3>Today's Schedule</h3>
        <button className='btn flex'>See All <BiChevronRight className='icon'/></button>
      </div>

      <div className="schedulelist grid">
        <div className="firstlist">
          <h4>Meeting with Suppliers from Kuta Bali</h4>
          <span className='smallText'>14.00-15.00 <br/>
          at Sunset Road, Kuta, Bali</span>
        </div>

        <div className="secondlist">
          <h4>Check Operation at Giga Factory 1</h4>
          <span className='smallText'>18.00-20.00 <br/>
          at Central Jakarta</span>
        </div>

      </div>
    </div>
  )
}

export default Schedule