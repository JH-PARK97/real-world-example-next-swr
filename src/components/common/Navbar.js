/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { PAGE_ENDPOINTS } from "@/constants/constant";
import { useRouter } from "next/router";
import useCheckLogin from "src/hook/useCheckLogin";

const Navbar = () => {
  const { login } = useCheckLogin();

  const [clientRendered, setClientRendered] = useState(false);

  useEffect(() => {
    setClientRendered(true);
  }, []);

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

          {login && clientRendered ? (
            <>
              <li className="nav-item">
                <Link className={router.pathname === PAGE_ENDPOINTS.EDITOR ? "nav-link active" : "nav-link"} href={PAGE_ENDPOINTS.EDITOR}>
                  <i className="ion-compose"></i>&nbsp;New Article
                </Link>
              </li>
              <li className="nav-item">
                <Link className={router.pathname === PAGE_ENDPOINTS.SETTINGS ? "nav-link active" : "nav-link"} href={PAGE_ENDPOINTS.SETTINGS}>
                  <i className="ion-gear-a"></i>&nbsp;Settings
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href={PAGE_ENDPOINTS.SETTINGS}>
                  <img alt="user-img" style={{ width: 24, height: 24, marginRight: 4, borderRadius: "50%" }} src={"https://api.realworld.io/images/smiley-cyrus.jpeg"} />
                  {"유저이름"}
                </Link>
              </li>
            </>
          ) : (
            <>
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
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
