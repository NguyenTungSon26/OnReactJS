import { useSelector, useDispatch } from "react-redux";
const TimeDown = () => {
  const number = useSelector((reducers) => {
    return reducers.TimeDown.num;
  });
  const dispatch = useDispatch();
  const clickTimeDown = () => {
    dispatch({
      type: "DOWN",
    });
  };
  const clickTimeReset = () => {
    dispatch({
      type: "RESETDOWN",
    });
  };
  return (
    <div onClick={clickTimeDown} className="timer bg-danger" id="timer-down">
      <p>{number}</p>
      <button type="button" className="btn btn-dark">
        Down
      </button>
      <button onClick={clickTimeReset} type="button" className="btn btn-dark">
        Reset
      </button>
    </div>
  );
};
export default TimeDown;
