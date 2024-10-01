import { NextRequest, NextResponse } from "next/server";

export function middleware(request:NextRequest){
    console.log("Hello World From Middleware");
    NextResponse.next();
}

export const config = {
    matcher: '/api/data',
  }