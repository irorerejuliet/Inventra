"use client";

import { useState } from "react";
import PageHeader from "@/components/ui/PageHeader";
import CategoryToolbar from "@/components/features/categories/CategoryToolbar";
import CategoryTable from "@/components/features/categories/CategoryTable";

const fakeCategories = [
  {
    id: 1,
    name: "Electronics",
    products: 24,
    createdAt: "Jul 22, 2026",
  },
  {
    id: 2,
    name: "Furniture",
    products: 15,
    createdAt: "Jul 21, 2026",
  },
  {
    id: 3,
    name: "Office Supplies",
    products: 42,
    createdAt: "Jul 20, 2026",
  },
];

export default function CategoriesPage() {
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-6">
      <PageHeader
        title="Categories"
        description="Manage all product categories in your inventory."
        buttonText="Add Category"
        onButtonClick={() => setOpen(true)}
      />

      <CategoryToolbar
        search={search}
        onSearchChange={setSearch}
        onRefresh={() => console.log("Refresh categories")}
      />

      <CategoryTable categories={fakeCategories} />
    </div>
  );
}
