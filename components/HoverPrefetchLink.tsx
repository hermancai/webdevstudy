"use client";

import Link from "next/link";
import { useState } from "react";

interface HoverPrefetchLinkProps {
    href: string;
    title: string;
}

export default function HoverPrefetchLink({
    href,
    title,
}: HoverPrefetchLinkProps) {
    const [active, setActive] = useState(false);

    return (
        <Link
            href={href}
            prefetch={active ? null : false}
            onMouseEnter={() => setActive(true)}
            className="bg-neutral-800 rounded-md p-2 text-center font-mono transition-colors hover:bg-neutral-700"
        >
            {title}
        </Link>
    );
}
