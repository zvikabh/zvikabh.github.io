"use client";

import { useEffect } from "react";

import { useTitle } from "../../contexts/TitleContext";

export default function Publications() {
  const { setShortTitle } = useTitle();
  useEffect(() => {
    setShortTitle("Publications");
  });
  return (
    <>
      <ul>
        <li><a href="/journal">Journal publications</a></li>
        <li><a href="/conference">Conference publications</a></li>
        <li><a href="/reports">Miscellaneous reports</a></li>
      </ul>
    </>
  );
};
