import Link from "next/link";
import Navbar from "./Navbar";

export default function NotFoundPage() {
    return (
        <>
            <Navbar />
            <div className="max-w-6xl mx-auto flex flex-col gap-4 items-center">
                <h1 className="text-3xl">Page Not Found</h1>
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
