import React from 'react';
import { AiFillBook, AiFillHome } from "react-icons/ai";
import { BsPersonFill } from "react-icons/bs";
import { RiHome5Line } from "react-icons/ri";
import Dashboard from "views/Dashboard.jsx";
import Gigs from 'views/Gigs';
var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    iconComponent: <AiFillHome className="mb-2" style={{color: "#abb2c7"}} />,
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/gigs",
    name: "Gigs",
    iconComponent: <RiHome5Line className="mb-2" style={{color: "#abb2c7"}} />,
    component: Gigs,
    layout: "/admin",
  },
  {
    path: "/company",
    name: "Company",
    iconComponent: <AiFillBook className="mb-2" style={{color: "#abb2c7"}} />,
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/account",
    name: "Account",
    iconComponent: <BsPersonFill className="mb-2" style={{color: "#abb2c7"}} />,
    component: Dashboard,
    layout: "/admin",
  },
];
export default dashRoutes;
