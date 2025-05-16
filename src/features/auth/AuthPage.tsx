import { Link, useNavigate } from "react-router-dom";
import { LoginForm } from "./components/Login";
import { SignUpForm } from "./components/Signup";
import { useState } from "react";

export const AuthPage = () => {
  const navigate = useNavigate();
  const [isLoggingIn, setIsLoggingIn] = useState(true);

  const switchToSignUp = () => {
    setIsLoggingIn(false);
  };
  const switchToLogin = () => {
    setIsLoggingIn(true);
  };

  return (
    <div>
      <h1>Auth Page</h1>
      {isLoggingIn ? (
        <LoginForm onSwitch={switchToSignUp} />
      ) : (
        <SignUpForm onSwitch={switchToLogin} />
      )}
    </div>
  );
};
