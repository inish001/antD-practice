import { Table } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";

const columns = [
  {
    title: "UserId",
    dataIndex: "userId",
    key: "UserID",
  },
  {
    title: "Title",
    dataIndex: "title",
    key: "Title",
  },
  {
    title: "id",
    dataIndex: "id",
    key: "id",
  },
  {
    title:"phone",
    dataIndex:"phone",
    key:"phone"
  }
];

function Users() {
  const [user, setUser] = useState([]);
  const getUsers = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
      // console.log(res);
      setUser(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div>
     <h2 className="bg-black text-slate-500">Users Table</h2> 
      {/* {user && user.map((ele) => <li key={ele.id}>{ele.name}</li>)} */}
      <Table dataSource={user} columns={columns} bordered/>
    </div>
  );
}

export default Users;
