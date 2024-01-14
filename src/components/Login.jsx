import React, { useState, useContext } from "react";
import UserContext from "../context/userContext";
import { useNavigate } from "react-router-dom";
const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const { setUser } = useContext(UserContext);
    const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("login clicked!");
		setUser({ username, password });
        navigate("/profile");
	};
	return (
		<div>
			<h1>Context API Web hook tutorial</h1>
			<h1>Login Page</h1>
			<input type="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} required /> <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
			<button onClick={(e) => handleSubmit(e)}>Login</button>
		</div>
	);
};

export default Login;
