import React from "react";
import Link from "next/link";

import { FaBeer } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
      <Link
        href="/"
        className="mx-auto flex w-fit items-center justify-center p-6 text-6xl font-extralight tracking-widest"
      >
        <h1>Adam Peter</h1>
      </Link>
    </div>
  );
};

export default Navbar;
