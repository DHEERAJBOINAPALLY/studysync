import { Link } from "@tanstack/react-router";

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="font-display text-xl font-bold">
          Study<span className="text-primary">Sync</span>
        </Link>
        <div className="flex items-center gap-6 text-sm">
          <Link to="/" className="text-muted-foreground hover:text-foreground" activeProps={{ className: "text-foreground" }} activeOptions={{ exact: true }}>Home</Link>
          <Link to="/roadmap" className="text-muted-foreground hover:text-foreground" activeProps={{ className: "text-foreground" }}>Roadmap</Link>
          <Link to="/dashboard" className="rounded-full bg-primary px-4 py-2 font-semibold text-primary-foreground hover:opacity-90">Try dashboard</Link>
        </div>
      </nav>
    </header>
  );
}
