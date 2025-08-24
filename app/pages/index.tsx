import React, { useState, useEffect } from "react";
import Image from "next/image"; // Use Next.js Image
import { exercises, quotes } from "../data/content";
import { auth } from "../firebase";
import { saveUserData } from "../airtable";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

// Array of your dog image filenames in /public/images/dogs
const dogImages = [
  "dog1.jpg",
  "dog2.jpg",
  "dog3.jpg",
  // add all your images here
];

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dogName, setDogName] = useState("");
  const [journal, setJournal] = useState("");
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    if(dogName) setGreeting(`Ready to laugh with ${dogName} today?`);
  }, [dogName]);

  const handleSignup = async () => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await saveUserData({ email, dogName, journalEntry: "" });
    alert("Signed up!");
  };

  const handleLogin = async () => {
    await signInWithEmailAndPassword(auth, email, password);
    alert("Logged in!");
  };

  const randomExercise = exercises[Math.floor(Math.random() * exercises.length)];
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Make Your Dog Laugh</h1>

      {!greeting && (
        <>
          <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="border p-2 w-full mb-2" />
          <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} className="border p-2 w-full mb-2" />
          <input placeholder="Dog Name" value={dogName} onChange={e => setDogName(e.target.value)} className="border p-2 w-full mb-2" />
          <button onClick={handleSignup} className="bg-yellow-300 p-2 rounded w-full mb-2">Sign Up</button>
          <button onClick={handleLogin} className="bg-pink-300 p-2 rounded w-full mb-4">Login</button>
        </>
      )}

      {greeting && <h2 className="text-xl mb-2">{greeting}</h2>}

      {/* Render all dog images */}
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
