// import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import ListedBooks from './pages/ListedBooks.jsx'
import PagesRead from './pages/PagesRead.jsx'
import MainLayout from './layouts/MainLayout.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <MainLayout></MainLayout>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader: ()=> fetch('/pages.json'),
      },
      {
        path:'/listedBooks',
        element: <ListedBooks></ListedBooks>,
      },
      {
        path:'/pagesRead',
        element: <PagesRead></PagesRead>,
      },
    ]
  },


])

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
   <RouterProvider router={router}></RouterProvider>
  </>,
)
