import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export function middleware(request:NextRequest){
    console.log("Hello World From Middleware");
    const auth =request.headers.get('authorization');
    console.log(auth);

    if(!auth || auth !== 'ali'){
        return NextResponse.redirect(new URL('/unauthorized?msg=You are not authorized to access this page', request.url));
    }

    NextResponse.next();
}

export const config = {
    matcher: '/api/test',
  }