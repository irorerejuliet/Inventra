import { IconType } from "react-icons";

interface StatCardProps {
  title: string;
  value: number | string;
  icon: IconType;
}

export default function StatCard({ title, value, icon: Icon }: StatCardProps) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-md">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">{title}</p>

          <h2 className="mt-2 text-3xl font-bold">{value}</h2>
        </div>

        <div className="rounded-xl bg-primary/10 p-4 text-primary">
          <Icon size={24} />
        </div>
      </div>
    </div>
  );
}
