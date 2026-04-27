"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Tracks mobile menu state

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("sideRunsUser") === "true");
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("sideRunsUser");
    window.location.href = "/"; 
  };

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-extrabold text-blue-600 tracking-tight">
              Side Runs
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <Link href="/errands" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition">
              Find Errands
            </Link>
            
            {isLoggedIn ? (
              <>
                <Link href="/dashboard" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition">
                  Dashboard
                </Link>
                <div className="flex items-center space-x-4 pl-6 border-l border-gray-200">
                  <Link href="/profile" className="flex items-center text-sm font-medium text-gray-900 hover:text-blue-600 transition">
                    <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-2 font-bold">
                      T
                    </div>
                    Profile
                  </Link>
                  <button onClick={handleLogout} className="text-sm font-medium text-red-600 hover:text-red-700 transition">
                    Log out
                  </button>
                </div>
              </>
            ) : (
              <div className="flex items-center space-x-4 pl-6 border-l border-gray-200">
                <Link href="/login" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition">
                  Log in
                </Link>
                <Link href="/signup" className="bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                  Sign up
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center sm:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="sm:hidden bg-white border-b border-gray-200 shadow-lg absolute w-full">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <Link href="/errands" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">
              Find Errands
            </Link>
            
            {isLoggedIn ? (
              <>
                <Link href="/dashboard" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">
                  Dashboard
                </Link>
                <Link href="/profile" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">
                  Profile
                </Link>
                <button onClick={handleLogout} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-red-600 hover:bg-red-50">
                  Log out
                </button>
              </>
            ) : (
              <>
                <Link href="/login" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">
                  Log in
                </Link>
                <Link href="/signup" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-blue-600 hover:bg-blue-50">
                  Sign up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}