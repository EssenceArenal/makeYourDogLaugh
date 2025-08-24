import React, { useState } from "react";
import { journalPrompt } from "../data/content";
import { saveUserData } from "../airtable";

export default function Journal() {
  const [journal, setJournal] = useState("");
  const [email, setEmail] = useState("");
  const [dogName, setDogName] = useState("");

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">My Dog Made Me Laugh Today</h1>
      <p>{journalPrompt}</p>
      <textarea value={journal} onChange={e => setJournal(e.target.value)} className="border p-2 w-full mb-2" />
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="border p-2 w-full mb-2" />
      <input placeholder="Dog Name" value={dogName} onChange={e => setDogName(e.target.value)} className="border p-2 w-full mb-2" />
      <button onClick={() => saveUserData({ email, dogName, journalEntry: journal })} className="bg-blue-300 p-2 rounded w-full">Save Journal</button>
    </div>
  );
}
