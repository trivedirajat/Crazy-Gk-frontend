import React, { useState, useEffect } from "react";

const Countdown = ({ minutes, onComplete }) => {
  const initialTime = minutes * 60 * 1000;
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    if (timeLeft <= 0) {
      if (onComplete) onComplete();
      return;
    }

    const timerId = setInterval(
      () => setTimeLeft((prevTime) => prevTime - 1000),
      1000
    );
    return () => clearInterval(timerId);
  }, [timeLeft, onComplete]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return <span>{formatTime(timeLeft)}</span>;
};

export default Countdown;
