const Title = (props) => {
  const txtTitle = () => {
    return <h4 onDoubleClick={setSttTitle}>{props.title}</h4>;
  };

  const frmTitle = () => {
    return (
      <input
        id="title"
        onKeyUp={checkEnter}
        onChange={changeTitle}
        onBlur={setSttTitle}
        type="text"
        name="title"
        value={props.title}
      />
    );
  };

  const checkEnter = (e) => {
    if (e.keyCode === 13) {
      document.getElementById("title").blur();
    }
  };
  const changeTitle = (e) => {
    //mỗi khi ktra e.target.value thì ktra xem === rỗng thì k sửa nữa phải thoát ra khỏi changeTitle ngay bằng return false n trc khi return phải blur(nếu phát hiện ra ta xóa kí tự cuois cùng có nghĩa là chuỗi value = rỗng thì thoát ra khỏi textbox nên phải false)
    if (e.target.value === "") {
      document.getElementById("title").blur();
      return false;
    }
    props.updateTitle(e.target.value);
  };

  const setSttTitle = () => {
    props.updateSttTitle();
  };

  const showTitle = () => {
    if (props.sttTitle) {
      return txtTitle();
    } else {
      return frmTitle();
    }
  };

  return <>{showTitle()}</>;
};
export default Title;
