"use client";

import { useEffect, useState } from "react";

export default function Typewriter() {
  const text = "Data · Analytics · Business Intelligence";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;

    const timer = setInterval(() => {
      setDisplayedText(text.slice(0, index + 1));
      index++;

      if (index === text.length) {
        clearInterval(timer);
      }
    }, 45);

    return () => clearInterval(timer);
  }, []);

  return <>{displayedText}</>;
}