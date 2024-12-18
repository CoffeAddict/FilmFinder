'use client';

import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
        fetch('/api/search')
            .then(res => res.json())
            .then(data => console.log(data))
    }, []);

    return <h1 className="text-3xl">
        {/* TODO: Create hero component with search funciont */}
        {/* TODO Create popeular movies list */}
        {/* TODO Create account form */}
        {/* TODO Create movie details modal */}
    </h1>;
}
