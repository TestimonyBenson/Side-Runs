import Link from "next/link";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4">
      <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight text-center">
        Side Runs
      </h1>
      <p className="mt-6 text-xl text-gray-600 text-center max-w-2xl">
        The ultimate marketplace for everyday errands. Post a task or become a runner today.
      </p>
      <div className="mt-10 flex gap-4">
        {/* Replace your existing button with this Link */}
<div className="mt-10 flex gap-4">
  <Link href="/post" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition shadow-sm">
    Post an Errand
  </Link>
  <Link href="/runners" className="bg-white text-gray-900 border border-gray-300 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition shadow-sm">
    Become a Runner
  </Link>
</div>
      </div>
    </div>
  );
}