"use client";

import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { User } from "@/types/user";
import { getMe } from "@/services/user";

interface AuthProviderProps {
  children: React.ReactNode;
}

export default function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);

  const [token, setToken] = useState<string | null>(() => {
    if (typeof window === "undefined") return null;

    return localStorage.getItem("token");
  });

  const [loading, setLoading] = useState(true);

  const login = (token: string, user: User) => {
    localStorage.setItem("token", token);

    setToken(token);
    setUser(user);
  };

  const logout = () => {
    localStorage.removeItem("token");

    setToken(null);
    setUser(null);
  };

  useEffect(() => {
    const restoreSession = async () => {
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const response = await getMe();

        // We'll verify the exact response from the API.
        // If the API returns { success, message, data },
        // this line is correct.
        setUser(response.data);
      } catch (error) {
        console.error("Failed to restore session:", error);
        logout();
      } finally {
        setLoading(false);
      }
    };

    restoreSession();
  }, [token]);

  if (loading) {
    return null;
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
