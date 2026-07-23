"use client";

import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/context/AuthContext";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const auth = useContext(AuthContext);

  if (!auth) {
    throw new Error("ProtectedRoute must be used inside AuthProvider");
  }

  const { token, loading } = auth;
  const router = useRouter();

  useEffect(() => {
    if (!loading && !token) {
      router.replace("/login");
    }
  }, [loading, token, router]);

  console.log("ProtectedRoute:", {
    loading,
    token,
  });

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  if (!token) {
    return null;
  }

  return <>{children}</>;
}
