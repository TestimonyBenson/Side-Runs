import ErrandCard from "@/components/ErrandCard";

export default function ErrandsFeed() {
  // Mock data to visualize the layout before we connect a database
  const mockErrands = [
    {
      id: 1,
      title: "Deliver printouts to the Engineering Faculty",
      description: "Need someone to pick up 50 pages of project documentation from the cybercafe and bring them to my department ASAP.",
      location: "Campus",
      price: "2,500",
      urgency: "High"
    },
    {
      id: 2,
      title: "Pick up groceries from Ikeja City Mall",
      description: "Standard grocery run. I have the list ready, just need someone to pick up the items and deliver them to my off-campus hostel.",
      location: "Ikeja",
      price: "5,000",
      urgency: "Medium"
    },
    {
      id: 3,
      title: "Stand in line for clearance",
      description: "I have a class clash. Need a runner to hold my spot in the administrative queue for about an hour.",
      location: "Admin Block",
      price: "3,000",
      urgency: "Low"
    },
    {
      id: 4,
      title: "Drop off a package at the terminal",
      description: "Take a small, sealed box to the bus terminal for interstate dispatch. Needs to be there before the 4 PM bus leaves.",
      location: "Bus Terminal",
      price: "4,500",
      urgency: "High"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900">Available Errands</h1>
          <p className="mt-2 text-gray-600">Browse tasks, accept jobs, and get paid.</p>
        </div>
        
        {/* Simple filter dropdown placeholder */}
        <select className="bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>Sort by: Newest</option>
          <option>Sort by: Highest Pay</option>
          <option>Sort by: Urgency</option>
        </select>
      </div>

      {/* The Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockErrands.map((errand) => (
          <ErrandCard 
            key={errand.id}
            title={errand.title}
            description={errand.description}
            location={errand.location}
            price={errand.price}
            urgency={errand.urgency}
          />
        ))}
      </div>
    </div>
  );
}