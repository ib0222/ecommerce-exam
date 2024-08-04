import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer"
import Section6 from "../Sections/Section6";
import Section8 from "../Sections/Section8";
function Layout() {
  return (
    <div>
      <Header />
      <Outlet />      
      <Section8/>
      <Section6/>
      <Footer/>
    </div>
  );
}

export default Layout;
