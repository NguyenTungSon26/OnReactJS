import React from "react";
import ReactDom from "react-dom";
import App from "./App";

// Truyền trực tiếp

// const App = () => {
//   const [data, setData] = React.useState("Welcome ReactJS");

//   const action = () => {
//     return setData("Xin chào rì ách JS");
//   };
//   return <h1 onClick={action}>{data}</h1>;
// };

// Truyền thông qua component khác

// const Heading = (props) => {
//   return <p>{props.details}</p>;
// };

// const App = (props) => {
//   return (
//     <>
//       <h1>Title</h1>
//       <Heading details="Xin chào" />
//     </>
//   );
// };

//Cơ chế: Có thể truyền gtri từ com heading sang com app, ở ví dụ com app mà truyền đc nội dung xin chào sang heading. Com app gọi tới thằng com heading xog truyền nội dung -> heading lấy nội dung và hiển thị nội dung đó

ReactDom.render(<App />, document.getElementById("root"));
