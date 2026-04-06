import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <div class="bg-base-100 shadow-sm">
      <div className="navbar container mx-auto">
        <div class="navbar-start gap-2">
          <div class="dropdown">
            <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabindex="-1"
              class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow space-y-2"
            >
              <li>
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    `${isActive ? "border border-green-500 text-green-500" : ""} font-bold`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/books"}
                  className={({ isActive }) =>
                    `${isActive ? "border border-green-500 text-green-500" : ""} font-bold`
                  }
                >
                  Listed Books
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/page-to-read"}
                  className={({ isActive }) =>
                    `${isActive ? "border border-green-500 text-green-500" : ""} font-bold`
                  }
                >
                  Page to Read
                </NavLink>
              </li>
              <a class="btn bg-green-700 text-white">Sign In</a>
              <a class="btn bg-[#59C6D2] text-white">Sign Up</a>
            </ul>
          </div>
          <a class="text-base md:text-xl font-bold">Book Vibe</a>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal px-1 gap-4">
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  `${isActive ? "border border-green-500 text-green-500" : ""} font-bold`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/books"}
                className={({ isActive }) =>
                  `${isActive ? "border border-green-500 text-green-500" : ""} font-bold`
                }
              >
                Listed Books
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/page-to-read"}
                className={({ isActive }) =>
                  `${isActive ? "border border-green-500 text-green-500" : ""} font-bold`
                }
              >
                Page to Read
              </NavLink>
            </li>
          </ul>
        </div>
        <div class="navbar-end gap-2 hidden md:flex">
          <a class="btn bg-green-700 text-white">Sign In</a>
          <a class="btn bg-[#59C6D2] text-white">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
