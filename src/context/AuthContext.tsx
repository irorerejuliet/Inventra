"use client";

import { createContext } from "react";
import { User } from "@/types/user";

export interface AuthContextType {
  user: User | null;
  token: string | null;
  loading: boolean;

  login: (token: string, user: User) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);
