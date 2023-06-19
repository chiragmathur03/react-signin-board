import React, { useState, useEffect } from 'react';
import './app.css';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Home from './Pages/Home';
import ProtectedRoute from './Components/ProtectedRoute';
import { UserAuthContextProvider } from './context/UserAuthContext';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";


const App = () => {

  return (
    <Router>
      <UserAuthContextProvider>

        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home/>
            // <ProtectedRoute>
            //   <Home />
            // </ProtectedRoute>
          } />
          <Route path='/register' element={<Register />} />
        </Routes>
      </UserAuthContextProvider>
    </Router>
  )
}

export default App;