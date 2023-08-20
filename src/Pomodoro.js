import Controls from "./components/Controls/Controls";
import Settings from "./components/Settings/Settings";
import Timer from "./components/Timer/Timer";
import { useStateValue } from "./contexts/stateProvider";

function Pomodoro() {
  const [{ title, credit }] = useStateValue();

  return (
    <>
      <div className="container flex-center">
        <h1 id="title">{title}</h1>
        <Timer />
        <Controls />
        <Settings />
      </div>
      <p id="credit">
        {credit}{" "}
        <a
          href="https://github.com/odakris"
          target="_blank"
          rel="noreferrer noopener"
        >
          Odakris
        </a>
      </p>
    </>
  );
}

export default Pomodoro;
