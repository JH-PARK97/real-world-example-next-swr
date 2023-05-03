import { Navbar, Footer } from "@/components/common";
import { API_URL } from "@/constants/API";
import React from "react";
import checkLogin from "src/utills/checkLogin";
import { fetcher } from "src/utills/fetcher";
import useSWR from "swr";

export const UserProfileContext = React.createContext();

const Layout = ({ children }) => {
  const { login } = checkLogin();

  const { data, isLoading } = useSWR(API_URL.USER.ROOT, fetcher);
  return (
    <>
      <UserProfileContext.Provider value={data}>
        <Navbar isLogin={login} />
        <main> {children} </main>
        <Footer />
      </UserProfileContext.Provider>
    </>
  );
};

export default Layout;
