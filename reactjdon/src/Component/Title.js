const Title = (props) => {
  const txtTitle = () => {
    return <h4 onDoubleClick={setSttTitle}>{props.title}</h4>;
  };

  const frmTitle = () => {
    return (
      <input
        onBlur={setSttTitle}
        type="text"
        name="title"
        value={props.title}
      />
    );
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
