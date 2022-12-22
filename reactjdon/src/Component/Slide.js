import App from "../App";

const Slide = (props) => {
  return (
    <>
      <div id="slide-img">
        <img src={props.imgUrl} />
      </div>
    </>
  );
};
export default Slide;
// truyền bằng props rồi nhận và lấy ra từ thằng slider App.js
// Khai báo thì ở bên app n com slider lấy nên phải truyền k thì k lấy được. tên thuocj tính đặt tùy ý gtri chính là thằng 1. dùng props. tên thuộc tính là in ra được ảnh
