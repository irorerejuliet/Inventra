import clsx from "clsx";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className }: CardProps) {
  return (
    <div
      className={clsx(
        "mt-40 rounded-2xl border border-border bg-card p-8 shadow-sm",
        className,
      )}
    >
      {children}
    </div>
  );
}
