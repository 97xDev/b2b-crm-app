export function Card({ children }: { children: React.ReactNode }) {
  return <div className="bg-gray-800 shadow-md rounded-lg p-6">{children}</div>;
}

export function CardContent({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
