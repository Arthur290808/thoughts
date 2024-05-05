import React from "react";
import { SheetDemo } from "./Sheet";

export default function Navbar() {
    return (
        <nav className="bg-slate-400 p-4 flex flex-col">
            <div className="container mx-auto flex justify-around items-center">
                <h1 className="text-2xl text-white font-semibold">Thoughts</h1>
                <SheetDemo />
            </div>
        </nav>
    )
}