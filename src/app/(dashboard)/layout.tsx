// Now every page inside (dashboard) will automatically get: without repeating any code.

import DashboardLayout from "@/components/ui/layout/DashboardLayout";


export default function Layout({ children }: { children: React.ReactNode }) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
