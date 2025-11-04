'use client';

import axios from "axios";

const handleUpdateStatus = async (taskId: string, status: "completed" | "pending", onActionComplete: () => void) => {
    try {
        await axios.patch(`/api/task/${taskId}`, { status });
        console.log(`Task with ID ${taskId}, successfully marked as ${status}!`);
        onActionComplete();
    } catch (err: any) {
        alert(`Unable to marked task with ID ${taskId} to ${status}: ${err.message}`);
    }
}

const handleDeleteTask = async (taskId: string, onActionComplete: () => void) => {
    try {
        await axios.delete(`/api/task/${taskId}`);
        console.log(`Task with ID ${taskId}, successfully deleted!`);
        onActionComplete();
    } catch (err: any) {
        alert(`Unable to delete task with ID ${taskId}: ${err.message}`);
    }
}

export const PendingCard = ({taskId, taskName, onActionComplete}: CardProps) => {
    return (
        <div className="bg-gray-600 p-4 rounded-md shadow">
            <p className="text-xl font-semibold tracking-wider">{taskName}</p>
            <div className="flex w-full mt-4 gap-4">
                <button onClick={() => handleUpdateStatus(taskId, "completed", onActionComplete)} className="flex-1 bg-blue-600 py-2 rounded-lg cursor-pointer transition duration-300 hover:bg-blue-500">Mark as Done</button>
                <button onClick={() => handleDeleteTask(taskId, onActionComplete)} className="flex-1 bg-red-600 py-2 rounded-lg cursor-pointer transition duration-300 hover:bg-red-500">Delete</button>
            </div>
        </div>
    );
}

export const CompletedCard = ({taskId, taskName, onActionComplete}: CardProps) => {
    return (
        <div className="bg-gray-800 p-4 rounded-md shadow">
            <p className="text-xl font-semibold tracking-wider">{taskName}</p>
            <div className="flex w-full mt-4 gap-4">
                <button onClick={() => handleUpdateStatus(taskId, "pending", onActionComplete)} className="flex-1 bg-green-600 py-2 rounded-lg cursor-pointer transition duration-300 hover:bg-green-500">Mark as Pending</button>
                <button onClick={() => handleDeleteTask(taskId, onActionComplete)} className="flex-1 bg-red-600 py-2 rounded-lg cursor-pointer transition duration-300 hover:bg-red-500">Delete</button>
            </div>
        </div>
    );
}