import Link from "next/link";

export default function RunnersLanding() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
          Earn on Your Own Schedule
        </h1>
        <p className="text-xl text-gray-600">
          Join Side Runs to help people in your area get things done. You choose the tasks, you set your hours, and you get paid fast.
        </p>
        <div className="mt-8">
          <Link href="/signup" className="bg-blue-600 text-white px-10 py-4 rounded-lg text-lg font-bold hover:bg-blue-700 transition shadow-md inline-block">
            Apply to be a Runner
          </Link>
        </div>
      </div>

      {/* Perks Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white border border-gray-200 rounded-xl p-8 text-center shadow-sm">
          <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Flexible Hours</h3>
          <p className="text-gray-600">Work when you want. Pick up a quick errand between classes or hustle all weekend.</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-8 text-center shadow-sm">
          <div className="bg-green-100 text-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Fast Payouts</h3>
          <p className="text-gray-600">No waiting around for a paycheck. Get your funds securely processed as soon as the task is verified.</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-8 text-center shadow-sm">
          <div className="bg-purple-100 text-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Safe & Secure</h3>
          <p className="text-gray-600">All users are verified. Payment is held in escrow before you even start the errand, guaranteeing you get paid.</p>
        </div>
      </div>
    </div>
  );
}