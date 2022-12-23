import React from "react";
import ReactDom from "react-dom";
// import "./style.css";
import App from "./App";

// const App = () => {
//   const eventHandle = (e, val) => {
//     e.preventDefault();
//     console.log(e.target.name); //lấy được tên
//     console.log(e.target.type); //lấy được kiểu
//     console.log(e.target.value); //lấy được giá trị của ptu vừa kích hoát sự kiện do người dùng nhập vào
//     console.log(val);
//   };
//   return (
//     <form className="bg" onSubmit={eventHandle}>
//       {/* //truyền giá trị thông qua sự kiện thì dùng ()=> phỉa có e và tham số t2 là gtri truyền. k truyền thì k cần event còn nếu truyền thì buộc cphair có e và tso t2 ms là truyền */}
//       <input onChange={(e) => eventHandle(e, "Son")} type="text" name="email" />
//       <input type="submit" name="sbm" value="send" />
//     </form>
//   );
// };

ReactDom.render(<App />, document.getElementById("root"));
