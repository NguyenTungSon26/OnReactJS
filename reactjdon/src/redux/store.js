import { createStore } from "redux";
// state thay đổi khi kich hoạt sự kiện nên khai báo thằng mặc định ban đầu. phải khai báo là 1 đối tượng k thể 1 gtri vì nhiều state
const defaultState = {
  num: 0,
};

//khai báo lõi reducer là bao gồm các giải thuật: bấm reset vs get number. Reducer nhận vào 2 tso
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ACTION":
      return { num: Math.round(Math.random() * 10) };
    case "RESET":
      return { num: 0 };
    default:
      return state;
  }
};

const store = createStore(reducer);
export default store;
