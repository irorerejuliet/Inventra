import DashboardPage from "@/components/dashboard/DashboardPage";
import ProtectedRoute from "@/components/features/auth/ProtectedRoute"

const page = () => {
  return (
    <ProtectedRoute>
      <DashboardPage/>
    </ProtectedRoute>
  );
}

export default page
