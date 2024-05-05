import React from "react";

interface ThoughtProps {
    name: string;
    thought: string;
}

export default function Thought({name, thought, id}) {
    return (
        <div className="m-2 p-2 bg-white rounded-lg shadow-lg flex flex-col wrapper hover:text-white hover:bg-slate-400 hover:border hover:border-black transition-all thoughthover" key={id}>
            <p className="text-lg font-semibold text-wrap text-green-600">{name}</p>
            <p className="text-sm text-gray-600 text-wrap wrapper">{thought}</p>
        </div>
    )
}