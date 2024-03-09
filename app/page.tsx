import fs from "fs";
import Link from "next/link";
import getProperName from "@/services/getProperName";

export default function Home() {
    const files = fs.readdirSync("./markdown");

    return (
        <main>
            <h1>Choose A Topic</h1>
            <div className="flex flex-col">
                {files.map((file, i) => {
                    const fileName = file.replace(".md", "");
                    const title = getProperName(fileName);
                    return (
                        <Link key={i} href={`/${title}`}>
                            {title}
                        </Link>
                    );
                })}
            </div>
        </main>
    );
}
