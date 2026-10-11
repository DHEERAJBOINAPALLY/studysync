import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "StudySync — One AI dashboard for your whole study life" },
      { name: "description", content: "Stop switching apps. StudySync unites habits, assignments, skills and goals in one gamified, AI-powered dashboard for students." },
      { property: "og:title", content: "StudySync — Stop switching apps" },
      { property: "og:description", content: "Habits, assignments, skills and goals in one AI-powered dashboard for students." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const problems = [
  { t: "Burnout", d: "Juggling five apps for homework, habits, notes and group work drains energy before studying starts." },
  { t: "Anxiety", d: "Constant context switching leaves you feeling behind, even on good days." },
  { t: "Missed deadlines", d: "Long-term goals get lost in the noise of daily tasks." },
  { t: "Procrastination", d: "Huge, unorganized assignments feel scary — so they get pushed to tomorrow." },
];

const features = [
  { n: "01", t: "AI Assignment Breakdown", d: "Paste a massive project. Get daily, bite-sized micro-tasks you can actually start." },
  { n: "02", t: "Habit & Goal Tracker", d: "Daily habit loops blended with academic targets, so consistency becomes automatic." },
  { n: "03", t: "Smart Unified Dashboard", d: "One pane of glass for deadlines, streaks and progress. Nothing slips." },
  { n: "04", t: "Gamified Motivation", d: "XP, levels and streaks that keep your motivation alive through exam season." },
];

function Index() {
  return (
    <div className="min-h-screen">
      <SiteNav />

      <section className="relative overflow-hidden">
        <div className="grid-bg absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-2">
          <div>
            <span className="rounded-full border px-3 py-1 text-xs uppercase tracking-widest text-primary">Built for students</span>
            <h1 className="mt-6 text-5xl font-bold leading-[1.02] md:text-7xl">
              Stop switching apps.<br /><span className="text-primary">Start studying.</span>
            </h1>
            <p className="mt-6 max-w-md text-lg text-muted-foreground">
              StudySync brings your habits, assignments, skills and long-term goals into one gamified dashboard — and lets AI organize the rest.
            </p>
            <div className="mt-8 flex gap-3">
              <Link to="/dashboard" className="rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-glow hover:opacity-90">Open the dashboard</Link>
              <Link to="/roadmap" className="rounded-full border px-6 py-3 font-semibold hover:bg-secondary">See the roadmap</Link>
            </div>
          </div>
          <MockDashboard />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-sm uppercase tracking-widest text-accent">The problem</p>
        <h2 className="mt-3 max-w-2xl text-4xl font-bold md:text-5xl">A student's digital life right now? Chaos.</h2>
        <div className="mt-12 grid gap-4 md:grid-cols-4">
          {problems.map((p) => (
            <div key={p.t} className="rounded-2xl border bg-card p-6">
              <h3 className="text-xl font-semibold text-warn">{p.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y bg-card/50">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-sm uppercase tracking-widest text-primary">The solution</p>
          <h2 className="mt-3 max-w-3xl text-4xl font-bold md:text-5xl">One app. Let AI organize your routine, predict bottlenecks and keep you going.</h2>
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border bg-border md:grid-cols-2">
            {features.map((f) => (
              <div key={f.n} className="bg-background p-8 transition-colors hover:bg-card">
                <span className="font-display text-sm text-primary">{f.n}</span>
                <h3 className="mt-4 text-2xl font-semibold">{f.t}</h3>
                <p className="mt-3 text-muted-foreground">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-28 text-center">
        <h2 className="text-4xl font-bold md:text-6xl">Less stress. More progress. <span className="text-primary">Lifelong habits.</span></h2>
        <Link to="/dashboard" className="mt-10 inline-block rounded-full bg-primary px-8 py-4 font-semibold text-primary-foreground shadow-glow">Try StudySync free</Link>
      </section>

      <footer className="border-t py-8 text-center text-sm text-muted-foreground">© {new Date().getFullYear()} StudySync</footer>
    </div>
  );
}

function MockDashboard() {
  return (
    <div className="rounded-3xl border bg-card p-6 shadow-glow">
      <div className="flex items-center justify-between">
        <p className="font-display font-semibold">Today</p>
        <span className="rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">🔥 12-day streak</span>
      </div>
      <div className="mt-5 space-y-3">
        {[["Physics project · outline sources", true], ["Read chapter 4 (20 min)", true], ["Python: loops practice", false], ["Draft essay intro", false]].map(([t, done]) => (
          <div key={t as string} className="flex items-center gap-3 rounded-xl bg-muted px-4 py-3 text-sm">
            <span className={`h-4 w-4 rounded-full border-2 ${done ? "border-primary bg-primary" : "border-muted-foreground"}`} />
            <span className={done ? "text-muted-foreground line-through" : ""}>{t}</span>
          </div>
        ))}
      </div>
      <div className="mt-5">
        <div className="flex justify-between text-xs text-muted-foreground"><span>Level 7 · 640 / 1000 XP</span><span>Exam in 9 days</span></div>
        <div className="mt-2 h-2 rounded-full bg-muted"><div className="h-2 w-[64%] rounded-full bg-primary" /></div>
      </div>
    </div>
  );
}
