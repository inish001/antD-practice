import axios from "axios";
import React, { useState } from "react";

function Main() {
  const [req, setReq] = useState({});
  const [resp, setResp] = useState(null);
  const [active, setActive] = useState("");
  const[payload,setPayload] = useState({
    firstname:"",
    lastname:""
  }
  )

  const handleGet = () => {
    console.log("Get");
    axios({
      method: "get",
      url: "https://jsonplaceholder.typicode.com/users",
    })
      .then((res) => {
        const { status, data, headers } = res;
        const newObj = {
          status,
          data,
          headers,
        };
        setReq(newObj);
        setActive("get");
      })
      .catch((err) => console.log(err));
  };
//   console.log(req);
  const handlePost = () => {
    console.log("Post",payload);
    axios
      .post("https://jsonplaceholder.typicode.com/posts",payload)
      .then((res) => {
        setResp(res);
        console.log(res.data)
        setActive("post");
    })
    .catch((err) => {
        console.log(err);
    });
};
// console.log(resp);
  const handlePut = () => {
    console.log("put/patch");
  };
  const handleDelete = () => {
    console.log("delete");
  };
  const handleRequests = () => {
    console.log("requests");
  };
  const handleHeaders = () => {
    console.log("headers");
  };
  const handleTransform = () => {
    console.log("transform");
  };
  const handleError = () => {
    console.log("error");
  };
  const handleCancel = () => {
    console.log("cancel");
  };
  let data;
  let postData;
  if (active === "get") {
    data = (
      <div>
        <h5 className="my-3">Status :{req && req.status}</h5>
        {req &&
          req.data.map((user) => {
            return <li key={user.id}>Name : {user.name}</li>;
          })}
        <h5 className="my-3">Headers</h5>
        {req && JSON.stringify(req.headers)}
      </div>
    );
  } else if (active === "post") {
    postData = (
        <div>
            <h5>Post Status : 
                {resp.status}
            </h5>
      <div className="row g-3">
        <div className="col">
          <input
            onChange={(e)=>setPayload({
                firstname:e.target.value,
                lastname:payload.lastname
            })}
            type="text"
            className="form-control"
            placeholder="First name"
            aria-label="First name"
          />
        </div>
        <div className="col">
          <input
          onChange={(e)=>setPayload({
            firstname:payload.firstname,
            lastname:e.target.value
        })}
            type="text"
            className="form-control"
            placeholder="Last name"
            aria-label="Last name"
          />
          <button type="submit" onClick={handlePost}>Submit</button>
          
        </div>
      </div>
      </div>
    );
  }
  return (
    <div className="mx-2 my-3">
      <h2>Axios Crash Course</h2>
      <button
        type="button"
        className="btn btn-primary mx-2"
        onClick={handleGet}
      >
        Get
      </button>
      <button
        type="button"
        className="btn btn-secondary mx-2 my-3 "
        onClick={handlePost}
      >
        Post
      </button>
      <button
        type="button"
        className="btn btn-success mx-2"
        onClick={handlePut}
      >
        Put/Patch
      </button>
      <button
        type="button"
        className="btn btn-danger mx-2"
        onClick={handleDelete}
      >
        Delete
      </button>
      <button
        type="button"
        className="btn btn-warning mx-2"
        onClick={handleRequests}
      >
        Sim Requests
      </button>
      <button
        type="button"
        className="btn btn-info mx-2"
        onClick={handleHeaders}
      >
        Custom Headers
      </button>
      <button
        type="button"
        className="btn btn-light mx-2"
        onClick={handleTransform}
      >
        Transform
      </button>
      <button type="button" className="btn btn-dark mx-2" onClick={handleError}>
        Error Handling
      </button>
      <button
        type="button"
        className="btn btn-dark mx-2"
        onClick={handleCancel}
      >
        Cancel
      </button>
      {data}
      {postData}
    </div>
  );
}

export default Main;
