import { NextResponse } from "next/server";
import { getNotionHeaders } from "@/lib/notion";

export async function GET() {
  try {
    const res = await fetch("https://api.notion.com/v1/users/me", {
      method: "GET",
      headers: getNotionHeaders(),
      cache: "no-store",
    });

    const data = await res.json();

    return NextResponse.json({
      ok: res.ok,
      status: res.status,
      data,
    });
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}
