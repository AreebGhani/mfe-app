import React from "react";
import "tailwindcss/tailwind.css";

type Props = {
  heading: string;
};

const Header: React.FC<Props> = ({ heading }: Props) => (
  <header className="bg-blue-500 mt-10 p-2 text-3xl mx-auto max-w-6xl">
    <h1 className="text-white text-center">Header Component - {heading}</h1>
  </header>
);

export default Header;
