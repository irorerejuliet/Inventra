"use client";

import { createContext } from "react";
import { User } from "@/types/user";

export interface AuthContextType {
  user: User | null;
  token: string | null;

  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
}

export const AuthContext = createContext<AuthContextType | null>(null);
