import React from "react";
import { login, logout } from "../features/login/login";
import { useDispatch, useSelector } from "react-redux";
function Login() {
  const [username, setUsername] = React.useState();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);
  return (
    <div>
      <h1>{user.username}</h1>
        <input type="text" onChange={(e) => setUsername(e.target.value)} />
        <button onClick={() => dispatch(login({ username: username }))}>
          Submit
        </button>
        <button type="submit">Logout</button>
    </div>
  );
}

export default Login;
