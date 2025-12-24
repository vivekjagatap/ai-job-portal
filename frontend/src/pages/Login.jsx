import { useState, useContext } from "react";
import API from "../services/api";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await API.post("/auth/login", { email, password });
    login(res.data);
    navigate("/dashboard");
  };

  return (
    <form onSubmit={handleSubmit} className="p-8 max-w-md mx-auto">
      <h2 className="text-2xl mb-4">Login</h2>
      <input className="border p-2 w-full mb-2" placeholder="Email" onChange={e=>setEmail(e.target.value)} />
      <input className="border p-2 w-full mb-2" placeholder="Password" type="password" onChange={e=>setPassword(e.target.value)} />
      <button className="bg-black text-white px-4 py-2 w-full">Login</button>
    </form>
  );
}
