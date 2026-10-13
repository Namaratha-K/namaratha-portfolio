"use client";

import { useEffect, useRef, useState } from "react";

const contributions = [
  {
    id: "development",
    number: "01",
    title: "Automation Development",
    icon: "⌘",
    summary: "Contributed to the development and evolution of the solution.",
    detail:
      "Contributed across V0–V14 of the Cash Flow Process Automation solution, helping evolve the workflow through successive iterations.",
    skills: ["Power Automate", "Workflow Design", "Process Automation"],
  },
  {
    id: "matching",
    number: "02",
    title: "Transaction Matching",
    icon: "⌁",
    summary: "Connected bank statement transactions with Bill.com records.",
    detail:
      "Implemented transaction-matching logic involving date standardisation and amount-based matching, including cases where one bank transaction corresponded to multiple Bill.com transactions.",
    skills: ["Data Reconciliation", "Date Standardisation", "Matching Logic"],
  },
  {
    id: "transformation",
    number: "03",
    title: "Data Transformation",
    icon: "▤",
    summary: "Built reusable Power Query templates for bank statement processing.",
    detail:
      "Developed reusable Power Query templates to standardise varying bank statement formats and transform source data into a consistent structure for downstream processing.",
    skills: ["Power Query", "Data Cleaning", "Reusable Templates"],
  },
  {
    id: "workbook",
    number: "04",
    title: "Workbook Automation",
    icon: "▦",
    summary: "Automated dynamic updates to the cash-flow workbook.",
    detail:
      "Worked on dynamic row operations, category mapping using lookup logic, formula management, and updates to the appropriate workbook sections.",
    skills: ["Excel Automation", "Lookup Logic", "Formula Management"],
  },
  {
  id: "stakeholders",
  number: "05",
  title: "Stakeholder Management",
  icon: "◎",
  summary: "Coordinated stakeholder communication and client onboarding.",
  detail:
    "Worked with 50+ stakeholders across client onboarding and process coordination, helping align reporting requirements, inputs, and automation workflows.",
  skills: [
    "Stakeholder Communication",
    "Client Onboarding",
    "Requirements Coordination",
  ],
},
];

