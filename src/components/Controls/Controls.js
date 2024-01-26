import React, { useEffect, useRef } from "react";
import { useStateValue } from "../../contexts/stateProvider";
import { actionTypes } from "../../reducer";
// import {
//   FaRedo,
//   FaPlay,
//   FaPause,
// } from "https://cdn.skypack.dev/react-icons@4.1.0/fa";
import { FaRedo } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";

const Controls = () => {
  const [state, dispatch] = useStateValue();
  const [{ timeValue, enable, audioURL, label, breakValue, sessionValue }] =
    useStateValue();

  const bellClockRef = useRef();

  const handleReset = () => {
    dispatch({ ...state, type: actionTypes.RESET });
    document.getElementById("beep").pause();
    document.getElementById("beep").currentTime = 0;
  };

  const handlePlayPause = () => {
    dispatch({ ...state, type: actionTypes.PLAYPAUSE, enable: !enable });
  };

  const handleClock = () => {
    if (timeValue <= 60) {
      dispatch({ ...state, type: actionTypes.WARNING, active: true });
    } else {
      dispatch({ ...state, type: actionTypes.WARNING, active: false });
    }

    dispatch({
      ...state,
      type: actionTypes.RUNNING_CLOCK,
      timeValue: timeValue - 1,
    });

    if (timeValue === 0) {
      document.getElementById("beep").play();

      if (label === "Session") {
        dispatch({
          ...state,
          type: actionTypes.LABEL,
          label: "Break",
        });
        dispatch({
          ...state,
          type: actionTypes.RUNNING_CLOCK,
          timeValue: breakValue * 60,
        });
      } else {
        dispatch({
          ...state,
          type: actionTypes.LABEL,
          label: "Session",
        });
        dispatch({
          ...state,
          type: actionTypes.RUNNING_CLOCK,
          timeValue: sessionValue * 60,
        });
      }
    }
  };

  useEffect(() => {
    let interval = null;

    if (enable) {
      interval = setInterval(() => {
        handleClock();
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div id="controls">
      <div id="start_stop_panel">
        <button
          type="button"
          id="start_stop"
          className="flex-center"
          onClick={handlePlayPause}
        >
          {enable ? (
            <FaPause style={{ fontSize: "1.5rem" }} />
          ) : (
            <FaPlay style={{ fontSize: "1.5rem" }} />
          )}
        </button>
      </div>
      <div id="reset_panel">
        <button
          type="button"
          id="reset"
          className="flex-center"
          onClick={handleReset}
        >
          <FaRedo style={{ fontSize: "1.5rem" }} />
        </button>
      </div>
      <audio id="beep" preload="auto" src={audioURL} ref={bellClockRef}></audio>
    </div>
  );
};

export default Controls;
