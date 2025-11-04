import { NextResponse } from "next/server";

// Getting all the tasks from database
export async function GET() {

    // Pretend that this is fetched from database
    const tasks: TasksProps[] = [
        {
            taskId: "1001",
            taskName: "Wash Clothes",
            status: "pending"
        },
        {
            taskId: "1002",
            taskName: "Sleep",
            status: "pending"
        },
        {
            taskId: "1003",
            taskName: "Feed the Dog",
            status: "done"
        },
    ]

    return NextResponse.json({
        message: "Successfully retrieved!",
        tasks: tasks
    }, {
        status: 200
    })
}