"use client";

import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";

type NavbarDropdownProps = {
    fileNames: string[];
    properNames: string[];
};

function BarsSVG() {
    return (
        <div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
            </svg>
        </div>
    );
}

export default function NavbarDropdown({
    fileNames,
    properNames,
}: NavbarDropdownProps) {
    const pathname = usePathname();

    return (
        <Menu as="div" className="relative [display:inherit]">
            <Menu.Button className="rounded-md hover:bg-neutral-700 transition-colors p-2">
                <BarsSVG />
            </Menu.Button>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute top-9 right-0 mt-2 origin-top-right flex flex-col border border-neutral-700 rounded-md p-1 bg-neutral-900">
                    {fileNames.map((fileName, i) => {
                        return (
                            <Menu.Item key={fileName}>
                                {({ active }) => {
                                    return (
                                        <Link
                                            href={`/${fileName}`}
                                            className={`${
                                                active && "bg-neutral-700"
                                            } rounded-md p-2 font-mono transition-colors ${
                                                pathname === "/" + fileName &&
                                                "bg-neutral-700 pointer-events-none"
                                            }`}
                                        >
                                            {properNames[i]}
                                        </Link>
                                    );
                                }}
                            </Menu.Item>
                        );
                    })}
                </Menu.Items>
            </Transition>
        </Menu>
    );
}
