import Image from "next/image";
import { JSX } from "react/jsx-dev-runtime";

export default function TopNavbar() {
    return (
        <nav className="w-full flex justify-between items-center py-4 px-8   text-white rounded-lg">
            <div className="flex flex-col  p-2 rounded-lg">
                <Image src="/images/logos/logo.svg" alt="Logo" width={200} height={200} priority />
            </div>
            <div className="flex space-x-4 text-lg font-medium px-10">
                <button className="hover:underline hover:underline-offset-4">Contact</button>
            </div>
        </nav>
    )
}