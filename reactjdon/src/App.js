import React from "react";
import Number from "./Component/Number";
import Slide from "./Component/Slide";

const App = () => {
  //tạo state để lưu đường dẫn ảnh
  const [imgUrl, setImgUrl] = React.useState("images/banner-1.jpg");
  const updateImgUrl1 = () => {
    return setImgUrl("images/banner-1.jpg");
  };
  const updateImgUrl2 = () => {
    return setImgUrl("images/banner-2.jpg");
  };
  const updateImgUrl3 = () => {
    return setImgUrl("images/banner-3.jpg");
  };
  return (
    <div id="slide">
      <Slide imgUrl={imgUrl} />
      {/* Truyền sang slider để lấy xuống */}
      <Number
        updateImgUrl1={updateImgUrl1}
        updateImgUrl2={updateImgUrl2}
        updateImgUrl3={updateImgUrl3}
      />
    </div>
  );
};

export default App;
