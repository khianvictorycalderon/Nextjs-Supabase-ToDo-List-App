import { NextRequest, NextResponse } from "next/server";

// For marking if the task is done or pending
// By default, a task is marked pending when created
export async function PATCH(
    req: NextRequest, 
    {params}: {params: Promise<{id: string}>} 
) {
    const { id: taskId } = await params;
    const changeType = await req.json();
    
    console.log(`Task with ID ${taskId} successfully marked as ${changeType.status}`)

    return NextResponse.json({
        message: "Successfully mocked updated!"
    }, { status: 200 });
}

// For deleting a task
// export async function DELETE(req: NextRequest) {

// }