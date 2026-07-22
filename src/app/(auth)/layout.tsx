import type { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen bg-background">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* Left Side */}
        <section className="hidden bg-primary lg:flex lg:flex-col lg:justify-between lg:p-12">
          <div>
            <h1 className="text-3xl font-bold text-white">Inventra</h1>
            <p className="mt-2 text-blue-100">Smart Inventory Management</p>
          </div>

          <div className="max-w-md">
            <h2 className="text-4xl font-bold leading-tight text-white">
              Manage your inventory with confidence.
            </h2>

            <p className="mt-4 text-lg text-blue-100">
              Keep track of products, suppliers, categories, and stock levels
              from one intuitive dashboard.
            </p>
          </div>

          <p className="text-sm text-blue-200">
            © {new Date().getFullYear()} Inventra
          </p>
        </section>

        {/* Right Side */}
        <section className="flex items-center justify-center p-6">
          <div className="w-full max-w-md">{children}</div>
        </section>
      </div>
    </main>
  );
}
