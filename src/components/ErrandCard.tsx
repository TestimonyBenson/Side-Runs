import Link from "next/link";

export default function ErrandCard({ id, title, description, location, price, urgency }: any) {
  const urgencyColor = 
    urgency === "High" ? "bg-red-100 text-red-700" :
    urgency === "Medium" ? "bg-yellow-100 text-yellow-700" :
    "bg-green-100 text-green-700";

  return (
    <Link href={`/errands/${id}`} className="block group h-full">
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm group-hover:shadow-md group-hover:border-blue-300 transition flex flex-col justify-between h-full cursor-pointer">
        <div>
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-lg font-bold text-gray-900 leading-tight group-hover:text-blue-600 transition">{title}</h3>
            <span className={`text-xs font-bold px-3 py-1 rounded-full ${urgencyColor}`}>
              {urgency}
            </span>
          </div>
          <p className="text-gray-600 text-sm mb-4 line-clamp-3">
            {description}
          </p>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
          <div className="flex items-center text-gray-500 text-sm">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
            {location}
          </div>
          <span className="text-lg font-extrabold text-blue-600">
            ₦{price}
          </span>
        </div>
      </div>
    </Link>
  );
}