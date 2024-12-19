import { NextResponse } from "next/server";
import { mockReports } from "../../../lib/data";

export async function GET() {
  try {
    return NextResponse.json(mockReports);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
