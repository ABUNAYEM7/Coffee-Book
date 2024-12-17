import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Coffee from '../Pages/Coffee'
import Dashboard from '../Pages/Dashboard'
import DetailsCoffee from '../Pages/DetailsCoffee'

const routes = createBrowserRouter([
    {
      path :'/',
      element :<MainLayout/>,
      children :[
        {
          path :'/',
          element :<Home/>,
          loader :()=> fetch('/coffees.json')
        },
        {
          path :'/Coffee',
          element :<Coffee/>,
          loader :()=> fetch('/coffees.json')
        },
        {
          path :'/Dashboard',
          element :<Dashboard/>,
          loader :()=> fetch('/coffees.json')
        },
        {
          path :'/Coffee/:id',
          element :<DetailsCoffee/>,
          loader :()=> fetch('/coffees.json')
        }
      ]
    },
    
  ])

export default routes