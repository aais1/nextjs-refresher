"use server"
import { redirect } from "next/navigation";

export async function ServerAction(){
    console.log("Hello World From A Server Action");
}

export async function redirectUser(url:string){
    console.log("Redirecting using redirect function"); 
    redirect(url);
}