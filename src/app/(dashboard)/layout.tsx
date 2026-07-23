// Now every page inside (dashboard) will automatically get: without repeating any code.

import ProtectedRoute from "@/components/features/auth/ProtectedRoute";
import DashboardLayout from "@/components/ui/layout/DashboardLayout";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ProtectedRoute>
      <DashboardLayout>{children}</DashboardLayout>
    </ProtectedRoute>
  );
}