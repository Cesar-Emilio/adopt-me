import { createContext, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = (email, password) => {
    setLoading(true);
    setError(null);

    return new Promise((resolve, reject) => {
      axios
        .post("https://reqres.in/api/login", {
          email,
          password,
        })
        .then((response) => {
          if (response.status === 200) {
            const userRole = email === "admin@example.com" ? "admin" : "user";
            setUser({ email, role: userRole });
            resolve();
          }
        })
        .catch((err) => {
          setError("Credenciales incorrectas.");
          reject(err);
        })
        .finally(() => {
          setLoading(false);
        });
    });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading, error }}>
      {children}
    </AuthContext.Provider>
  );
};
