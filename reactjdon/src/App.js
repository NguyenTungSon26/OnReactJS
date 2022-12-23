import React, { useEffect } from "react";
import Description from "./Component/Description";
import Thambnail from "./Component/Thambnail";
import Title from "./Component/Title";

const App = () => {
  const [title, setTitle] = React.useState("Loading...");

  const [sttTitle, setSttTitle] = React.useState(true);

  const updateSttTitle = () => {
    return setSttTitle(!sttTitle);
  };
  const updateTitle = (val) => {
    return setTitle(val);
  };
  // build componentDidMount bằng useEfffect và set time =2000ms để đổi thành tiêu đề mong muốn. các hàm đều có hàm con bên trong để thực thi
  useEffect(() => {
    setTimeout(() => {
      setTitle("What is Lorem Ipsum?");
    }, 2000);
  }, []);

  return (
    <div id="main">
      <div className="content-item">
        <Thambnail />
        <Title
          updateTitle={updateTitle}
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
