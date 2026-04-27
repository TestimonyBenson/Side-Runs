"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if our mock user exists in local storage
    setIsLoggedIn(localStorage.getItem("sideRunsUser") === "true");
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("sideRunsUser");
    window.location.href = "/"; // Reload home page
  };

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-extrabold text-blue-600 tracking-tight">
              Side Runs
            </Link>
          </div>
          
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <Link href="/dashboard" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition">
              Dashboard
            </Link>
            <Link href="/errands" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition">
              Find Errands
            </Link>
            
            <div className="flex items-center space-x-4 pl-6 border-l border-gray-200">
              {isLoggedIn ? (
                <>
                  <Link href="/profile" className="flex items-center text-sm font-medium text-gray-900 hover:text-blue-600 transition">
                    <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-2 font-bold">
                      T
                    </div>
                    Profile
                  </Link>
                  <button onClick={handleLogout} className="text-sm font-medium text-red-600 hover:text-red-700 transition">
                    Log out
                  </button>
                </>
              ) : (
                <>
                  <Link href="/login" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition">
                    Log in
                  </Link>
                  <Link href="/signup" className="bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                    Sign up
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}