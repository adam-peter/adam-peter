import React from "react";
import Link from 'next/link'

import { FaBeer } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
      <Link href="/">
      <h1 className="flex items-center justify-center p-6 text-6xl font-extralight tracking-widest">
        Adam Peter
      </h1>
      </Link>
    </div>
  );
};

export default Navbar;
