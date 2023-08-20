import { useStateValue } from "../../contexts/stateProvider";
import { useClock } from "../../useClock";

const Timer = () => {
  const clockTimer = useClock();

  const [{ label, active }] = useStateValue();

  const warning = active ? { color: "#97010F" } : { color: "linen" };

  return (
    <div id="timer-panel" className="flex-center">
      <h2 id="timer-label" style={warning}>
        {label}
      </h2>
      <div id="timer" className="flex-center">
        <div id="time-left" style={warning}>
          {clockTimer}
        </div>
      </div>
    </div>
  );
};

export default Timer;