export default function RoleRecognition() {
  const [activeId, setActiveId] = useState("development");
  const mapRef = useRef<HTMLDivElement>(null);
const cardRefs = useRef<(HTMLButtonElement | null)[]>([]);
const nodeRef = useRef<HTMLDivElement>(null);

const [connectors, setConnectors] = useState<
  { id: string; d: string }[]
>([]);
const [mapSize, setMapSize] = useState({ width: 0, height: 0 });

  const activeContribution =
    contributions.find((item) => item.id === activeId) ?? contributions[0];

    useEffect(() => {
  const map = mapRef.current;
  const node = nodeRef.current;

  if (!map || !node) return;

  const updateConnectors = () => {
    const mapRect = map.getBoundingClientRect();
    setMapSize({
  width: mapRect.width,
  height: mapRect.height,
});
    const nodeRect = node.getBoundingClientRect();

    const nodeLeft = nodeRect.left - mapRect.left;
    const nodeRight = nodeRect.right - mapRect.left;
    const nodeCenterY =
      nodeRect.top + nodeRect.height / 2 - mapRect.top;
    const nodeTopY = nodeRect.top - mapRect.top;
const nodeBottomY = nodeRect.bottom - mapRect.top;

const nodeUpperY = nodeTopY + nodeRect.height * 0.25;
const nodeLowerY = nodeTopY + nodeRect.height * 0.75;

    const nextConnectors = contributions.map((item, index) => {
      const card = cardRefs.current[index];

      if (!card) return { id: item.id, d: "" };

      const rect = card.getBoundingClientRect();

      const isLeft = index < 2;

      const cardCenterY =
  rect.top + rect.height / 2 - mapRect.top;

const startX = isLeft
  ? rect.right - mapRect.left
  : nodeRight;

const startY = isLeft
  ? cardCenterY
  : index === 2
    ? nodeUpperY
    : index === 3
      ? nodeCenterY
      : nodeLowerY;
const endX = isLeft
  ? nodeLeft
  : rect.left - mapRect.left;

const endY = isLeft
  ? nodeCenterY
  : cardCenterY;

      const distance = Math.abs(endX - startX);
const curve = Math.min(distance * 0.4, 55);

const direction = endX >= startX ? 1 : -1;

const bend = Math.min(distance * 0.45, 65);

const d = `M ${startX} ${startY} C ${
  startX + bend * direction
} ${startY}, ${
  endX - bend * direction
} ${endY}, ${endX} ${endY}`;

      return { id: item.id, d };
    });

    setConnectors(nextConnectors);
  };

  updateConnectors();

  const observer = new ResizeObserver(updateConnectors);
  observer.observe(map);
  observer.observe(node);

  cardRefs.current.forEach((card) => {
    if (card) observer.observe(card);
  });

  window.addEventListener("resize", updateConnectors);

  return () => {
    observer.disconnect();
    window.removeEventListener("resize", updateConnectors);
  };
}, []);

  return (
    <section className="border-t border-[var(--border)] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">
          My Role & Recognition
        </p>

        <div className="grid gap-12 lg:grid-cols-[1.35fr_0.85fr] lg:gap-16">
          {/* LEFT: CONTRIBUTION MAP */}
          <div>
            <h2 className="max-w-xl text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
              From development
              <br />
              to <span className="text-[var(--accent)]">delivery.</span>
            </h2>

            <p className="mt-6 max-w-2xl leading-7 text-[var(--muted)]">
              Contributed to the development and evolution of the Cash Flow
              Process Automation solution, helping streamline recurring
              financial reporting workflows for 36+ clients.
            </p>

            {/* ENGINEERING CONTRIBUTION MAP */}
<div className="relative mt-12">

  {/* Desktop contribution map */}
  <div
  ref={mapRef}
  className="relative hidden lg:grid lg:grid-cols-[280px_150px_280px] lg:items-center lg:justify-center lg:gap-x-5"
>

    {/* Connector lines */}
<svg
  className="pointer-events-none absolute inset-0 z-0 h-full w-full overflow-visible"
  fill="none"
  aria-hidden="true"
>
  {connectors.map((line) => (
    <path
      key={line.id}
      d={line.d}
      stroke="var(--accent)"
      strokeWidth="1.5"
      strokeLinecap="round"
      opacity={activeId === line.id ? 1 : 0.35}
      vectorEffect="non-scaling-stroke"
    />
  ))}
</svg>

    {/* Left contribution cards */}
    <div className="relative z-10 flex flex-col gap-5">
      {contributions.slice(0, 2).map((item) => {
        const isActive = activeId === item.id;

        return (
          <button
            ref={(el) => {
  cardRefs.current[contributions.findIndex((c) => c.id === item.id)] = el;
}}
            key={item.id}
            type="button"
            onClick={() => setActiveId(item.id)}
            aria-pressed={isActive}
            className={`group h-32 rounded-xl border p-4 text-left transition-all duration-300 ${
              isActive
                ? "border-[var(--accent)] bg-[var(--accent)]/[0.08] shadow-[0_0_28px_rgba(220,38,38,0.12)]"
                : "border-[var(--border)] bg-[var(--surface)] hover:border-[var(--accent)]/60"
            }`}
          >
            <div className="flex items-start justify-between">
              <span
                className={`text-2xl ${
                  isActive
                    ? "text-[var(--accent)]"
                    : "text-[var(--muted)] group-hover:text-[var(--accent)]"
                }`}
                aria-hidden="true"
              >
                {item.icon}
              </span>

              <span className="text-xs tracking-widest text-[var(--muted)]">
                {item.number}
              </span>
            </div>

            <h3 className="mt-2 text-base font-medium">
              {item.title}
            </h3>

            <span
              className={`mt-2 inline-block text-xs ${
                isActive
                  ? "text-[var(--accent)]"
                  : "text-[var(--muted)]"
              }`}
            >
              {isActive ? "Selected ↗" : "Explore ↗"}
            </span>
          </button>
        );
      })}
    </div>

    {/* Central automation node */}
<div
  ref={nodeRef}
  className="relative z-10 flex min-h-40 w-[150px] flex-col items-center justify-center rounded-3xl border border-[var(--accent)] bg-[var(--surface)] px-3 text-center shadow-[0_0_30px_rgba(220,38,38,0.10)]"
>
  <span
    className="mb-4 text-3xl text-[var(--accent)]"
    aria-hidden="true"
  >
    ⚙
  </span>

  <p className="text-xs font-semibold uppercase leading-5 tracking-wider">
    Cash Flow
    <br />
    Process
    <br />
    Automation
  </p>

  <span className="mt-3 h-1 w-8 rounded-full bg-[var(--accent)]" />
</div>



    {/* Right contribution cards */}
    <div className="relative z-10 flex flex-col gap-5">
      {contributions.slice(2, 5).map((item) => {
        const isActive = activeId === item.id;

        return (
          <button
          ref={(el) => {
  cardRefs.current[contributions.findIndex((c) => c.id === item.id)] = el;
}}
            key={item.id}
            type="button"
            onClick={() => setActiveId(item.id)}
            aria-pressed={isActive}
            className={`group h-32 rounded-xl border p-4 text-left transition-all duration-300 ${
              isActive
                ? "border-[var(--accent)] bg-[var(--accent)]/[0.08] shadow-[0_0_28px_rgba(220,38,38,0.12)]"
                : "border-[var(--border)] bg-[var(--surface)] hover:border-[var(--accent)]/60"
            }`}
          >
            <div className="flex items-start justify-between">
              <span
                className={`text-xl ${
                  isActive
                    ? "text-[var(--accent)]"
                    : "text-[var(--muted)] group-hover:text-[var(--accent)]"
                }`}
                aria-hidden="true"
              >
                {item.icon}
              </span>

              <span className="text-xs tracking-widest text-[var(--muted)]">
                {item.number}
              </span>
            </div>

            <h3 className="mt-2 text-base font-medium">
              {item.title}
            </h3>

            <span
              className={`mt-2 inline-block text-xs ${
                isActive
                  ? "text-[var(--accent)]"
                  : "text-[var(--muted)]"
              }`}
            >
              {isActive ? "Selected ↗" : "Explore ↗"}
            </span>
          </button>
        );
      })}
    </div>
  </div>

  {/* Responsive layout for smaller screens */}
  <div className="grid gap-3 sm:grid-cols-2 lg:hidden">
    {contributions.map((item) => {
      const isActive = activeId === item.id;

      return (
        <button
          key={item.id}
          type="button"
          onClick={() => setActiveId(item.id)}
          aria-pressed={isActive}
          className={`rounded-2xl border p-5 text-left transition-all duration-300 ${
            isActive
              ? "border-[var(--accent)] bg-[var(--accent)]/[0.08]"
              : "border-[var(--border)] bg-[var(--surface)] hover:border-[var(--accent)]/60"
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="text-xl text-[var(--accent)]" aria-hidden="true">
              {item.icon}
            </span>

            <span className="text-xs tracking-widest text-[var(--muted)]">
              {item.number}
            </span>
          </div>

          <h3 className="mt-4 font-medium">{item.title}</h3>

          <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
            {item.summary}
          </p>

          <span
            className={`mt-2 inline-block text-xs ${
              isActive ? "text-[var(--accent)]" : "text-[var(--muted)]"
            }`}
          >
            {isActive ? "Selected ↗" : "Explore ↗"}
          </span>
        </button>
      );
    })}
  </div>
</div>

            {/* INTERACTIVE DETAIL PANEL */}
            <div
              key={activeContribution.id}
              className="mt-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8"
            >
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold tracking-widest text-[var(--accent)]">
                  {activeContribution.number}
                </span>

                <span className="h-px flex-1 bg-[var(--border)]" />

                <span className="text-xs uppercase tracking-widest text-[var(--muted)]">
                  Contribution Detail
                </span>
              </div>

              <h3 className="mt-6 text-2xl font-medium">
                {activeContribution.title}
              </h3>

              <p className="mt-4 leading-7 text-[var(--muted)]">
                {activeContribution.detail}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {activeContribution.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-[var(--accent)]/50 bg-[var(--accent)]/10 px-3 py-1.5 text-xs text-[var(--foreground)] transition-colors duration-300 hover:border-[var(--accent)] hover:bg-[var(--accent)]/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* OUTCOME */}
            <div className="mt-8 border-t border-[var(--border)] pt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                Outcome
              </p>

              <p className="mt-3 leading-7">
                Streamlined recurring financial reporting workflows for{" "}
                <span className="font-semibold text-[var(--accent)]">
                  36+ clients.
                </span>
              </p>
            </div>
          </div>

          {/* RIGHT: RECOGNITION SPOTLIGHT */}
          <div className="h-fit rounded-3xl border border-[var(--accent)]/50 bg-gradient-to-b from-[var(--accent)]/[0.10] to-[var(--surface)] p-7 sm:p-10 lg:sticky lg:top-24">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
              Recognition
            </p>

            <div className="mt-10 text-center">
              <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-[var(--accent)]/40 bg-[var(--accent)]/[0.08]">
                <svg
                  viewBox="0 0 64 64"
                  fill="none"
                  className="h-16 w-16 text-[var(--accent)]"
                  aria-hidden="true"
                >
                  <path
                    d="M20 9h24v17c0 10-5 17-12 17s-12-7-12-17V9Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M20 15H10v9c0 8 5 13 13 13M44 15h10v9c0 8-5 13-13 13M32 43v9m-10 3h20M26 55h12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="m32 15 3 6 6 1-4.5 4.5 1 6.5-5.5-3-5.5 3 1-6.5L23 22l6-1 3-6Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <h3 className="mt-8 text-3xl font-medium leading-tight sm:text-4xl">
                Transformation
                <br />
                Excellence Award
              </h3>

              <div className="mx-auto mt-6 h-1 w-12 rounded-full bg-[var(--accent)]" />

              <p className="mt-6 leading-7 text-[var(--muted)]">
                Recognised for my contribution to the Cash Flow Process
                Automation prototype.
              </p>
            </div>

            <div className="mt-10 rounded-2xl border border-[var(--border)] bg-[var(--background)]/50 p-5">
              <div className="flex gap-4">
                <span
                  className="mt-1 text-xl text-[var(--accent)]"
                  aria-hidden="true"
                >
                  ↗
                </span>

                <div>
                  <p className="text-sm leading-6 text-[var(--muted)]">
                    The prototype was subsequently presented to international
                    leadership by the Managing Director.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}