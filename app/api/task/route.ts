import { TasksProps } from "@/lib/types";
import { supabase } from "@/utils/supabase/server";
import { NextRequest, NextResponse } from "next/server";

// Getting all the tasks from database
export async function GET() {

    // Fetch from database
    const { data, error } = await supabase
        .from("tasks")
        .select("*")
        .order("task_name", {
            ascending: true
        }) // Arranges alphabetically

    // If there are errors
    if (error) {
        return NextResponse.json(
            { message: `Unable to fetch tasks: ${error.message}` },
            { status: 500 }
        );
    }

    // Map each values
    const tasks: TasksProps[] = data.map(item => ({
        taskId: item.task_id,
        taskName: item.task_name,
        status: item.status
    }))

    return NextResponse.json(
        {
            message: "Successfully retrieved!", tasks
        }, 
        {
            status: 200
        }
    );
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