import Link from "next/link";

// In a real app, we would use the `params.id` to fetch the exact errand from the database.
// For now, we mock the data to build the UI.
export default function ErrandDetails({ params }: any) {
  const errand = {
    id: params.id,
    title: "Deliver printouts to the Engineering Faculty",
    description: "I need someone to go to the cybercafe near the main gate, pick up 50 pages of my final year project documentation, and bring them directly to my department block. I have already paid for the printing, you just need to collect it and hand it over to me before my 2 PM defense. Please handle the documents carefully!",
    location: "Main Campus / Engineering Block",
    price: "2,500",
    urgency: "High",
    postedBy: "Sarah M.",
    createdAt: "2 hours ago",
    status: "Open"
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      {/* Back Button */}
      <Link href="/errands" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 mb-6 transition">
        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
        Back to Errands
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Main Details */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight">
                {errand.title}
              </h1>
              <span className="bg-red-100 text-red-700 text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap ml-4">
                {errand.urgency} Urgency
              </span>
            </div>
            
            <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-8 border-b border-gray-100 pb-6">
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                {errand.location}
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                Posted {errand.createdAt}
              </div>
            </div>

            <h2 className="text-lg font-bold text-gray-900 mb-3">Task Description</h2>
            <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
              {errand.description}
            </p>
          </div>
        </div>

        {/* Right Column: Action Panel */}
        <div className="lg:col-span-1">
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm sticky top-24">
            <div className="mb-6">
              <p className="text-sm font-medium text-gray-500 mb-1">Task Reward</p>
              <p className="text-4xl font-extrabold text-blue-600">₦{errand.price}</p>
            </div>

            <div className="space-y-3">
              <button className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition shadow-sm">
                Accept Errand
              </button>
              <button className="w-full bg-white border border-gray-300 text-gray-900 font-bold py-3 rounded-lg hover:bg-gray-50 transition shadow-sm flex justify-center items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                Message Poster
              </button>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-100">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold">
                  {errand.postedBy.charAt(0)}
                </div>
                <div className="ml-3">
                  <p className="text-sm font-bold text-gray-900">{errand.postedBy}</p>
                  <p className="text-xs text-gray-500">Verified User</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}