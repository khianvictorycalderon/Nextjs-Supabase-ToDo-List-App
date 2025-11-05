import { supabase } from "@/utils/supabase/server";
import { NextRequest, NextResponse } from "next/server";

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
            status: "completed"
        },
    ]

    return NextResponse.json({
        message: "Successfully retrieved!",
        tasks: tasks
    }, {
        status: 200
    })
}

export async function POST(req: NextRequest) {
    // Task name
    const { taskInputName } = await req.json();

    // Validate input
    if (!taskInputName?.trim()) {
        return NextResponse.json(
            { message: "Task name cannot be empty!" }, 
            { status: 400 }
        );
    }

    // Inserting into the actual database
    const { error } = await supabase
        .from("tasks")
        .insert([
            {
                task_name: taskInputName
            }
        ])
        .select();

    // Returns error message if there is any
    if (error) {
        console.log(`Unable to insert data: ${error.message}`);
        return NextResponse.json(
            { message: error.message },
            { status: 500 }
        );
    }

    // If everything goes well
    return NextResponse.json(
        { message: `New task ${taskInputName} successfully created!` },
        { status: 200 }
    );

}