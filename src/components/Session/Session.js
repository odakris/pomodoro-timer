import React from "react";
import { actionTypes } from "../../reducer";
import { useStateValue } from "../../contexts/stateProvider";
import {
  FaAngleDown,
  FaAngleUp,
} from "https://cdn.skypack.dev/react-icons@4.1.0/fa";

const Session = () => {
  const [state, dispatch] = useStateValue();
  const [{ enable, sessionValue }] = useStateValue();

  const handleSessionDecrease = () => {
    dispatch({
      ...state,
      type: actionTypes.SESSION_DECREASE,
      sessionValue: sessionValue - 1,
      timeValue: (sessionValue - 1) * 60,
    });
  };

  const handleSessionIncrease = () => {
    dispatch({
      ...state,
      type: actionTypes.SESSION_INCREASE,
      sessionValue: sessionValue + 1,
      timeValue: (sessionValue + 1) * 60,
    });
  };

  return (
    <div className="session">
      <p id="session-label">Session Length</p>
      <div id="session-panel" className="flex-center">
        <button
          type="button"
          id="session-decrement"
          className="flex-center"
          onClick={handleSessionDecrease}
          disabled={enable || sessionValue <= 1}
        >
          <FaAngleDown />
        </button>
        <p id="session-length" className="flex-center">
          {sessionValue}
        </p>
        <button
          type="button"
          id="session-increment"
          className="flex-center"
          onClick={handleSessionIncrease}
          disabled={enable || sessionValue >= 60}
        >
          <FaAngleUp />
        </button>
      </div>
    </div>
  );
};

export default Session;
