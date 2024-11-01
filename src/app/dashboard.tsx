// pages/dashboard.tsx
import { useSession } from "next-auth/react";

export default function Dashboard() {
  const { data: session } = useSession();

  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-4xl">Hello, {session?.user?.name || 'World'}!</h1>
    </div>
  );
}
