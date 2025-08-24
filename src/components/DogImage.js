import React from "react";

const dogImages = [
  "/images/dogs/dog1.jpg",
  "/images/dogs/dog2.jpg",
  "/images/dogs/dog16.jpg"
];

export default function DogImage() {
  const randomImage = dogImages[Math.floor(Math.random() * dogImages.length)];
  return <img src={randomImage} alt="Dog" className="rounded shadow w-full mb-4" />;
}
