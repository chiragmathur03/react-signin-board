import React from 'react';
import Sidebar from '../Components/Sidebar/Sidebar';
import Body from '../Components/Body/Body';
import '../app.css';

const Home = () => {
    return (
        <div className='container flex home'>
            <Sidebar />
            <Body />
        </div>
    )
}

export default Home