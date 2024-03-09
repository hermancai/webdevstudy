import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "WebDevStudy",
    description: "Technical questions for web development topics",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
