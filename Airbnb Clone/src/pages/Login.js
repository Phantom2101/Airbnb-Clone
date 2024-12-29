import React, { useState } from "react";
import axios from "../services/api";

const Login = () => {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    const response = await axios.post("/auth/login", { email, password });
    alert(response.data.message);
    } catch (error) {
    alert(error.response.data.error || "Login failed");
    }
};

return (
    <form onSubmit={handleSubmit}>
    <h2>Login</h2>
    <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
    />
    <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
    />
    <button type="submit">Login</button>
    </form>
);
};

export default Login;
