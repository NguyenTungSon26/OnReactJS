import { useSelector } from "react-redux";
const Number = (props) => {
  const number = useSelector((state) => {
    return state.num;
  });
  return <h3>{number}</h3>;
};
export default Number;
