import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="flex justify-between p-4 bg-black text-white">
      <Link to="/dashboard">AI Job Portal</Link>

      {user && (
        <div className="flex gap-4">
          <Link to="/jobs">Jobs</Link>
          {user.role === "recruiter" && <Link to="/post-job">Post Job</Link>}
          <button onClick={logout}>Logout</button>
        </div>
      )}
    </div>
  );
}
