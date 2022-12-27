const initState = {
  num: 10,
};

export default (state = initState, action) => {
  switch (action.type) {
    case "DOWN":
      return { num: --state.num };
    case "RESETDOWN":
      return { num: 10 };
    default:
      return state;
  }
};
