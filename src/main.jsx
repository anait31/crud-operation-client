import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddUser from './components/AddUser/AddUser.jsx';
import UpdateUser from './components/UpdateUser/UpdateUser.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch('http://localhost:5000/users')
  },
  {
    path: '/addUsers',
    element: <AddUser></AddUser>
  },
  {
    path: '/updateUsers/:id',
    element: <UpdateUser></UpdateUser>,
    loader: ({params}) => fetch(`http://localhost:5000/users/${params.id}`)
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
