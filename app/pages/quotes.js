import React, { useState } from "react";
import { quotes } from "../data/content";

export default function Quotes() {
  const [currentQuote, setCurrentQuote] = useState(quotes[Math.floor(Math.random() * quotes.length)]);

  const refreshQuote = () => {
    setCurrentQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Tail Wagging Wisdom</h1>
      <p className="mb-4">{currentQuote}</p>
      <button onClick={refreshQuote} className="bg-green-300 p-2 rounded w-full">Show Another Quote</button>
    </div>
  );
}
