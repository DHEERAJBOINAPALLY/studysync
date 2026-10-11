import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteNav } from "@/components/SiteNav";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Dashboard demo — StudySync" },
      { name: "description", content: "Try the StudySync dashboard: break down projects into micro-tasks, track habits and earn XP." },
      { property: "og:title", content: "Try the StudySync dashboard" },
      { property: "og:description", content: "Break projects into micro-tasks, track habits and earn XP." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Dashboard,
});

type Task = { id: number; text: string; day: number; done: boolean };

function breakdown(project: string, days: number): Task[] {
  const steps = ["Understand the brief & list requirements", "Research and collect sources", "Create an outline", "Draft the first section", "Draft the remaining sections", "Review and refine", "Final polish & submit"];
  const n = Math.max(3, Math.min(days, steps.length));
  const chosen = steps.filter((_, i) => i === 0 || i === steps.length - 1 || i < n - 1).slice(0, n);
  return chosen.map((s, i) => ({ id: i, text: `${project}: ${s}`, day: Math.round(((i + 1) * days) / n), done: false }));
}

function Dashboard() {
  const [tasks, setTasks] = useState<Task[]>(breakdown("History essay", 5));
  const [project, setProject] = useState("");
  const [days, setDays] = useState(7);
  const [habits, setHabits] = useState([
    { name: "Read 20 min", done: false, streak: 6 },
    { name: "Practice coding", done: false, streak: 12 },
    { name: "Review flashcards", done: false, streak: 3 },
  ]);

  const xp = tasks.filter((t) => t.done).length * 50 + habits.filter((h) => h.done).length * 20;
  const progress = tasks.length ? Math.round((tasks.filter((t) => t.done).length / tasks.length) * 100) : 0;

  return (
    <div className="min-h-screen">
      <SiteNav />
      <main className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm text-muted-foreground">Good evening 👋</p>
            <h1 className="text-4xl font-bold">Your study dashboard</h1>
          </div>
          <div className="flex gap-3">
            <Stat label="XP today" value={`+${xp}`} />
            <Stat label="Project progress" value={`${progress}%`} />
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <section className="rounded-2xl border bg-card p-6 lg:col-span-2">
            <h2 className="text-xl font-semibold">Break down a project</h2>
            <form
              className="mt-4 flex flex-wrap gap-3"
              onSubmit={(e) => {
                e.preventDefault();
                if (!project.trim()) return;
                setTasks(breakdown(project.trim(), days));
                setProject("");
              }}
            >
              <input value={project} onChange={(e) => setProject(e.target.value)} placeholder="e.g. Biology lab report" className="min-w-0 flex-1 rounded-xl border bg-background px-4 py-3 outline-none focus:border-primary" />
              <select value={days} onChange={(e) => setDays(Number(e.target.value))} className="rounded-xl border bg-background px-3 py-3">
                {[3, 5, 7, 14].map((d) => <option key={d} value={d}>{d} days</option>)}
              </select>
              <button className="rounded-xl bg-primary px-5 py-3 font-semibold text-primary-foreground">Break it down</button>
            </form>
            <ul className="mt-6 space-y-2">
              {tasks.map((t) => (
                <li key={t.id}>
                  <button onClick={() => setTasks((ts) => ts.map((x) => (x.id === t.id ? { ...x, done: !x.done } : x)))} className="flex w-full items-center gap-3 rounded-xl bg-muted px-4 py-3 text-left text-sm hover:bg-secondary">
                    <span className={`h-5 w-5 shrink-0 rounded-full border-2 ${t.done ? "border-primary bg-primary" : "border-muted-foreground"}`} />
                    <span className={`flex-1 ${t.done ? "text-muted-foreground line-through" : ""}`}>{t.text}</span>
                    <span className="text-xs text-accent">Day {t.day}</span>
                  </button>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-2xl border bg-card p-6">
            <h2 className="text-xl font-semibold">Daily habits</h2>
            <ul className="mt-4 space-y-3">
              {habits.map((h, i) => (
                <li key={h.name}>
                  <button onClick={() => setHabits((hs) => hs.map((x, j) => (j === i ? { ...x, done: !x.done, streak: x.streak + (x.done ? -1 : 1) } : x)))} className={`flex w-full items-center justify-between rounded-xl border px-4 py-3 text-sm ${h.done ? "border-primary bg-primary/10" : ""}`}>
                    <span>{h.name}</span>
                    <span className="text-accent">🔥 {h.streak}</span>
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <h3 className="font-semibold">Goal: Ace finals</h3>
              <div className="mt-3 h-2 rounded-full bg-muted"><div className="h-2 rounded-full bg-primary transition-all" style={{ width: `${Math.min(100, 40 + progress / 2)}%` }} /></div>
              <p className="mt-2 text-xs text-muted-foreground">Completing tasks moves your long-term goal forward.</p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border bg-card px-5 py-3">
      <p className="text-xs text-muted-foreground">{label}</p>
      <p className="font-display text-2xl font-bold text-primary">{value}</p>
    </div>
  );
}
