"use client"
import { useSearchParams } from "next/navigation";
export default function UnauthorizedPage() {
    const searchParams = useSearchParams();
    const msg = searchParams.get("msg");
    return (
        <div>
            <h1>Unauthorized Page</h1>
            <p className="text-red-500 font-bold text-lg">{msg} 😒😠</p>
        </div>
    );
}