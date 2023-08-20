export const initialState = {
  title: "Pomodoro Clock",
  credit: "Created by",
  breakValue: 5,
  sessionValue: 25,
  timeValue: 1500,
  enable: false,
  active: false,
  audioURL: "https://www.soundjay.com/misc/sounds/bell-ring-01.mp3",
  label: "Session",
};

export const actionTypes = {
  BREAK_INCREASE: "BREAK_INCREASE",
  BREAK_DECREASE: "BREAK_DECREASE",
  SESSION_INCREASE: "SESSION_INCREASE",
  SESSION_DECREASE: "SESSION_DECREASE",
  PLAYPAUSE: "PLAYPAUSE",
  RESET: "RESET",
  RUNNING_CLOCK: "RUNNING_CLOCK",
  LABEL: "LABEL",
  WARNING: "WARNING",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.BREAK_INCREASE:
      return { ...state, breakValue: action.breakValue };
    case actionTypes.BREAK_DECREASE:
      return { ...state, breakValue: action.breakValue };
    case actionTypes.SESSION_INCREASE:
      return {
        ...state,
        sessionValue: action.sessionValue,
        timeValue: action.timeValue,
      };
    case actionTypes.SESSION_DECREASE:
      return {
        ...state,
        sessionValue: action.sessionValue,
        timeValue: action.timeValue,
      };
    case actionTypes.PLAYPAUSE:
      return { ...state, enable: action.enable };
    case actionTypes.RESET:
      return initialState;
    case actionTypes.RUNNING_CLOCK:
      return { ...state, timeValue: action.timeValue };
    case actionTypes.LABEL:
      return { ...state, label: action.label };
    case actionTypes.WARNING:
      return { ...state, active: action.active };
    default:
      return state;
  }
};

export default reducer;
