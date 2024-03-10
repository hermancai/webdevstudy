"use client";

import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
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
    return (
        <Menu as="div" className="relative">
            <Menu.Button>
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
                <Menu.Items className="absolute right-0 mt-2 origin-top-right flex flex-col">
                    {fileNames.map((fileName, i) => {
                        return (
                            <Menu.Item key={fileName}>
                                {({ active }) => {
                                    return (
                                        <Link href={`/${fileName}`}>
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
