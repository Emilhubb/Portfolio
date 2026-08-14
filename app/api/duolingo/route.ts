import { NextResponse } from "next/server";
export async function GET() {
  try {
    const response = await fetch(
      "https://android-api-cf.duolingo.com/2017-06-30/users?username=emilkaziml",
      { next: { revalidate: 3600 } },
    );
    if (!response.ok) {
      throw new Error(`Duolingo API status: ${response.status}`);
    }
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Duolingo API fetch error:", error);
    return NextResponse.json(
      { error: "Failed to fetch Duolingo data" },
      { status: 500 },
    );
  }
}

