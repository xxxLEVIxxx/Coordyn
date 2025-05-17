import { Paper, TextField, Button, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  onSwitch: () => void;
};

type FormData = {
  username: string;
  password: string;
};

export const LoginForm = ({ onSwitch }: Props) => {
  const [formData, setFormData] = useState<FormData>({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, username: e.target.value }));
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, password: e.target.value }));
  };

  const handleSubmit = async () => {
    // send the request to the backend
    try {
      const response = await fetch("http://localhost:4000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        credentials: "include",
      });

      if (response.status == 200) {
        navigate("/dashboard");
      } else if (response.status == 401) {
        alert("Wrong password.");
      } else if (response.status == 404) {
        alert("User not found");
      } else {
        alert("Login failed. Please try again.");
      }
    } catch (err) {
      alert((err as Error).message);
    }

    // based on the status code, we can get the following cases:
    // 1. authorized 200
    // 2. account does not exist
    // 3. wrong password
    // 4. service down
  };
  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <div>
        <label htmlFor="username"></label>
        {/* <input type="text" id="username" name="username" /> */}
        <TextField
          label="Username"
          value={formData.username}
          onChange={handleUsernameChange}
        ></TextField>
      </div>
      <div>
        <label htmlFor="password"></label>
        {/* <input type="password" id="password" name="password" /> */}
        <TextField
          label="Password"
          value={formData.password}
          onChange={handlePasswordChange}
        ></TextField>
      </div>
      <Typography
        onClick={onSwitch}
        sx={{ cursor: "pointer", color: "primary" }}
      >
        Don't have an account?
      </Typography>
      <button type="submit" onClick={handleSubmit}>
        Log in
      </button>
    </Paper>
  );
};
