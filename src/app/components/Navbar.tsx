"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import UserIcon from "./layout/UserIcon";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { UserData } from "..";
import { signOut, useSession } from "next-auth/react";

function Navbar() {
  const dispatch = useDispatch<AppDispatch>();
  const { data } = useSession();
  const user = useSelector<RootState>((state) => state.user.currentUser) as UserData;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (data?.user?.email) {
      // dispatch(fetchuserAsync({ email: data?.user?.email }))
    }
  }, [data?.user?.email]);

  return (
    <div className="bg-blue-500">
      <div className="container mx-auto max-w-[1200px] flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-white">
          Logo
        </Link>

        {/* Hamburger Menu for Small Screens */}
        <button
          className="text-white md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Menu Links */}
        <div
          className={`absolute top-[84px] z-10 left-0 w-full bg-blue-500 md:static md:flex md:w-auto md:items-center md:gap-4 transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          {/* Links */}
          <Link href="/" className="block px-4 py-2 text-white hover:bg-blue-600">
            Home
          </Link>
          <Link href="/pages/about" className="block px-4 py-2 text-white hover:bg-blue-600">
            About
          </Link>
          <Link href="/pages/contact" className="block px-4 py-2 text-white hover:bg-blue-600">
            Gallery
          </Link>
          <Link href="/pages/courses" className="block px-4 py-2 text-white hover:bg-blue-600">
            Services
          </Link>
          <Link href="/pages/blog" className="block px-4 py-2 text-white hover:bg-blue-600">
            Blog
          </Link>
          <Link href="/pages/faq" className="block px-4 py-2 text-white hover:bg-blue-600">
            FAQ
          </Link>

          {/* Login/Logout */}
          {user ? (
            <button
              onClick={() => signOut()}
              className="block px-4 py-2 bg-blue-700 text-white rounded-lg font-medium hover:bg-blue-800 transition"
            >
              Logout
            </button>
          ) : (
            <Link
              href="/pages/auth"
              className="block px-4 py-2 bg-blue-700 text-white rounded-lg font-medium hover:bg-blue-800 transition"
            >
              Login
            </Link>
          )}

          {/* Admin Page */}
          {user && user.role === "ADMIN" && (
            <Link
              href="/pages/admin/users"
              className="block px-4 py-2 bg-blue-700 text-white rounded-lg font-medium hover:bg-blue-800 transition"
            >
              Admin
            </Link>
          )}

          {/* User Icon */}
          {user && (
            <div className="block px-4 py-2">
              <UserIcon />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
