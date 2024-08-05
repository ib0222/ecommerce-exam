import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer"
import Benefits from "../Sections/Benefits";
import NewsLetter from "../Sections/NewsLetter";
function Layout() {
  return (
    <div>
      <Header />
      <Outlet />      
      <NewsLetter/>
      <Benefits/>
      <Footer/>
    </div>
  );
}

export default Layout;
