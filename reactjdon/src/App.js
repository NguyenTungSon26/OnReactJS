import React from "react";
import Button from "./Component/Button";
import Number from "./Component/Number";

const App = () => {
  const [number, setNumber] = React.useState(0);
  const updateNumber = () => {
    return setNumber(Math.round(Math.random() * 10));
  };
  const resetNumber = () => {
    return setNumber(0);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 text-center">
          <div id="main">
            <Number number={number} />
            <Button resetNumber={resetNumber} updateNumber={updateNumber} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
