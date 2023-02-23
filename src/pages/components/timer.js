import React, { useEffect, useState } from "react";

export default function Timer({ delayResend = 60 }) {
  const [delay, setDelay] = useState(delayResend);
  const minutes = Math.floor(delay / 60);
  const seconds = Math.floor(delay % 60);
  useEffect(() => {
    const timer = setInterval(() => {
      setDelay(delay - 1);
    }, 1000);

    if (delay === 0) {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  });

  return (
    <>
      <span>
        {minutes}:{seconds}
      </span>
    </>
  );
}
