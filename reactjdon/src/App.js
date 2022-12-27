import React from "react";
import store from "./redux-setup/store";
import { Provider } from "react-redux";
import TimeUp from "./Component/TimeUp";
import TimeDown from "./Component/TimeDown";

const App = () => {
  return (
    <Provider store={store}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-3 col-md-3 col-sm-8 col-8">
            <TimeUp />
          </div>
          <div className="col-lg-3 col-md-3 col-sm-8 col-8">
            <TimeDown />
          </div>
        </div>
      </div>
    </Provider>
  );
};
export default App;
