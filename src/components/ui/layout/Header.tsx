"use client";

import useAuth from "@/hooks/useAuth";

export default function Header() {
  const { user } = useAuth();

  return (
    <header className="flex h-20 items-center justify-between border-b border-border bg-white px-8">
      <div>
        <h2 className="text-xl font-semibold">Dashboard</h2>
      </div>

      <div className="text-right">
        <p className="font-semibold">{user?.name}</p>

        <p className="text-sm text-muted">{user?.email}</p>
      </div>
    </header>
  );
}
