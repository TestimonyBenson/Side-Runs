"use client";

import { useState } from "react";
import Link from "next/link";

export default function Signup() {
  const [isLoading, setIsLoading] = useState(false);
  const [accountType, setAccountType] = useState("poster"); // 'poster' or 'runner'

 const handleSignup = (e: React.FormEvent) => {
  e.preventDefault();
  setIsLoading(true);
  setTimeout(() => {
    setIsLoading(false);
    localStorage.setItem("sideRunsUser", "true"); // Mock auth state
    window.location.href = "/"; // Redirect to home
  }, 1000);
};

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-10">
      <div className="max-w-md w-full bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900">Join Side Runs</h1>
          <p className="text-gray-600 mt-2">Create an account to get started.</p>
        </div>

        {/* Account Type Toggle */}
        <div className="flex bg-gray-100 rounded-lg p-1 mb-6">
          <button
            type="button"
            onClick={() => setAccountType("poster")}
            className={`flex-1 py-2 text-sm font-semibold rounded-md transition ${
              accountType === "poster" ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-700"
            }`}
          >
            I need things done
          </button>
          <button
            type="button"
            onClick={() => setAccountType("runner")}
            className={`flex-1 py-2 text-sm font-semibold rounded-md transition ${
              accountType === "runner" ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-700"
            }`}
          >
            I want to be a Runner
          </button>
        </div>

        <form onSubmit={handleSignup} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input 
              type="text" 
              required 
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input 
              type="email" 
              required 
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
            />
          </div>
          <div>
  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
  <input 
    type="tel" 
    required 
    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    placeholder="+234 ..."
  />
</div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input 
              type="password" 
              required 
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Create a strong password"
            />
          </div>

          <button 
            type="submit" 
            disabled={isLoading}
            className={`w-full text-white font-bold py-3 rounded-lg transition ${
              isLoading ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 shadow-sm"
            }`}
          >
            {isLoading ? "Creating account..." : "Create Account"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link href="/login" className="font-semibold text-blue-600 hover:text-blue-500">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}