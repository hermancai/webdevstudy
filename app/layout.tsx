import "./globals.css";
import type { Metadata, Viewport } from "next";
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
                <main className="flex flex-col">{children}</main>
                <footer className="mt-auto self-center text-gray-400 text-sm py-4">
                    <p>Content is regularly updated.</p>
                </footer>
            </body>
            <GoogleAnalytics gaId="G-WQS7VC7B13" />
        </html>
    );
}
