"use client";

import { Link } from "./Link";

export const Navbar = () => {
  return (
    <nav className="flex items-center rounded-md gap-6 fixed top-4 bg-[#0f172a80] z-50 backdrop-blur-md container p-6">
      <button
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        Home
      </button>
      <Link href="#t10y2y">T10Y2Y</Link>
      <Link href="#gnpca">gnpca</Link>
      <Link href="#dgs10">DGS10</Link>
    </nav>
  );
};
