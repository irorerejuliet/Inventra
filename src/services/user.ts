// This service has one responsibility which is to fetch the current authenticated user
import api from "@/lib/api";

export  const getMe = async () => {
    const response = await api.get("/auth/me");

    return response.data
}