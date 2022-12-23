import React from "react";
import Description from "./Component/Description";
import Thambnail from "./Component/Thambnail";
import Title from "./Component/Title";

const App = () => {
  const [title, setTitle] = React.useState("What is Lorem Ipsum?");

  const [sttTitle, setSttTitle] = React.useState(true);

  const updateSttTitle = () => {
    return setSttTitle(!sttTitle);
  };

  return (
    <div id="main">
      <div className="content-item">
        <Thambnail />
        <Title
          title={title}
          sttTitle={sttTitle}
          updateSttTitle={updateSttTitle}
        />
        <Description />
      </div>
    </div>
  );
};
export default App;
