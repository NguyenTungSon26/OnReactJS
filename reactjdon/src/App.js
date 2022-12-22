import React from "react";
import Large from "./Component/Large";
import Small from "./Component/Small";

const App = () => {
  const [imgUrl, setImgUrl] = React.useState("images/img-1.jpg");
  //viết phương thức thay đổi để bấm vào ảnh sẽ tự thay rồi đưa sang bên com thực thi. hàm updateImgUrl sẽ đổi url hiện tại (thằng state) thành url mong muốn với dkien phải truyền mong muốn vào
  const updateImgUrl = (value) => {
    return setImgUrl(value);
  };
  return (
    <div id="products">
      <Large imgUrl={imgUrl} />
      <Small imgUrl={imgUrl} updateImgUrl={updateImgUrl} />
    </div>
  );
};

export default App;
