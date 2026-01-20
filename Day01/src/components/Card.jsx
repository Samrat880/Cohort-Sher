import React from "react";
import Button from "./Button";

function Card({ User, age }) {
  return (
    <div className="bg-black h-72 w-80 rounded-2xl px-6 py-8 text-center shadow-2xl shadow-red-500/40 flex flex-col justify-center items-center gap-4 transition-all duration-300 hover:scale-105 hover:shadow-red-500/80">
      <h2 className="text-red-400 text-2xl font-semibold tracking-wide">
        {User}
      </h2>
      <h1 className="text-4xl font-bold text-white">{age}</h1>
      <Button />
    </div>
  );
}

export default Card;
