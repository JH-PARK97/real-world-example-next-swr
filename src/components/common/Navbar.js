import React from "react";
import Link from "next/link";

const Navbar = () => {
  const currentUser = {
    username: "user1234",
  };
  const handleClick = () => {
    console.log("click");
  };
  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link className="navbar-brand" href="index.html">
          conduit
        </Link>
        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            <Link className="nav-link active" href="">
              Home
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link className="nav-link" href="">
              <i className="ion-compose"></i>&nbsp;New Article
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="">
              <i className="ion-gear-Link"></i>&nbsp;Settings
            </Link>
          </li> */}
          <li className="nav-item">
            <Link className="nav-link" href="">
              Sign in
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="">
              Sign up
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
