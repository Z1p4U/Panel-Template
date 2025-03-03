import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

type Provider = "google" | "facebook";

const useAuth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    sessionStorage.setItem("token", `google-dummy-token`);
  }, []);

  const login = (provider: Provider) => {
    sessionStorage.setItem("token", `${provider}-dummy-token`);
    navigate("/");
  };

  const logout = () => {
    sessionStorage.removeItem("token");
    navigate("/login");
  };

  const isAuthenticated = (): boolean => {
    const token = sessionStorage.getItem("token");
    return !!token;
  };

  return { login, logout, isAuthenticated };
};

export default useAuth;
