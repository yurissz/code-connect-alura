'use client' // Error boundaries must be Client Components

import { useEffect } from 'react'

export default function Error({
    error
}: {
    error: Error & { digest?: string }
}) {

    useEffect(() => {
        console.error(error)
    }, [error])


    return (
        <div>
            <h2 style={{ color: "white" }}>Something went wrong!</h2>
        </div>
    )
}