import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="bg-neutral-900 px-6 h-[var(--header-height)] flex items-center self-start w-min md:sticky top-0 z-10">
            <Link href="/" className="font-mono" scroll={false}>
                WebDevStudy
            </Link>
        </nav>
    );
}
