import { Navbar, Footer } from "@/components/common";
import React from "react";
import checkLogin from "src/utills/checkLogin";

const Layout = ({ children }) => {
  const { login } = checkLogin();

  return (
    <>
      <Navbar isLogin={login} />
      <main> {children} </main>
      <Footer />
    </>
  );
};

export default Layout;
