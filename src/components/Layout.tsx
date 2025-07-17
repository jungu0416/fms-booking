export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen w-screen justify-center bg-slate-400">
      <div className="w-full max-w-md bg-gray-100 p-4">{children}</div>
    </div>
  );
}
