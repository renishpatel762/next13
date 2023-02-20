"use client"
export default function Error({ error, reset }) {
    return (
        <>
            <h1>Error Loading</h1>
            <button onClick={() => reset()}>Retry</button>
        </>
    )
}