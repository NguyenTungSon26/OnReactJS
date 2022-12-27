import { useSelector, useDispatch } from "react-redux";
const TimeUp = () => {
  const number = useSelector((reducers) => {
    return reducers.TimeUp.num;
  });
  const dispatch = useDispatch();
  const clickTimeUp = () => {
    dispatch({
      type: "UP",
    });
  };
  const clickTimeReset = () => {
    dispatch({
      type: "RESETUP",
    });
  };
  return (
    <div className="timer bg-info" id="timer-up">
      <p>{number}</p>
      <button onClick={clickTimeUp} type="button" className="btn btn-dark">
        Up
      </button>
      <button onClick={clickTimeReset} type="button" className="btn btn-dark">
        Reset
      </button>
    </div>
  );
};
export default TimeUp;
