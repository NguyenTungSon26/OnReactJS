const Number = (props) => {
  const setImgUrl1 = () => {
    props.updateImgUrl1();
    //lưu vào props rồi và gọi vào chạy bằng cách ngoặc tròn để thực thi hàm
  };
  const setImgUrl2 = () => {
    props.updateImgUrl2();
  };
  const setImgUrl3 = () => {
    props.updateImgUrl3();
  };
  return (
    <p id="slide-num">
      <a onClick={setImgUrl1} href="#">
        1
      </a>
      <a onClick={setImgUrl2} href="#">
        2
      </a>
      <a onClick={setImgUrl3} href="#">
        3
      </a>
    </p>
  );
};
export default Number;
