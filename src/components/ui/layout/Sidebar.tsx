"use client";

import useAuth from "@/hooks/useAuth";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FiGrid, FiBox, FiTag, FiTruck } from "react-icons/fi";
import { FiLogOut } from "react-icons/fi";

const links = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: FiGrid,
  },
  {
    name: "Products",
    href: "/products",
    icon: FiBox,
  },
  {
    name: "Categories",
    href: "/categories",
    icon: FiTag,
  },
  {
    name: "Suppliers",
    href: "/suppliers",
    icon: FiTruck,
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const { logout } = useAuth();
  const router = useRouter();

  return (
    <aside className="flex w-64 flex-col border-r bg-white">
      <div className="border-b p-6">
        <h1 className="text-2xl font-bold text-primary">Inventra</h1>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {links.map((link) => {
          const Icon = link.icon;
          const active = pathname === link.href;

          return (
            <Link
              key={link.name}
              href={link.href}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 transition
                ${
                  active
                    ? "bg-primary text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
            >
              <Icon size={20} />
              <span>{link.name}</span>
            </Link>
          );
        })}
        <button
          onClick={() => {
            logout();
            router.push("/login");
          }}
          className="mt-auto flex w-full items-center gap-3 rounded-xl px-4 py-3 text-red-600 transition hover:bg-red-50"
        >
          <FiLogOut size={20} />
          Logout
        </button>
      </nav>
    </aside>
  );
}
