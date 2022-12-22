import React from "react";

const Small = (props) => {
  // 3 thằng ảnh khác nhau mỗi url nên tạo mảng lưu trữ ảnh và map để tạo danh sách 3 ảnh
  const imgsUrl = ["images/img-1.jpg", "images/img-2.jpg", "images/img-3.jpg"];
  // sự kiện để khi click vào sẽ chạy bằng cách onclick setimg, phỉa đưa đường dẫn ảnh để click vào sẽ chuyển nên phải truyền value(đường dẫn ảnh)
  const setImgUrl = (value) => {
    props.updateImgUrl(value);
  };
  const imgs = imgsUrl.map((value, index) => {
    return (
      //Khi value trùng state thì sẽ có  thuộc tính active để khi bấm vào small chuyển lagre sẽ có border. mà muốn so sánh được đẩy state từ tso1 bên app sang small
      // Toán tử 3 ngôi: {bieuthuc? action1: action2}
      <img
        onClick={() => setImgUrl(value)}
        // active đúng thằng. lấy state bằng props đẩy sang. rồi so sánh với value nếu đúng active nếu sai hiển thị rỗng. ===toán tử đồng nhất để nó giống cả dữ liệu cả gtr
        className={props.imgUrl === value ? "active" : ""}
        src={value}
      />
    );
  });

  return <div id="small">{imgs}</div>;
};
export default Small;
