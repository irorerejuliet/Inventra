import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-lg font-bold text-white">
        I
      </div>

      <div>
        <h1 className="text-xl font-bold text-foreground">Inventra</h1>

        <p className="text-xs text-muted">Inventory Management</p>
      </div>
    </Link>
  );
}
