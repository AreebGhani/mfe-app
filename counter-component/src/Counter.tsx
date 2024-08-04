import React from "react";
import "tailwindcss/tailwind.css";

type Props = {
  count: number;
  increment: () => void;
  decrement: () => void;
};

const Counter: React.FC<Props> = ({
  count = 0,
  increment,
  decrement,
}: Props) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="m-6 text-lg text-teal-600">
        Counter: <span className="text-xl text-yellow-600">{count}</span>
      </h1>
      <div className="flex justify-between items-center">
        <button
          className="m-4 px-4 rounded-md shadow-md bg-purple-600 text-white"
          onClick={increment}
        >
          Increment
        </button>
        <button
          className="m-4 px-4 rounded-md shadow-md bg-zinc-600 text-white"
          onClick={decrement}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
