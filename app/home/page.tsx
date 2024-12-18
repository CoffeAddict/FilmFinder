'use client';

import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
        fetch('/api/search')
            .then(res => res.json())
            .then(data => console.log(data))
    }, []);

    return <h1 className="text-3xl">this is the homepage</h1>;
}
