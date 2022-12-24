const Button = (props) => {
  const clickGetNumBer = () => {
    props.updateNumber();
  };
  const clickResetNumber = () => {
    props.resetNumber();
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
