"use client";


import { useEffect } from "react";
import { useTitle } from "../contexts/TitleContext";


export default function ClientPage() {
  const { setShortTitle } = useTitle();
  return (
    <>
      <p>Welcome to Zvika's homepage!</p>
      <p>Stuff you can find here includes:</p>
      <ul>
        <li><a href="/publications">Zvika's publications</a></li>
        <li><a href="/software">Fun software projects</a></li>
      </ul>
    </>
  );
}
