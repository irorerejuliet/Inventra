import Button from "./Button";

interface PageHeaderProps {
  title: string;
  description: string;
  buttonText: string;
  onButtonClick: () => void;
}

export default function PageHeader({
  title,
  description,
  buttonText,
  onButtonClick,
}: PageHeaderProps) {
  return (
    <div className="mb-8 flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">{title}</h1>

        <p className="mt-2 text-slate-500">{description}</p>
      </div>

      <Button onClick={onButtonClick}>+ {buttonText}</Button>
    </div>
  );
}
