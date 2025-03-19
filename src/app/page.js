"use client";

import { useEffect } from "react";
import { useTitle } from "../contexts/TitleContext";

export default function Home() {
  const { setShortTitle } = useTitle();
  useEffect(() => {
    setShortTitle("Zvika Ben-Haim — Homepage");
    document.title = "Zvika Ben-Haim — Homepage";
  });
  return (
    <>
      <p>Welcome to my homepage!</p>
      <p>Stuff you can find here includes:</p>
      <ul>
        <li><a href="/publications">My publications</a></li>
        <li><a href="/software">Fun software projects</a></li>
      </ul>
    </>
  );
};
