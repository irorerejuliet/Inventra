"use client";

import { usePathname } from "next/navigation";
import useAuth from "@/hooks/useAuth";

export default function Header() {
  const pathname = usePathname();
  const { user } = useAuth();

  const titles: Record<string, string> = {
    "/dashboard": "Dashboard",
    "/products": "Products",
    "/categories": "Categories",
    "/suppliers": "Suppliers",
  };

  return (
    <header className="flex h-20 items-center justify-between border-b bg-white px-8">
      <div>
        <h1 className="text-2xl font-bold">{titles[pathname] || "Inventra"}</h1>

        <p className="text-sm text-gray-500">Welcome back, {user?.name}</p>
      </div>

      <div className="text-right">
        <p className="font-semibold">{user?.name}</p>
        <p className="text-sm text-gray-500">{user?.email}</p>
      </div>
    </header>
  );
}
