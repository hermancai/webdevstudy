import "./globals.css";
import type { Metadata, Viewport } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
    title: "WebDevStudy",
    description:
        "A compilation of common web development topics and Leetcode for technical interviews",
    authors: [{ name: "Herman Cai", url: "hermancai.dev" }],
    robots: "follow, index",
    keywords: ["web development", "technical", "interview"],
    manifest: "manifest.json",
    icons: {
        icon: "/favicon.ico",
    },
    appleWebApp: {
        capable: true,
        statusBarStyle: "black-translucent",
    },
    verification: {
        google: "k9yNjKCp5BuiSVXrJIfoJxbK7bVxTpQcx1MT3jwryK8",
    },
};

// viewportFit cover looks clunky on mobile landscape view
export const viewport: Viewport = {
    themeColor: "#0a0a0a",
    // width: "device-width",
    // initialScale: 1,
    // viewportFit: "cover",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="max-w-screen-2xl w-full bg-neutral-900 text-neutral-200 flex flex-col items-center min-h-screen mx-auto">
                <main className="w-full">
                    <Navbar />
                    {children}
                </main>
            </body>
            <GoogleAnalytics gaId="G-WQS7VC7B13" />
        </html>
    );
}
