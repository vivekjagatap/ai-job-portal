import { useState } from "react";
import API from "../services/api";

export default function PostJob() {
  const [job, setJob] = useState({});

  const submit = async (e) => {
    e.preventDefault();
    await API.post("/jobs", job);
    alert("Job posted");
  };

  return (
    <form onSubmit={submit} className="p-8 max-w-md mx-auto">
      <input placeholder="Title" className="border p-2 w-full mb-2" onChange={e=>setJob({...job,title:e.target.value})}/>
      <textarea placeholder="Description" className="border p-2 w-full mb-2" onChange={e=>setJob({...job,description:e.target.value})}/>
      <button className="bg-black text-white px-4 py-2 w-full">Post Job</button>
    </form>
  );
}
