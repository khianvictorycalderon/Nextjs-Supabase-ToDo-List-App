'use client';

import axios from "axios";
import { useState } from "react";

const handleUpdateStatus = async (
    taskId: string, status: "completed" | "pending", 
    onActionComplete: () => void,
    setIsLoading: (val: boolean) => void
) => {
    setIsLoading(true);
    try {
        await axios.patch(`/api/task/${taskId}`, { status });
        console.log(`Task with ID ${taskId}, successfully marked as ${status}!`);
        onActionComplete();
    } catch (err: any) {
        alert(`Unable to marked task with ID ${taskId} to ${status}: ${err.message}`);
    } finally {
        setIsLoading(false);
    }
}

const handleDeleteTask = async (
    taskId: string, 
    onActionComplete: () => void,
    setIsLoading: (val: boolean) => void
) => {
    setIsLoading(true);
    try {
        await axios.delete(`/api/task/${taskId}`);
        console.log(`Task with ID ${taskId}, successfully deleted!`);
        onActionComplete();
    } catch (err: any) {
        alert(`Unable to delete task with ID ${taskId}: ${err.message}`);
    } finally {
        setIsLoading(false);
    }
}

export const PendingCard = ({taskId, taskName, onActionComplete}: CardProps) => {
    
    const [isMarking, setIsMarking] = useState<boolean>(false);
    
    return (
        <div className="bg-gray-600 p-4 rounded-md shadow">
            <p className="text-xl font-semibold tracking-wider">{taskName}</p>
            <div className="flex w-full mt-4 gap-4">
                <button disabled={isMarking} onClick={() => handleUpdateStatus(taskId, "completed", onActionComplete, setIsMarking)} className="flex-1 bg-blue-600 hover:bg-blue-500 disabled:bg-gray-400 disabled:text-gray-800 cursor-pointer disabled:cursor-not-allowed py-2 rounded-lg transition duration-300">Mark as Done</button>
                <button disabled={isMarking} onClick={() => handleDeleteTask(taskId, onActionComplete, setIsMarking)} className="flex-1 bg-red-600 hover:bg-red-500 disabled:bg-gray-400 disabled:text-gray-800 cursor-pointer disabled:cursor-not-allowed py-2 rounded-lg transition duration-300">Delete</button>
            </div>
        </div>
    );
}

export const CompletedCard = ({taskId, taskName, onActionComplete}: CardProps) => {
    
    const [isDeleting, setIsDeleting] = useState<boolean>(false);
    
    return (
        <div className="bg-gray-800 p-4 rounded-md shadow">
            <p className="text-xl font-semibold tracking-wider">{taskName}</p>
            <div className="flex w-full mt-4 gap-4">
                <button disabled={isDeleting} onClick={() => handleUpdateStatus(taskId, "pending", onActionComplete, setIsDeleting)} className="flex-1 bg-green-600 hover:bg-green-500 disabled:bg-gray-400 disabled:text-gray-800 cursor-pointer disabled:cursor-not-allowed py-2 rounded-lg transition duration-300">Mark as Pending</button>
                <button disabled={isDeleting} onClick={() => handleDeleteTask(taskId, onActionComplete, setIsDeleting)} className="flex-1 bg-red-600 hover:bg-red-500 disabled:bg-gray-400 disabled:text-gray-800 cursor-pointer disabled:cursor-not-allowed py-2 rounded-lg transition duration-300">Delete</button>
            </div>
        </div>
    );
}