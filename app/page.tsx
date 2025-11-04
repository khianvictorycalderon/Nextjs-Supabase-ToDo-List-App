'use client';

import { CompletedCard, PendingCard } from "@/lib/components/card";
import axios from "axios";
import { useEffect, useState } from "react";

export default function App() {

  // Set empty array first
  const [tasks, setTasks] = useState<TasksProps[]>([]);
  const [taskInputName, setTaskInputName] = useState<string>("");
  
  // Fething from back-end
  useEffect(() => {
    axios.get("api/task").then(res => setTasks(res.data.tasks));
  },[]);

  const handleAddTask = (e: React.FormEvent<HTMLFormElement>, taskName: string) => {
    e.preventDefault();
  }

  return (
    <div className="min-h-screen bg-red-900 flex flex-col">

      {/* Add task section */}
      <div className="bg-gray-900 text-white p-4">
        <h1 className="text-4xl font-bold text-center pt-4">ToDo List App</h1>
        <h2 className="text-2xl italic text-center pb-4">(Next.js + Supabase)</h2>
        <form onSubmit={(e) => handleAddTask(e, taskInputName)} className="my-4 justify-center items-center flex flex-col lg:flex-row gap-2 lg:gap-6">
          <label htmlFor="task-name-input" className="text-lg font-semibold">Task:</label>
          <input onChange={(e) => setTaskInputName(e.target.value)} name="task-name-input" className="bg-gray-50 text-lg p-1 rounded-md w-full lg:w-[30%] outline-0 focus:ring-blue-600 focus:ring-2 shadow focus:shadow-2xl text-black" type="text" />
          <input className="font-bold py-2 px-6 cursor-pointer bg-green-600 text-white rounded-md w-full lg:w-auto hover:bg-green-500 transition duration-300" type="submit" value="Add Task"/>
        </form>
      </div>

      <div className="flex flex-col lg:flex-row text-white flex-1 h-full">
        <div className="flex-1/2 bg-gray-800 p-4 text-center">
          <p className="text-lg font-semibold mb-4">Pending Tasks</p>
          <div className="flex flex-col gap-4">
            {tasks.filter(item => item.status == "pending").length > 0 ? (
              <>
                {tasks.filter(item => item.status == "pending").map((item, index) => (
                  <PendingCard
                    key={`${item.taskName}-${index}`}
                    taskId={item.taskId} 
                    taskName={item.taskName}
                    />
                ))}
              </>
            ) : (
              <h2 className="text-lg font-semibold">No pending tasks yet...</h2>
            )}
          </div>
        </div>

        <div className="flex-1/2 bg-gray-700 p-4 text-center">
          <p className="text-lg font-semibold mb-4">Completed Tasks</p>
          <div className="flex flex-col gap-4">
            {tasks.filter(item => item.status == "completed").length > 0 ? (
              <>
                {tasks.filter(item => item.status == "completed").map((item, index) => (
                  <CompletedCard
                    key={`${item.taskName}-${index}`}
                    taskId={item.taskId} 
                    taskName={item.taskName}
                    />
                ))}
              </>
            ) : (
              <h2 className="text-lg font-semibold">No completed tasks yet...</h2>
            )}
          </div>
        </div>
      </div>

    </div>
  )
}