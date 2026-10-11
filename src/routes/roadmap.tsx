import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";

export const Route = createFileRoute("/roadmap")({
  head: () => ({
    meta: [
      { title: "Roadmap — StudySync" },
      { name: "description", content: "Where StudySync is headed: MVP dashboard, predictive deadline alerts, and collaborative group spaces." },
      { property: "og:title", content: "StudySync Roadmap" },
      { property: "og:description", content: "MVP dashboard, predictive deadline alerts and collaborative group spaces." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Roadmap,
});

const phases = [
  { p: "Phase 1", t: "Core MVP dashboard", d: "Unified habits, assignments, goals and AI task breakdown.", now: true },
  { p: "Phase 2", t: "Predictive deadline alerts", d: "AI spots bottlenecks before they happen and nudges you early." },
  { p: "Phase 3", t: "Collaborative group spaces", d: "Shared projects, split tasks and team streaks for group work." },
];

function Roadmap() {
  return (
    <div className="min-h-screen">
      <SiteNav />
      <main className="mx-auto max-w-3xl px-6 py-24">
        <p className="text-sm uppercase tracking-widest text-primary">Future roadmap</p>
        <h1 className="mt-3 text-5xl font-bold">We aren't stopping here.</h1>
        <ol className="mt-14 space-y-6 border-l pl-8">
          {phases.map((ph) => (
            <li key={ph.p} className="relative">
              <span className={`absolute -left-[41px] top-2 h-4 w-4 rounded-full ${ph.now ? "bg-primary shadow-glow" : "border-2 bg-background"}`} />
              <div className="rounded-2xl border bg-card p-6">
                <p className="text-sm text-primary">{ph.p}{ph.now && " · in progress"}</p>
                <h2 className="mt-2 text-2xl font-semibold">{ph.t}</h2>
                <p className="mt-2 text-muted-foreground">{ph.d}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-16 text-xl text-muted-foreground">
          Ultimately, StudySync is about empowering students to <span className="text-foreground">cut down stress, boost productivity and build lifelong learning habits.</span>
        </p>
      </main>
    </div>
  );
}
