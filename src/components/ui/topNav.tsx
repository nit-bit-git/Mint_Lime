import Image from "next/image";
import { JSX } from "react/jsx-dev-runtime";

export default function TopNavbar() {
    return (
        <nav className="w-full flex justify-between items-center py-4 px-8 bg-gray-800 text-white rounded-lg">
            <div className="flex flex-col text-right">
            <div className="text-lg font-bold">Mintlime</div>
            <div className="text-lg font-bold text-right">Studio</div>
            </div>
            <div className="space-x-4">
                <a href="#" className="hover:underline">Home</a>
                <a href="#" className="hover:underline">About</a>
                <a href="#" className="hover:underline">Contact</a>
            </div>
        </nav>
    )
}