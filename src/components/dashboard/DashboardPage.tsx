import StatCard from "@/components/dashboard/StatCard";
import { FiBox, FiTag, FiTruck, FiDollarSign } from "react-icons/fi";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>

        <p className="text-gray-500">Here&apos;s an overview of your inventory.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatCard title="Products" value={0} icon={FiBox} />

        <StatCard title="Categories" value={0} icon={FiTag} />

        <StatCard title="Suppliers" value={0} icon={FiTruck} />

        <StatCard title="Stock Value" value="$0" icon={FiDollarSign} />
      </div>
    </div>
  );
}
