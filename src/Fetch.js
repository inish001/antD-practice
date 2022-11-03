import React, { useEffect, useState } from "react";
import axios from "axios";

function Fetch() {
  const [users, setUsers] = useState([]);
  // function handleDelete(user.id){
  //     console.log("------------delete")
  //     const newUsers = users.filter((user)=>{
  //         if(!user.id)
  //         setUsers(newUsers)
  //     })
  // }
  const handleDelete = (user) => {
    console.log(user);
    const newUsers = users.filter((element) => element.id !== user.id);
    setUsers(newUsers);
    // const index = users.indexOf(user)
    // console.log(index)
    // users.splice(index,1)
    // console.log(users)
    // setUsers(users)
  };
  const handleSubmit =()=>{
    axios.post("https://jsonplaceholder.typicode.com/posts")
    .then((response)=>console.log(response.data))
    .catch((error)=>console.log(error))
  }
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log(response.data)
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      {users.map((user) => {
        return (
          <li key={user.id}>
            Name : {user.name}{" "}
            <button onClick={() => handleDelete(user)}>Delete</button>
          </li>
        );
      })}

      <div className="row">
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            aria-label="First name"
          />
        </div>
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Last name"
            aria-label="Last name"
          />
          <button type="Submit" onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </>
  );
}

export default Fetch;
