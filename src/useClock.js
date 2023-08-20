import { useStateValue } from "./contexts/stateProvider";

export const useClock = () => {
  const [{ timeValue }] = useStateValue();

  let minutes = Math.floor(timeValue / 60);
  let secondes = timeValue % 60;

  minutes = minutes < 10 ? "0" + minutes : minutes;
  secondes = secondes < 10 ? "0" + secondes : secondes;

  return `${minutes}:${secondes}`;
};
