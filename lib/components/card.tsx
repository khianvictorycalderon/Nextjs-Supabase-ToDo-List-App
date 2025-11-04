'use client';

export const PendingCard = ({taskName}: CardProps) => (
    <div className="bg-gray-600 p-4 rounded-md shadow">
        <p className="text-xl">{taskName}</p>
        <div className="flex w-full mt-4 gap-4">
            <button className="flex-1 bg-blue-600 py-2 rounded-lg cursor-pointer transition duration-300 hover:bg-blue-500">Mark as Done</button>
            <button className="flex-1 bg-red-600 py-2 rounded-lg cursor-pointer transition duration-300 hover:bg-red-500">Delete</button>
        </div>
    </div>
);

export const FinishedCard = ({taskName}: CardProps) => (
    <div className="bg-gray-600 p-4 rounded-md shadow">
        <p className="text-xl">{taskName}</p>
        <div className="flex w-full mt-4 gap-4">
            <button className="flex-1 bg-green-600 py-2 rounded-lg cursor-pointer transition duration-300 hover:bg-green-500">Mark as Pending</button>
            <button className="flex-1 bg-red-600 py-2 rounded-lg cursor-pointer transition duration-300 hover:bg-red-500">Delete</button>
        </div>
    </div>
);