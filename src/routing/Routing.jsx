import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Navbar from '../navbar/Navbar'
import Home from '../component/home/Home'
import Allproducts from "../component/allproducts/Allproducts";
import Cart from '../component/cart/Cart'
import EditProfile from './../component/editProfile/EditProfile';
import Login from '../component/login/Login';
import SignUp from "../component/signup/SignUp";



const Routing = createBrowserRouter([
    {
        path : "/",
        element : <Navbar/>,
        children : [
            {
                path: "/",
                element : <Home/>
            },
            {
                path: "/allproducts",
                element : <Allproducts/>
            },
            {
                path: "/cart",
                element : <Cart/>
            },
            {
                path: "/editProfile",
                element : <EditProfile/>
            },
            {
                path: "/login",
                element : <Login/>
            },
            {
                path: "/signup",
                element : <SignUp/>
            },
        ]
    }
])

export default Routing