
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Addpost from './Addpost';
import Post from './Post';
import NotFound from './NotFound';

const App = () => {
  const [clientData, setClientData] = React.useState('');
  const port = import.meta.env.VITE_SECONDARY_PUBLIC_PORT
  const playgroundHostname = new URL (`https://${import.meta.env.VITE_PUBLIC_HOSTNAME}`)
  const dataURL = `https://${playgroundHostname.hostname.split('.')[0]}-${port}.codedamn.app`
  
  React.useEffect(() => {
    fetch(`${dataURL}/blogs`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => setClientData(data))
      .catch(error => {
        // Handle the error here, for example, log it or update state with an error message.
        console.error('Error fetching data:', error);
      });
  }, []);
  return (
   
      <div className="App">
        <Navbar />
        <Outlet/>
      
      </div>
   
  );
};

export default App;
