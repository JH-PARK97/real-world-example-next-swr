import { PAGE_ENDPOINTS } from "@/constants/constant";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <Link href={PAGE_ENDPOINTS.ROOT} className="logo-font">
          conduit
        </Link>
        <span className="attribution">
          An interactive learning project from <Link href="https://thinkster.io">Thinkster</Link>. Code &amp; design licensed under MIT.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
