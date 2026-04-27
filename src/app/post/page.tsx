"use client";

import { useState } from "react";
import Link from "next/link";

export default function PostErrand() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Simulate form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Fake a network delay to make the UI feel real
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <div className="bg-green-100 text-green-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Errand Posted Successfully!</h2>
        <p className="text-gray-600 mb-8">Runners in your area have been notified and will start bidding soon.</p>
        <Link href="/errands" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
          View Errands Feed
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Post a New Errand</h1>
      <p className="text-gray-600 mb-8">Fill out the details below to find a runner.</p>

      <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 shadow-sm space-y-6">
        
        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Task Title</label>
          <input 
            type="text" 
            required 
            placeholder="e.g., Deliver printouts to the Engineering Faculty" 
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Details</label>
          <textarea 
            required 
            rows={4} 
            placeholder="Describe exactly what needs to be done..." 
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Location */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
            <input 
              type="text" 
              required 
              placeholder="e.g., Main Campus / Admin Block" 
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Price */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Willing to Pay (₦)</label>
            <input 
              type="number" 
              required 
              placeholder="2500" 
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Urgency */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Urgency</label>
          <select className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
            <option>Low (Anytime today)</option>
            <option>Medium (Within a few hours)</option>
            <option>High (ASAP)</option>
          </select>
        </div>

        {/* Submit Button */}
        <button 
          type="submit" 
          disabled={isSubmitting}
          className={`w-full text-white font-bold py-3 rounded-lg transition ${
            isSubmitting ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 shadow-sm"
          }`}
        >
          {isSubmitting ? "Posting..." : "Post Errand"}
        </button>
      </form>
    </div>
  );
}