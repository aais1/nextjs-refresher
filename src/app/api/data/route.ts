import { NextRequest , NextResponse } from "next/server";

export function GET(request:NextRequest) {
    const title = request.nextUrl.searchParams.get('title');
    console.log(title)
    if(title){
        return NextResponse.json({ message: `Hello ${title}` });
    }
    return NextResponse.json({ message: "Hello World from data route" });
}