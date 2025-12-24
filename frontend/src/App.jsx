import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Jobs from "./pages/Jobs";
import PostJob from "./pages/PostJob";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/dashboard"
          element={<ProtectedRoute><Dashboard /></ProtectedRoute>}
        />
        <Route
          path="/jobs"
          element={<ProtectedRoute><Jobs /></ProtectedRoute>}
        />
        <Route
          path="/post-job"
          element={<ProtectedRoute><PostJob /></ProtectedRoute>}
        />
      </Routes>
    </>
  );
}

export default App;
