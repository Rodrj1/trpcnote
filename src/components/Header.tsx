import { signIn, signOut, useSession } from "next-auth/react";

export default function Header() {
  return (
    <header>
      <nav className="flex h-[40px] items-center">
        <AuthShowcase />
      </nav>
    </header>
  );
}

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();

  return (
    <div className="flex items-center justify-center gap-4 w-full">
      <h1 className="prose text-sm font-normal text-green-400">
        {sessionData && <span>{sessionData.user?.name}</span>}
      </h1>

      <button
        className={`rounded-lg bg-green-600 px-10 py-1 font-semibold text-white no-underline transition ${
          sessionData ? "hover:bg-white/20" : "hover:bg-green-500"
        }`}
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};
