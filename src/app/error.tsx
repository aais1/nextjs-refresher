"use client";
export default function Error({
    reset,
    error
}: {
    reset: () => void;
    error: Error;
}) {
    return (
        <div>
            <div>Something went wrong: {error.message}</div>
            <button onClick={reset}>Recover</button>
        </div>
    );
}
