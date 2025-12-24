import { useEffect, useState } from "react";
import API from "../services/api";

export default function Jobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    API.get("/jobs").then(res => setJobs(res.data));
  }, []);

  return (
    <div className="p-8">
      <h2 className="text-2xl mb-4">Jobs</h2>
      {jobs.map(job => (
        <div key={job._id} className="border p-4 mb-2">
          <h3 className="font-bold">{job.title}</h3>
          <p>{job.description}</p>
        </div>
      ))}
    </div>
  );
}
