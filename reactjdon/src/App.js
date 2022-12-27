import React, { useEffect } from "react";
import axios from "axios";
import User from "./Component/User";
import Header from "./Component/Header";
const App = () => {
  const [data, setData] = React.useState([]);

  useEffect(async () => {
    const response = await axios("https://jsonplaceholder.typicode.com/users");
    return setData(response.data);
  }, []);
  return (
    <div id="wrapper" className="container">
      <Header />
      <table className="table table-dark table-hover">
        <thead>
          <tr>
            <th>Fullname</th>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((value, index) => (
            <User user={value} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default App;
