
import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Addpost from './Addpost';
import Post from './Post';
import NotFound from './NotFound';

const App = () => {
  const [clientData, setClientData] = useState('');
  const hostnames = import.meta.env.VITE_SECONDARY_PUBLIC_HOSTNAME
  
 useEffect(() => {
    fetch(`${dataURL}/blogs`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => setClientData(data))
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  return (
   
      <div className="App">
        <Navbar />
      {  
        //  <Outlet/>
      }
      </div>
   
  );
};

export default App;
