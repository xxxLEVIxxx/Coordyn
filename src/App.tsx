import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { AuthPage } from "./features/auth/AuthPage";
import { DashboardPage } from "./features/dashboard/DashboardPage";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    const sessionCheck = async () => {
      try {
        const res = await fetch("http://localhost:4000/auth/session", {
          method: "POST",
          credentials: "include",
        });
        if (res.status !== 200) {
          navigate("/auth");
        } else {
          navigate("dashboard");
        }
      } catch (err) {
        navigate("/auth");
      }
    };
    sessionCheck();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/auth" />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
  );
}

export default App;
