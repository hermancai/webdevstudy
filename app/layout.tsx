import "./globals.css";
import type { Metadata, Viewport } from "next";
import Link from "next/link";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
    title: "WebDevStudy",
    description:
        "A compilation of common web development topics and leetcode-style technical interview questions/answers",
    authors: [{ name: "Herman Cai", url: "hermancai.dev" }],
    robots: "follow, index",
    keywords: ["web development", "technical", "interview"],
    manifest: "manifest.json",
};

export const viewport: Viewport = {
    themeColor: "#171717",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="bg-neutral-900 text-neutral-200 flex flex-col min-h-screen">
                <header className="flex flex-nowrap items-center justify-between max-w-7xl mx-auto px-4 py-2 sticky top-0 bg-neutral-900 w-full">
                    <Link href="/" className="font-mono">
                        WebDevStudy
                    </Link>
                    <Link href="/" aria-label="Home">
                        <div className="rounded-md hover:bg-neutral-700 transition-colors p-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                                />
                            </svg>
                        </div>
                    </Link>
                </header>
                <main className="p-4 max-w-6xl mx-auto flex flex-col gap-4 w-full">
                    {children}
                </main>
                <footer className="mt-auto self-center text-gray-400 text-sm py-4">
                    <p>Content is regularly updated.</p>
                </footer>
            </body>
            <GoogleAnalytics gaId="G-WQS7VC7B13" />
        </html>
    );
}
