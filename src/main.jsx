import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter,createRoutesFromElements } from 'react-router-dom'
import Addpost from './Addpost.jsx'
import Post from './Post.jsx'
import NotFound from './NotFound.jsx'
import Home from './Home.jsx'
import BlogList from './BlogList.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'',
        element:<Home/>
      },
      {
        path:'addpost',
        element:<Addpost/>
      },
      {
        path:'blogs',
        element:<BlogList/>
      },
      {
        path:'/blogs/:id',
        element:<Post/>
      },
      {
        path:'/*',
        element:<NotFound/>
      },
    
    ]

  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}/>
  </React.StrictMode>,
)
