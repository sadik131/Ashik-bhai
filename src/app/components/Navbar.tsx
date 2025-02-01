"use client"
import { useEffect, useState } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { AppDispatch, RootState } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { signOut, useSession } from "next-auth/react";
import { UserData } from "..";
import UserIcon from "./layout/UserIcon";
import { fetchuserAsync } from "../redux/user/userSlice";

const Navbar = () => {

  const menuLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/pages/about" },
    { name: "Gallery", href: "/pages/contact" },
    { name: "Services", href: "/pages/courses" },
    { name: "Blog", href: "/pages/blog" },
    { name: "FAQ", href: "/pages/faq" },
  ];

  const dispatch = useDispatch<AppDispatch>();
  const { data } = useSession() as { data: { user: { id?: string; name?: string | null; email?: string | null; image?: string | null } } | null };
  const user = useSelector<RootState>((state) => state.user.currentUser) as UserData;

  console.log(data, "session data")

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    if (data?.user?.id) {
      dispatch(fetchuserAsync({ id: data?.user?.id }))
    }
  }, [data?.user?.id]);

  return (
    <div className="bg-blue-500">
      <div className="max-w-xlmx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-white">
          Logo
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {menuLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-white hover:bg-blue-600 px-4 py-2 rounded-md transition"
            >
              {link.name}
            </Link>
          ))}

          {/* Admin Link */}
          {user && user.role === "ADMIN" && (
            <Link
              href="/pages/admin/users"
              className="bg-blue-700 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-800 transition"
            >
              Admin
            </Link>
          )}

          {/* Login/Logout */}
          {user ? (
            <button
              onClick={() => signOut()}
              className="bg-blue-700 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-800 transition"
            >
              Logout
            </button>
          ) : (
            <Link
              href="/pages/auth"
              className="bg-blue-700 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-800 transition"
            >
              Login
            </Link>
          )}

          {/* User Icon */}
          {user && <UserIcon />}
        </div>

        {/* Hamburger Menu */}
        <button
          className="text-white md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
          aria-expanded={isMenuOpen}
        >
          <GiHamburgerMenu size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-blue-500 transition-all duration-300 ease-in-out ${isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
      >
        <div className="flex flex-col space-y-2 px-6 py-4">
          {menuLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-white hover:bg-blue-600 px-4 py-2 rounded-md transition"
            >
              {link.name}
            </Link>
          ))}
          {/* Login/Logout */}
          {user ? (
            <button
              onClick={() => signOut()}
              className="bg-blue-700 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-800 transition"
            >
              Logout
            </button>
          ) : (
            <Link
              href="/pages/auth"
              className="bg-blue-700 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-800 transition"
            >
              Login
            </Link>
          )}
          {/* Admin Link */}
          {user && user.role === "ADMIN" && (
            <Link
              href="/pages/admin/users"
              className="bg-blue-700 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-800 transition"
            >
              Admin
            </Link>
          )}
          {/* User Icon */}
          {user && <UserIcon />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
