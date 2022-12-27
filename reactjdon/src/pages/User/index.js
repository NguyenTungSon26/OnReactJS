import React, { useEffect } from "react";
import { getUsers } from "../../services/Api";

const User = () => {
  const [users, setUsers] = React.useState([]);
  useEffect(() => {
    getUsers({}).then((res) => {
      return setUsers(res.data);
    });
  }, []);
  return (
    <table className="table table-dark table-hover">
      <thead>
        <tr>
          <th>Fullname</th>
          <th>Username</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {users.map((value, index) => (
          <tr>
            <td>{value.name}</td>
            <td>{value.username}</td>
            <td>{value.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default User;
