"use client";

import Link from "next/link";

const links = [
  {
    name: "Dashboard",
    href: "/dashboard",
  },
  {
    name: "Products",
    href: "/products",
  },
  {
    name: "Categories",
    href: "/categories",
  },
  {
    name: "Suppliers",
    href: "/suppliers",
  },
];

export default function Sidebar() {
  return (
    <aside className="w-64 border-r border-border bg-white">
      <div className="border-b border-border p-6">
        <h1 className="text-2xl font-bold text-primary">Inventra</h1>
      </div>

      <nav className="space-y-2 p-4">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="block rounded-lg px-4 py-3 transition hover:bg-gray-100"
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
