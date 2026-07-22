import LoginForm from "@/components/features/auth/LoginForm";
import PublicRoute from "@/components/features/auth/PublicRoute";

export default function LoginPage() {
  return (
    <PublicRoute>
      <LoginForm />
    </PublicRoute>
  );;
}
