import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext} from "./auth";

function Login() {
  const [user, setUser] = useState("");
  const contextAuth = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation()

  const redirectPath = location.state?.path || "/home"

  const handleLogin = () => {
    contextAuth.login(user);
    navigate(redirectPath);
  };
  return (
    <div>
      <label>
        UserName :{" "}
        <input className="input" type="text" onChange={(e) => setUser(e.target.value)} />
      </label>
      <button className="btn my-3" onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
