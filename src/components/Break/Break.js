import React from "react";
import { actionTypes } from "../../reducer";
import { useStateValue } from "../../contexts/stateProvider";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";

const Break = () => {
  const [state, dispatch] = useStateValue();
  const [{ enable, breakValue }] = useStateValue();

  const handleBreakDecrease = () => {
    dispatch({
      ...state,
      type: actionTypes.BREAK_DECREASE,
      breakValue: breakValue - 1,
    });
  };

  const handleBreakIncrease = () => {
    dispatch({
      ...state,
      type: actionTypes.BREAK_INCREASE,
      breakValue: breakValue + 1,
    });
  };

  return (
    <div className="break">
      <p id="break-label">Break Length</p>
      <div id="break-panel" className="flex-center">
        <button
          type="button"
          id="break-decrement"
          className="flex-center"
          onClick={handleBreakDecrease}
          disabled={enable || breakValue <= 1}
        >
          <FaAngleDown />
        </button>
        <p id="break-length" className="flex-center">
          {breakValue}
        </p>
        <button
          type="button"
          id="break-increment"
          className="flex-center"
          onClick={handleBreakIncrease}
          disabled={enable || breakValue >= 60}
        >
          <FaAngleUp />
        </button>
      </div>
    </div>
  );
};

export default Break;
