// lib/airtable.ts
import Airtable from "airtable";

if (!process.env.NEXT_PUBLIC_AIRTABLE_API_KEY || !process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID) {
  throw new Error("Missing Airtable environment variables");
}

const base = new Airtable({ apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY }).base(
  process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID
);

export const saveUserData = async (data: { email: string; dogName: string; journalEntry: string }) => {
  try {
    await base("Users").create([
      {
        fields: {
          Email: data.email,
          DogName: data.dogName,
          Journal: data.journalEntry,
        },
      },
    ]);
  } catch (error) {
    console.error("Airtable error:", error);
    throw error;
  }
};
