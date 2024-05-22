import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import getMarkdownFileNames from "@/services/getMarkdownFileNames";
import NavbarDropdown from "@/components/NavbarDropdown";
import getProperName from "@/services/getProperName";

export const metadata: Metadata = {
    title: "WebDevStudy",
    description: "Technical questions for web development topics",
    authors: [{ name: "Herman Cai", url: "hermancai.dev" }],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const fileNames = getMarkdownFileNames();
    const properNames = fileNames.map((fileName) => getProperName(fileName));

    return (
        <html lang="en">
            <body className="bg-neutral-900 text-neutral-200 flex flex-col min-h-screen">
                <div className="flex flex-nowrap items-center justify-between max-w-7xl mx-auto px-4 py-2 sticky top-0 bg-neutral-900 w-full">
                    <Link href="/" className="font-mono">
                        WebDevStudy
                    </Link>
                    <NavbarDropdown
                        fileNames={fileNames}
                        properNames={properNames}
                    />
                </div>
                <div className="flex flex-col p-4 grow">{children}</div>
            </body>
        </html>
    );
}
