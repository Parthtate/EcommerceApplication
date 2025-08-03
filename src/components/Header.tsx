// Header.jsx
import React, { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoginSharpIcon from "@mui/icons-material/LoginSharp";
import SwipeableTemporaryDrawer from "./SwipeableTemporaryDrawer.tsx";

function Header({ cartCount = 0 }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <header className="bg-white shadow-md rounded-md mx-auto my-2 px-4 py-3 max-w-7xl">
      <nav className="flex justify-between items-center">
        {/* Left Menu */}
        <ul className="flex gap-6 font-semibold">
          <li>
            <p className="text-black px-2 py-1 rounded hover:underline hover:bg-gray-200 cursor-pointer">
              Home
            </p>
          </li>

          <li className="relative group">
            <p className="text-black px-2 py-1 rounded hover:underline hover:bg-gray-200 cursor-pointer">
              About
            </p>
            <div className="absolute hidden group-hover:block bg-white rounded shadow-md top-full mt-2 left-0 w-40 z-10">
              <p className="block px-4 py-2 text-black hover:bg-gray-200 cursor-pointer">
                Our Story
              </p>
              <p className="block px-4 py-2 text-black hover:bg-gray-200 cursor-pointer">
                Team
              </p>
              <p className="block px-4 py-2 text-black hover:bg-gray-200 cursor-pointer">
                Contact
              </p>
            </div>
          </li>

          <li>
            <p className="text-black px-2 py-1 rounded hover:underline hover:bg-gray-200 cursor-pointer">
              Product
            </p>
          </li>
        </ul>

        {/* Right Icons */}
        <div className="flex gap-3">
          <button
            className="text-black p-2 border border-black rounded hover:bg-[#768f76]"
            aria-label="Login"
          >
            <LoginSharpIcon />
          </button>

          <button
            onClick={openDrawer}
            className="text-black p-2 border border-black rounded hover:bg-[#768f76] relative"
            aria-label="Open shopping cart"
          >
            <ShoppingCartIcon />
            {/* Simple Cart Counter Badge */}
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          <SwipeableTemporaryDrawer
            open={isDrawerOpen}
            onClose={closeDrawer}
            onOpen={openDrawer}
            anchor="right"
          />
        </div>
      </nav>
    </header>
  );
}

export default Header;
