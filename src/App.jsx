
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Addpost from './Addpost';
import Post from './Post';
import NotFound from './NotFound';

const App = () => {
  return (
   
      <div className="App">
        <Navbar />
        <Outlet/>
      
      </div>
   
  );
};

export default App;
