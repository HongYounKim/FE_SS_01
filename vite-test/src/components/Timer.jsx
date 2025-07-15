import React from "react";
import { useState, useEffect } from "react";

const Timer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const left = 10 - time;

  useEffect(() => {
    const timer =
      isRunning && time < 10
        ? setTimeout(() => setTime(time + 1), 1000)
        : time === 10
        ? (setIsRunning(false), null)
        : null;

    return () => clearTimeout(timer);
  }, [isRunning, time]);

  const handleStart = () => {
    setTime(0);
    setIsRunning(true);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Time: {time} seconds</h1>
      <p>남은 시간: {left}</p>
      <button onClick={handleStart} disabled={isRunning}>
        타이머 시작
      </button>
    </div>
  );
};

export default Timer;
