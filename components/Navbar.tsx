import Link from "next/link";
import NavbarButtons from "./NavbarButtons";
import { Dispatch, SetStateAction } from "react";

interface NavbarProps {
    cardsOpen?: boolean[];
    setCardsOpen?: Dispatch<SetStateAction<boolean[]>>;
}

export default function Navbar({ cardsOpen, setCardsOpen }: NavbarProps) {
    return (
        <nav className="flex flex-nowrap items-center justify-between max-w-7xl mx-auto px-4 py-2 sticky top-0 bg-neutral-900 w-full">
            <Link href="/" className="font-mono" scroll={false}>
                WebDevStudy
            </Link>
            {cardsOpen && <NavbarButtons setCardsOpen={setCardsOpen!} />}
            <Link href="/" aria-label="Home" title="Home" scroll={false}>
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
        </nav>
    );
}
