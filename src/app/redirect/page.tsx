"use client"
import { useSearchParams } from "next/navigation";

export default function RedirectPage() {
    const searchParams=useSearchParams();
    const msg=searchParams.get("msg");
    return (
      <div>
        <h1>Redirect Page</h1>
        <p>{msg}</p>
      </div>
    );
}