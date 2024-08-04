import React from "react";
import "tailwindcss/tailwind.css";

type Props = {
  heading: string;
};

const Footer: React.FC<Props> = ({ heading }: Props) => (
  <footer className="bg-blue-500 mt-10 p-2 text-3xl mx-auto max-w-6xl">
    <h1 className="text-white text-center">Footer Component - {heading}</h1>
  </footer>
);

export default Footer;
