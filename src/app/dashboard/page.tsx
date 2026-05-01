"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function Dashboard() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("runner");
  const [balance, setBalance] = useState(12500);
  
  // Runner Tasks State
  const [runnerTasks, setRunnerTasks] = useState([
    { id: 1, title: "Pick up groceries from Ikeja City Mall", status: "In Progress", price: "5,000" },
    { id: 2, title: "Deliver printouts to the Engineering Faculty", status: "Completed & Paid", price: "2,500" }
  ]);

  // Poster Tasks State
  const [posterTasks, setPosterTasks] = useState([
    { id: 101, title: "Stand in line for clearance", description: "I need someone to hold my spot in the admin queue.", location: "Admin Block", price: "3000", status: "Pending Assignment" }
  ]);

  // Modal State for Editing
  const [editingTask, setEditingTask] = useState<any>(null);

  // Guard: Kick unauthorized users back to login
  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.push("/login");
      } else {
        setIsLoading(false);
      }
    };
    
    checkUser();
  }, [router]);

  const handleWithdraw = () => {
    if (balance > 0) {
      alert(`Processing withdrawal of ₦${balance.toLocaleString()} to your saved account...`);
      setBalance(0);
    } else {
      alert("Your balance is currently zero.");
    }
  };

  const handleMarkCompleted = (taskId: number) => {
    setRunnerTasks(runnerTasks.map(task => 
      task.id === taskId ? { ...task, status: "Pending Verification" } : task
    ));
    alert("Task marked as completed! Waiting on poster verification.");
  };

  const openEditModal = (task: any) => {
    setEditingTask({ ...task });
  };

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEditingTask({ ...editingTask, [e.target.name]: e.target.value });
  };

  const handleSaveEdit = (e: React.FormEvent) => {
    e.preventDefault();
    setPosterTasks(posterTasks.map(t => t.id === editingTask.id ? editingTask : t));
    setEditingTask(null);
    alert("Task updated successfully!");
  };

  // Prevent UI flash before redirecting
  if (isLoading) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center">
        <p className="text-xl font-bold text-gray-500 animate-pulse">Loading Dashboard...</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      {/* Header & Stats */}
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Welcome back, Testimony!</h1>
        <p className="text-gray-600">Here is what is happening with your errands today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <p className="text-sm font-medium text-gray-500 mb-1">Available Balance</p>
          <p className="text-3xl font-extrabold text-blue-600 mb-2">₦{balance.toLocaleString()}</p>
          <button onClick={handleWithdraw} className="text-sm font-semibold text-blue-600 hover:text-blue-800 transition">
            Withdraw Funds &rarr;
          </button>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <p className="text-sm font-medium text-gray-500 mb-1">Active Runs</p>
          <p className="text-3xl font-extrabold text-gray-900">{runnerTasks.filter(t => t.status === "In Progress").length}</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <p className="text-sm font-medium text-gray-500 mb-1">Tasks Posted</p>
          <p className="text-3xl font-extrabold text-gray-900">{posterTasks.length}</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 mb-8">
        <nav className="-mb-px flex space-x-8 overflow-x-auto">
          <button
            onClick={() => setActiveTab("runner")}
            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition ${activeTab === "runner" ? "border-blue-600 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700"}`}
          >
            My Accepted Runs
          </button>
          <button
            onClick={() => setActiveTab("poster")}
            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition ${activeTab === "poster" ? "border-blue-600 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700"}`}
          >
            My Posted Errands
          </button>
        </nav>
      </div>

      {/* Content Area */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
        {activeTab === "runner" ? (
          <ul className="divide-y divide-gray-200">
            {runnerTasks.map((task) => (
              <li key={task.id} className="p-6 hover:bg-gray-50 transition">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{task.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">
                      Status: <span className={`font-semibold ${task.status.includes('Completed') ? 'text-green-600' : task.status.includes('Verification') ? 'text-blue-600' : 'text-yellow-600'}`}>{task.status}</span>
                    </p>
                  </div>
                  <div className="text-left sm:text-right">
                    <p className="text-lg font-extrabold text-blue-600">₦{task.price}</p>
                    {task.status === "In Progress" && (
                      <button onClick={() => handleMarkCompleted(task.id)} className="mt-2 text-sm bg-gray-100 text-gray-700 px-3 py-1.5 rounded-md hover:bg-gray-200 font-medium transition">
                        Mark Completed
                      </button>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <ul className="divide-y divide-gray-200">
            {posterTasks.map((task) => (
              <li key={task.id} className="p-6 hover:bg-gray-50 transition">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{task.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">Runner: <span className="font-semibold text-gray-900">{task.status}</span></p>
                  </div>
                  <div className="text-left sm:text-right flex flex-col sm:items-end">
                    <p className="text-lg font-extrabold text-gray-900 mb-2">₦{Number(task.price).toLocaleString()}</p>
                    <button onClick={() => openEditModal(task)} className="text-sm bg-blue-50 text-blue-700 px-4 py-1.5 rounded-md hover:bg-blue-100 font-medium transition border border-blue-200">
                      Edit Task
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* EDIT TASK MODAL OVERLAY */}
      {editingTask && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-lg p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Edit Errand</h2>
              <button onClick={() => setEditingTask(null)} className="text-gray-400 hover:text-gray-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            </div>

            <form onSubmit={handleSaveEdit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                <input type="text" name="title" value={editingTask.title} onChange={handleEditChange} required className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                <input type="text" name="location" value={editingTask.location} onChange={handleEditChange} required className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Price (₦)</label>
                <input type="number" name="price" value={editingTask.price} onChange={handleEditChange} required className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea name="description" value={editingTask.description} onChange={handleEditChange} required rows={3} className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"></textarea>
              </div>
              
              <div className="flex justify-end space-x-3 mt-6">
                <button type="button" onClick={() => setEditingTask(null)} className="px-5 py-2 text-gray-700 font-medium hover:bg-gray-100 rounded-lg transition">
                  Cancel
                </button>
                <button type="submit" className="px-5 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition shadow-sm">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}