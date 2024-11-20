import React, { useState, useEffect, Suspense } from "react";
import "../styles/Login.css";
import { isUserNameValid, isPasswordValid } from "./Validators";
import { simulateNetworkDelay } from "./DelaySimulation";
import config from "../config";
import LoginForm from "./LoginForm";
import { useNavigate } from "react-router-dom";

const InputComp = React.lazy(() =>
  import("./Input").then((module) => ({
    default: module.InputComp,
  }))
);

export type FormState = {
  uname: string;
  pass: string;
  rememberme: boolean;
};

export type FormErrors = {
  uname?: string;
  pass?: string;
};

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [uname, setUsername] = useState(localStorage.getItem("uname") || "");
  const [pass, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [formData, setFormData] = useState<FormState>({
    uname: uname,
    pass: "",
    rememberme: rememberMe,
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const storedEmail = localStorage.getItem("uname");
    if (storedEmail) {
      setUsername(storedEmail);
      setFormData({ ...formData, uname: storedEmail, rememberme: true });
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setFormErrors({});
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRememberMe(e.target.checked);
    setFormData({
      ...formData,
      rememberme: e.target.checked,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    await simulateNetworkDelay(config.timeoutInMiliseconds);

    const errors: FormErrors = {};
    if (!isUserNameValid(formData.uname)) {
      errors.uname = "Please enter a valid username";
    }

    if (!isPasswordValid(formData.pass)) {
      errors.pass = "Please enter a valid password";
    }

    if (formData.uname == "hello@edited.com" && formData.pass == "hello123")
      {
          try {
            navigate('/SuccessPage', {
              state: { uname: formData.uname },
            });
            console.log("Navigation triggered to /SuccessPage with uname:", formData.uname);
          } catch (error) {
            console.error("Navigation failed:", error);
          }
        
      }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setIsLoading(false);
    } else {
      setFormErrors({});
      setIsLoggedIn(true);

      setUsername(formData.uname);
      setPassword(formData.pass);

      if (formData.rememberme) {
        localStorage.setItem("uname", formData.uname);
      } else {
        localStorage.removeItem("uname");
      }

      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    setIsLoading(true);
    await simulateNetworkDelay(config.timeoutInMiliseconds);
    setIsLoggedIn(false);
    setIsLoading(false);
  };

  return (
    <div className="rectangle3" data-testid="logintest">
      <Suspense fallback={<div className="loading-spinner">Loading...</div>}>
        {isLoading ? (
          <div className="loader">Loading...</div>
        ) : (
          <div className="login">
            {!isLoggedIn ? (
              <>
                <div className="group10">
                  <div className="sign-in-text">SIGN IN TO YOUR ACCOUNT {config.apiUrl}</div>
                </div>

                <LoginForm
                  formData={formData}
                  formErrors={formErrors}
                  handleInputChange={handleInputChange}
                  handleCheckboxChange={handleCheckboxChange}
                  handleSubmit={handleSubmit}
                />
              </>
            ) : (
              <div className="success-page">
                <p className="success-text">Hi, {uname}</p>
                <div className="group3">
                  <div className="rectangle8">
                    <button onClick={handleLogout}>Logout</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </Suspense>
    </div>
  );
};

export default Login;
