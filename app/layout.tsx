import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import getMarkdownFileNames from "@/services/getMarkdownFileNames";
import NavbarDropdown from "@/components/NavbarDropdown";
import getProperName from "@/services/getProperName";

export const metadata: Metadata = {
    title: "WebDevStudy",
    description: "Technical questions for web development topics",
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
            <body>
                <div className="flex flex-nowrap justify-between p-4">
                    <Link href="/">WebDevStudy</Link>
                    <NavbarDropdown
                        fileNames={fileNames}
                        properNames={properNames}
                    />
                </div>
                {children}
            </body>
        </html>
    );
}
