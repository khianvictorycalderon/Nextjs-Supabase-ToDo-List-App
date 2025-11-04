'use client';

const handleMarkAsDone = async (taskId: string) => {
}

const handleMarkAsPending = async (taskId: string) => {
}

const handleDeleteTask = async (taskId: string) => {
}

export const PendingCard = ({taskId, taskName}: CardProps) => {
    return (
        <div className="bg-gray-600 p-4 rounded-md shadow">
            <p className="text-xl font-semibold tracking-wider">{taskName}</p>
            <div className="flex w-full mt-4 gap-4">
                <button onClick={() => handleMarkAsDone(taskId)} className="flex-1 bg-blue-600 py-2 rounded-lg cursor-pointer transition duration-300 hover:bg-blue-500">Mark as Done</button>
                <button onClick={() => handleDeleteTask(taskId)} className="flex-1 bg-red-600 py-2 rounded-lg cursor-pointer transition duration-300 hover:bg-red-500">Delete</button>
            </div>
        </div>
    );
}

export const FinishedCard = ({taskId, taskName}: CardProps) => {
    return (
        <div className="bg-gray-800 p-4 rounded-md shadow">
            <p className="text-xl font-semibold tracking-wider">{taskName}</p>
            <div className="flex w-full mt-4 gap-4">
                <button onClick={() => handleMarkAsPending(taskId)} className="flex-1 bg-green-600 py-2 rounded-lg cursor-pointer transition duration-300 hover:bg-green-500">Mark as Pending</button>
                <button onClick={() => handleDeleteTask(taskId)} className="flex-1 bg-red-600 py-2 rounded-lg cursor-pointer transition duration-300 hover:bg-red-500">Delete</button>
            </div>
        </div>
    );
}