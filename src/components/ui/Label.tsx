interface LabelProps {
  children: React.ReactNode;
  htmlFor?: string;
}

export default function Label({ children, htmlFor }: LabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-2 block text-sm font-medium text-foreground"
    >
      {children}
    </label>
  );
}
