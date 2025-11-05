import { NextResponse } from "next/server";

export async function GET() {
    const message = process.env.SAMPLE_KEY;

    return NextResponse.json({ message }, { status: 200 });
}