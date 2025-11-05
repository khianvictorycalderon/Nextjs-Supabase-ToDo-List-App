import { supabase } from "@/utils/supabase/server";
import { NextRequest, NextResponse } from "next/server";

// For marking if the task is done or pending
// By default, a task is marked pending when created
export async function PATCH(
    req: NextRequest, 
    {params}: {params: Promise<{id: string}>} 
) {
    // Getting the ID and status type of what we want to mark  
    const { id: taskId } = await params;
    const { status: changeType } = await req.json();

    // Verify only 2 types of status
    if (!(changeType == "pending" || changeType == "completed")) {
        return NextResponse.json(
            { message: "Invalid request type!" },
            { status: 400 }
        );
    }

    // We update in the database
    const { error } = await supabase
        .from("tasks")
        .update({ status: changeType })
        .eq("task_id", String(taskId))
        .select();

    // State if there is an error
    if (error) {
        console.log(`Unable to update task: ${error.message}`);
        return NextResponse.json(
            { message: `Unable to update task: ${error.message}`},
            { status: 500 }
        );
    }

    // If everything goes well
    return NextResponse.json(
        { message: `Task with ID ${taskId} successfully marked as ${changeType}!`},
        { status: 200 }
    );
}

// For deleting a task
export async function DELETE(
    _req: NextRequest, 
    {params}: {params: Promise<{id: string}>} 
) {
    // Get the ID of the task we want to delete
    const { id: taskId } = await params;

    // Now we delete
    const { error } = await supabase
        .from("tasks")
        .delete()
        .eq("task_id", taskId);

    // State if there is an error
    if (error) {
        console.log(`Unable to delete task: ${error.message}`);
        return NextResponse.json(
            { message: `Unable to delete task: ${error.message}` },
            { status: 500 }
        );
    }

    // If all goes well
    return NextResponse.json(
        { message: "Successfully deleted a task!" },
        { status: 200 }
    )
}