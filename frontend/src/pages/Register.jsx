import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({});
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    await API.post("/auth/register", form);
    navigate("/");
  };

  return (
    <form onSubmit={submit} className="p-8 max-w-md mx-auto">
      <input placeholder="Name" className="border p-2 w-full mb-2" onChange={e=>setForm({...form,name:e.target.value})}/>
      <input placeholder="Email" className="border p-2 w-full mb-2" onChange={e=>setForm({...form,email:e.target.value})}/>
      <input placeholder="Password" type="password" className="border p-2 w-full mb-2" onChange={e=>setForm({...form,password:e.target.value})}/>
      <select className="border p-2 w-full mb-2" onChange={e=>setForm({...form,role:e.target.value})}>
        <option value="seeker">Job Seeker</option>
        <option value="recruiter">Recruiter</option>
      </select>
      <button className="bg-black text-white px-4 py-2 w-full">Register</button>
    </form>
  );
}
