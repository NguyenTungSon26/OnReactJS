import { useDispatch } from "react-redux";
const Button = (props) => {
  const dispatch = useDispatch();
  const clickGetNumBer = () => {
    dispatch({
      type: "ACTION",
    });
  };
  const clickResetNumber = () => {
    dispatch({
      type: "RESET",
    });
  };

  return (
    <div>
      <button onClick={clickGetNumBer} className="btn btn-dark">
        Get number
      </button>
      <button onClick={clickResetNumber} className="btn btn-dark">
        Reset
      </button>
    </div>
  );
};
export default Button;
