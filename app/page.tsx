"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import content from "../src/data/content";

const { exercises, quotes } = content;

const dogImages = [
  "dog.jpg",
  "dog2.jpg",
  "dog3.jpg",
];

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dogName, setDogName] = useState("");
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    if (dogName) setGreeting(`Ready to laugh with ${dogName} today?`);
  }, [dogName]);

  const handleSignup = async () => {
    try {
      // Simple validation
      if (!email || !password || !dogName) {
        alert("Please fill in all fields");
        return;
      }

      const { saveUserData } = await import("../src/lib/airtable");
      await saveUserData({ email, dogName, journalEntry: "" });
      alert("Signed up successfully!");
      setGreeting(`Ready to laugh with ${dogName} today?`);
    } catch (error: any) {
      alert(`Signup error: ${error.message}`);
    }
  };

  const handleLogin = async () => {
    try {
      // Simple validation - just check if fields are filled
      if (!email || !password) {
        alert("Please fill in email and password");
        return;
      }

      // For now, just set greeting if dog name is provided
      if (dogName) {
        setGreeting(`Ready to laugh with ${dogName} today?`);
        alert("Logged in successfully!");
      } else {
        alert("Please enter your dog's name");
      }
    } catch (error: any) {
      alert(`Login error: ${error.message}`);
    }
  };

  const randomExercise = exercises[Math.floor(Math.random() * exercises.length)];
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Make Your Dog Laugh</h1>
      
      {!greeting && (
        <>
          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 w-full mb-2"
          />
          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-2 w-full mb-2"
          />
          <input
            placeholder="Dog Name"
            value={dogName}
            onChange={(e) => setDogName(e.target.value)}
            className="border p-2 w-full mb-2"
          />
          <button
            onClick={handleSignup}
            className="bg-yellow-300 p-2 rounded w-full mb-2"
          >
            Sign Up
          </button>
          <button
            onClick={handleLogin}
            className="bg-pink-300 p-2 rounded w-full mb-4"
          >
            Login
          </button>
        </>
      )}
      
      {greeting && <h2 className="text-xl mb-2">{greeting}</h2>}
      
      <div className="flex flex-wrap gap-2 mb-4">
        {dogImages.map((img) => (
          <Image
            key={img}
            src={`/images/dogs/${img}`}
            alt={img}
            width={200}
            height={200}
            className="rounded"
          />
        ))}
      </div>
      
      <h2 className="text-lg font-semibold mt-4">Today's Exercise</h2>
      <p>{randomExercise.description}</p>
      
      <h2 className="text-lg font-semibold mt-4">Quote</h2>
      <p>{randomQuote}</p>
    </div>
  );
}
