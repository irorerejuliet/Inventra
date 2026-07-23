import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { FiRefreshCw } from "react-icons/fi";

interface CategoryToolbarProps {
  search: string;
  onSearchChange: (value: string) => void;
  onRefresh: () => void;
}

export default function CategoryToolbar({
  search,
  onSearchChange,
  onRefresh,
}: CategoryToolbarProps) {
  return (
    <div className="flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm md:flex-row md:items-center md:justify-between">
      <Input
        type="text"
        placeholder="Search categories..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        className="md:w-80"
      />

      <Button
        variant="outline"
        onClick={onRefresh}
        className="flex items-center gap-2"
      >
        <FiRefreshCw />
        Refresh
      </Button>
    </div>
  );
}
