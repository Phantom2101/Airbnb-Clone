import React, { useState } from "react";
import axios from "../services/api";

const Register = () => {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    const response = await axios.post("/auth/register", {
        name,
        email,
        password,
    });
    alert(response.data.message);
    } catch (error) {
    alert(error.response.data.error || "Registration failed");
    }
};

return (
    <form onSubmit={handleSubmit}>
    <h2>Register</h2>
    <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
    />
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
    <button type="submit">Register</button>
    </form>
);
};

export default Register;
