
import api from "@/lib/api";
import { LoginFormData } from "@/types/auth";

export const login = async (data: LoginFormData) => {
  const response = await api.post("/auth/login", data);

  return response.data;
};
