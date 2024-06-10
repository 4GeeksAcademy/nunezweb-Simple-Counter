import React, { useState, useEffect } from "react";

const SecondsCounter = () => {
  const [counter, setCounter] = useState(0);
  const [runTimer, setRunTimer] = useState(true);

  useEffect(() => {
    if (!runTimer) return;

    const interval = setInterval(
      () => setCounter((prevTime) => prevTime + 1),
      1000
    );

    return () => clearInterval(interval);
  }, [runTimer]);

  const display = counter.toString().padStart(7, "0");

  return (
    <div className="counterNumber">
      <div className="container">
        <div className="row">
          <div className="timer">
            <div className="middle">
              <div className="clockIcon p-2 text-white">
                <i className="far fa-hourglass"></i>
              </div>
              <div className="bg-secondary p-2 text-white">{display[0]}</div>
              <div className="bg-secondary p-2 text-white">{display[1]}</div>
              <div className="bg-secondary p-2 text-white">{display[2]}</div>
              <div className="bg-secondary p-2 text-white">{display[3]}</div>
              <div className="bg-secondary p-2 text-white">{display[4]}</div>
              <div className="bg-secondary p-2 text-white">{display[5]}</div>
              <div className="bg-secondary p-2 text-white">{display[6]}</div>
            </div>
          </div>
        </div>
        <div
          className="container-fluid d-flex justify-content-center mt-2 gap-2"
          id="btns"
        >
          <button
            className="btn btn-default btn-lg"
            onClick={() => setRunTimer(true)}
          >
            Start
          </button>
          <button
            className="btn btn-default btn-lg"
            onClick={() => setRunTimer(false)}
          >
            Stop
          </button>
          <button className="btn btn-default btn-lg" onClick={() => setCounter(0)}>
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default SecondsCounter;
