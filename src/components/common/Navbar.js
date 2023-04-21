import React, { useState } from "react";
import Link from "next/link";
import { PAGE_ENDPOINTS } from "@/constants/constant";
import { useRouter } from "next/router";

const Navbar = () => {
  const [isClick, setIsClick] = useState(false);
  const currentUser = {
    username: "user1234",
  };

  const router = useRouter();

  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link className="navbar-brand" href={PAGE_ENDPOINTS.ROOT}>
          conduit
        </Link>
        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            <Link className={router.pathname === PAGE_ENDPOINTS.ROOT ? "nav-link active" : "nav-link"} href={PAGE_ENDPOINTS.ROOT}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className={router.pathname === PAGE_ENDPOINTS.EDITOR ? "nav-link active" : "nav-link"} href={PAGE_ENDPOINTS.EDITOR}>
              <i className="ion-compose"></i>&nbsp;New Article
            </Link>
          </li>
          <li className="nav-item">
            <Link className={router.pathname === PAGE_ENDPOINTS.SETTINGS ? "nav-link active" : "nav-link"} href={PAGE_ENDPOINTS.SETTINGS}>
              <i className="ion-gear-Link"></i>&nbsp;Settings
            </Link>
          </li>
          <li className="nav-item">
            <Link className={router.pathname === PAGE_ENDPOINTS.AUTH.LOGIN ? "nav-link active" : "nav-link"} href={PAGE_ENDPOINTS.AUTH.LOGIN}>
              Sign in
            </Link>
          </li>
          <li className="nav-item">
            <Link className={router.pathname === PAGE_ENDPOINTS.AUTH.REGIS ? "nav-link active" : "nav-link"} href={PAGE_ENDPOINTS.AUTH.REGIS}>
              Sign up
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
