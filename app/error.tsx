"use client";

// This page should never show because currently the whole site is generated at build time.

import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function ErrorPage() {
    return (
        <>
            <Navbar />
            <div className="max-w-6xl mx-auto flex flex-col gap-4 items-center">
                <h1 className="text-3xl">Something went wrong!</h1>
                <Link
                    href="/"
                    className="py-2 px-4 rounded bg-neutral-800 hover:bg-neutral-700 transition-colors w-min whitespace-nowrap"
                    scroll={false}
                >
                    Home Page
                </Link>
            </div>
        </>
    );
}
