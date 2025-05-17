import { Paper, TextField, Button, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type Prop = {
  onSwitch: () => void;
};

type FormData = {
  username: string;
  password: string;
};

export const SignUpForm = ({ onSwitch }: Prop) => {
  const [formData, setFormData] = useState<FormData>({
    username: "",
    password: "",
  });
  const [confirmPwd, setConfirmPwd] = useState("");

  const navigate = useNavigate();

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, username: e.target.value }));
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, password: e.target.value }));
  };

  const handleConfirmPwdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPwd(e.target.value);
  };

  const handleSubmit = async () => {
    // send the request to the backend
    if (formData.password !== confirmPwd) {
      alert("Passwords does not match. Please try again.");
      return;
    }

    try {
      const response = await fetch("http://localhost:4000/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.status == 200) {
        navigate("/dashboard");
      } else if (response.status == 401) {
        alert("Wrong password.");
      } else if (response.status == 404) {
        alert("User not found");
      } else {
        alert("Registeration failed. Please try again.");
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
      <div>
        <label htmlFor="confirm-password"></label>
        {/* <input type="password" id="password" name="password" /> */}
        <TextField
          label="ConfirmPassword"
          value={confirmPwd}
          onChange={handleConfirmPwdChange}
        ></TextField>
      </div>
      <Typography
        onClick={onSwitch}
        sx={{ cursor: "pointer", color: "primary" }}
      >
        Already have an account?
      </Typography>
      <button type="submit" onClick={handleSubmit}>
        Sign up
      </button>
    </Paper>
  );
};
