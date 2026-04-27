"use client";

import { useState } from "react";

export default function Profile() {
  const [isSaving, setIsSaving] = useState(false);
  
  // State to hold and edit user details
  const [user, setUser] = useState({
    fullName: "Testimony Darakeobong Benson",
    email: "testimony@example.com",
    phone: "+234 800 000 0000",
    bankName: "Guaranty Trust Bank (GTB)",
    accountNumber: "0123456789"
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      alert("Profile and account details updated successfully!");
    }, 1000);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Account Profile</h1>

      <form onSubmit={handleSave} className="space-y-8">
        {/* Personal Details Section */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">Personal Information</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input 
                type="text" name="fullName" value={user.fullName} onChange={handleChange} required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input 
                  type="email" name="email" value={user.email} onChange={handleChange} required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input 
                  type="tel" name="phone" value={user.phone} onChange={handleChange} required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Payment Details Section */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">Payout Details</h2>
          <p className="text-sm text-gray-500 mb-4">This is where your runner earnings will be deposited.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Bank Name</label>
              <input 
                type="text" name="bankName" value={user.bankName} onChange={handleChange} required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Account Number</label>
              <input 
                type="text" name="accountNumber" value={user.accountNumber} onChange={handleChange} required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        <button 
          type="submit" disabled={isSaving}
          className={`w-full sm:w-auto px-8 text-white font-bold py-3 rounded-lg transition ${
            isSaving ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 shadow-sm"
          }`}
        >
          {isSaving ? "Saving changes..." : "Save Changes"}
        </button>
      </form>
    </div>
  );
}