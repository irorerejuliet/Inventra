import { FiEdit2, FiTrash2 } from "react-icons/fi";

interface Category {
  id: number;
  name: string;
  products: number;
  createdAt: string;
}

interface CategoryTableProps {
  categories: Category[];
}

export default function CategoryTable({ categories }: CategoryTableProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <table className="w-full">
        <thead className="border-b border-slate-200 bg-slate-50">
          <tr>
            <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
              Name
            </th>

            <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
              Products
            </th>

            <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
              Created
            </th>

            <th className="px-6 py-4 text-center text-sm font-semibold text-slate-600">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {categories.map((category) => (
            <tr
              key={category.id}
              className="border-b border-slate-100 transition hover:bg-slate-50"
            >
              <td className="px-6 py-4 font-medium text-slate-800">
                {category.name}
              </td>

              <td className="px-6 py-4 text-slate-600">{category.products}</td>

              <td className="px-6 py-4 text-slate-600">{category.createdAt}</td>

              <td className="px-6 py-4">
                <div className="flex items-center justify-center gap-3">
                  <button className="text-blue-600 transition hover:text-blue-700">
                    <FiEdit2 size={18} />
                  </button>

                  <button className="text-red-600 transition hover:text-red-700">
                    <FiTrash2 size={18} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
