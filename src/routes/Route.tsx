
// import AdminLayout from "@/components/layouts/AdminLayout";

import {createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import AdminLayout from "../components/layouts/AdminLayout";
import Dashboard from "../pages/admin/Dashboard";
import Event from "../pages/admin/Event";
import RecentEvent from "../pages/admin/RecentEvent";
import CreateEvent from "../pages/admin/CreateEvent";
import CreateRecentEvent from "../pages/admin/CreateRecentEvent";
import UpdateEvent from "../pages/admin/UpdateEvent";
import UpdateRecentEvent from "../pages/admin/UpdateRecentEvent";


const router  = createBrowserRouter([
    {
        path:'/',
        element: <App></App>,
        children: [
            {
                path:'/',
                // index: true,
                element: <Home></Home> ,
            },
           
        ]
    },
    {
        path:'/admin',
        element: <AdminLayout></AdminLayout>,
        children: [
            // {
            //     index: true,
            //     element: <Navigate to='/admin/dashboard'></Navigate>
            // },
            {
                path:'dashboard', 
                // index: true,              
                element: <Dashboard></Dashboard>,
            },
            {
                path:'event',               
                element: <Event></Event>,
            },

            {
                path:'create-event',               
                element: <CreateEvent></CreateEvent>,
            },
            {
                path:'update-event/:id',               
                element: <UpdateEvent></UpdateEvent>,
                loader: ({params})=>fetch(`https://assignment5-frontend-server.vercel.app/${params.id}`)
               
            },
            {
                path:'recent-event',               
                element: <RecentEvent></RecentEvent>,
            },
           
            {
                path:'create-recent-event',               
                element: <CreateRecentEvent></CreateRecentEvent>,
            },
            {
                path:'update-recent-event/:id',               
                element: <UpdateRecentEvent></UpdateRecentEvent>,
                loader: ({params})=>fetch(`https://assignment5-frontend-server.vercel.app/${params.id}`)
               
            },
           
        ]
    },
]);

export default router;