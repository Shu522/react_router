import React from "react";

const User = ({ userData }) => {
  return (
    <tr>
      <td>{userData.name}</td>
      <td>{userData.email}</td>
    </tr>
  );
};
const UserList = () => {
  const users = [
    { email: "kim@gamil.com", name: "김민정" },
    { email: "sel@gamil.com", name: "설윤" },
    { email: "ka@gamil.com", name: "카리나" },
    { email: "win@gamil.com", name: "윈터" },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>이름</th>
          <th>이메일</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <User userData={user} />
        ))}
      </tbody>
    </table>
  );
};

export default UserList;
