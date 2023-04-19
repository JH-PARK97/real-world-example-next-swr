import Link from "next/link";
import React from "react";

interface CustomLinkProps {
  href: string;
  as: string;
  className?: string;
  children: React.ReactNode;
}

const CustomLink = ({ className, href, as, children }: CustomLinkProps) => (
  <Link href={href} as={as} passHref>
    <Link className={className || ""}>{children}</Link>
  </Link>
);

export default CustomLink;
