export function Button({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button className={`px-4 py-2 font-semibold rounded ${className}`}>
      {children}
    </button>
  );
}
