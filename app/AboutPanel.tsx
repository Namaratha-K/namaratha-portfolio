"use client";

import { useEffect, useState } from "react";

const states = ["Background", "Aspiration", "Tech Stack"] as const;

export default function AboutPanel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % states.length);
    }, 40000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="about"
      className="mx-auto max-w-7xl px-6 py-32 lg:px-10"
    >
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch lg:gap-20">

        {/* Visual */}
        <div className="relative min-h-[420px] overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)]">

          {/* Background visual */}
{active === 0 && (
  <div className="flex h-full min-h-[420px] items-center justify-center p-10">
    <div className="w-full max-w-sm">
      <p className="mb-10 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--accent)]">
        The journey
      </p>

      <div className="relative">
        {[
          ["01", "Automation"],
          ["02", "Systems"],
          ["03", "Data"],
          ["04", "Analytics"],
        ].map(([number, label], index) => (
          <div
            key={label}
            className="relative flex items-center gap-5"
          >
            {/* Number */}
            <div className="flex w-8 shrink-0 justify-center">
              <span className="text-xs text-[var(--accent)]">
                {number}
              </span>
            </div>

            {/* Node + line */}
            <div className="relative flex flex-1 items-center">
              <div
                className={`h-2 w-2 shrink-0 rounded-full ${
                  index === 3
                    ? "bg-[var(--accent)]"
                    : "bg-[var(--foreground)]"
                }`}
              />

              <div className="h-px flex-1 bg-[var(--border)]" />

              <span
                className={`text-lg tracking-tight ${
                  index === 3
                    ? "text-[var(--accent)]"
                    : "text-[var(--foreground)]"
                }`}
              >
                {label}
              </span>
            </div>

            {/* Vertical connector */}
            {index < 3 && (
              <div className="absolute left-[19px] top-5 h-8 w-px bg-[var(--accent)]/40" />
            )}
          </div>
        ))}
      </div>

      <p className="mt-12 max-w-xs text-sm leading-7 text-[var(--muted)]">
        Learning to see the systems behind the numbers.
      </p>
    </div>
  </div>
)}

{/* Aspiration visual */}
{active === 1 && (
  <div className="flex h-full min-h-[420px] items-center justify-center p-10">
    <div className="relative h-72 w-full max-w-sm">

      {/* Domain labels */}

      <div className="absolute left-0 top-6 text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
        Data
      </div>

      <div className="absolute right-0 top-6 text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
        Business
      </div>

      <div className="absolute left-0 bottom-14 text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
        Technology
      </div>

      <div className="absolute right-0 bottom-14 text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
        Creativity
      </div>

      {/* Central labels */}

      <div className="absolute left-1/2 top-[42%] z-10 -translate-x-1/2 -translate-y-1/2 text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
          Connections
        </p>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
        Insight
      </div>

      {/* Connection diagram */}

      <svg
        viewBox="0 0 400 300"
        className="absolute inset-0 h-full w-full"
        fill="none"
        aria-hidden="true"
      >
        {/* Domain → Connections */}

        <path
          d="M55 48 C115 55, 135 105, 200 150"
          stroke="var(--border)"
          strokeWidth="1.5"
        />

        <path
          d="M345 48 C285 55, 265 105, 200 150"
          stroke="var(--border)"
          strokeWidth="1.5"
        />

        <path
          d="M55 245 C115 235, 140 195, 200 150"
          stroke="var(--border)"
          strokeWidth="1.5"
        />

        <path
          d="M345 245 C285 235, 260 195, 200 150"
          stroke="var(--border)"
          strokeWidth="1.5"
        />

        {/* Connections → Insight */}

        <path
          d="M200 150 C205 190, 205 220, 200 270"
          stroke="var(--accent)"
          strokeWidth="1.5"
        />

        {/* Domain nodes */}

        <circle
          cx="55"
          cy="48"
          r="5"
          fill="var(--foreground)"
        />

        <circle
          cx="345"
          cy="48"
          r="5"
          fill="var(--foreground)"
        />

        <circle
          cx="55"
          cy="245"
          r="5"
          fill="var(--foreground)"
        />

        <circle
          cx="345"
          cy="245"
          r="5"
          fill="var(--foreground)"
        />

        {/* Central connection node */}

        <circle
          cx="200"
          cy="150"
          r="7"
          fill="var(--accent)"
        />

        {/* Insight node */}

        <circle
          cx="200"
          cy="270"
          r="5"
          fill="var(--foreground)"
        />
      </svg>

      <div className="absolute bottom-[-45px] left-0 text-sm text-[var(--muted)]">
  Different domains. One connected perspective.
</div>
    </div>
  </div>
)}

          {/* Tech Stack visual */}
          {active === 2 && (
            <div className="flex h-full min-h-[420px] items-center justify-center p-8">
              <div className="w-full max-w-md">

                <p className="mb-8 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--accent)]">
                  Tools I work with
                </p>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  
{[
  "SQL",
  "Python",
  "Pandas",
  "EDA",
  "Advanced Excel",
  "Google Sheets",
  "ETL",
  "Power Query",
  "Power BI (DAX)",
  "Tableau",
  "Matplotlib",
  "Power Automate",
  "n8n",
  "Jira",
  "Google Colab",
].map((tool, index) => (

                    <div
                      key={tool}
                      className={`flex min-h-16 items-center justify-center border border-[var(--border)] px-3 text-center text-sm transition-all duration-500 ${
                        "text-[var(--foreground)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
                      }`}
                    >
                      {tool}
                    </div>
                  ))}
                </div>

                <p className="mt-8 text-sm leading-7 text-[var(--muted)]">
                  A practical toolkit spanning analytics, business
                  intelligence, data preparation and automation.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center">

          {/* Tabs */}
          <div className="mb-10 flex flex-wrap gap-2">
            {states.map((state, index) => (
              <button
                key={state}
                type="button"
                onClick={() => setActive(index)}
                className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] transition-all duration-200 ${
                  active === index
                    ? "bg-[var(--accent)] text-white"
                    : "text-[var(--muted)] hover:bg-[var(--surface)] hover:text-[var(--foreground)]"
                }`}
              >
                {state}
              </button>
            ))}
          </div>

          {/* Background */}
{active === 0 && (
  <div>
    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--accent)]">
      Background
    </p>

    <h2 className="mt-4 max-w-2xl text-4xl tracking-tight sm:text-6xl">
      From automation
      <br />
      to <span className="text-[var(--accent)]">analytics.</span>
    </h2>

    <div className="mt-10 max-w-2xl space-y-6 text-lg leading-8 text-[var(--foreground)]">
      <p>
        I started my career building automated processes, where I learned to think about how data, systems, and business workflows fit together.
      </p>

      <p>
        That experience gradually pulled me toward the analytical side —
        understanding the data behind the process, finding patterns,
        validating information, and asking what the numbers actually mean.
      </p>

      <p>
        Today, I&apos;m focused on data analytics and business intelligence,
        combining that process perspective with tools like Power BI, SQL,
        Python, and Excel to turn data into something people can use.
      </p>
    </div>
  </div>
)}

          {/* Aspiration */}
          {active === 1 && (
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--accent)]">
                Aspiration
              </p>
              <h2 className="mt-4 max-w-2xl text-4xl tracking-tight sm:text-6xl">
  From insights
  <br />
  to <span className="text-[var(--accent)]">connections.</span>
</h2>

<p className="mt-10 max-w-2xl text-lg leading-8 text-[var(--foreground)]">
  I want to work in the space between data, business, technology,
  and different domains — bringing together knowledge from across
  them to uncover patterns, ask better questions, and create
  insights that are genuinely useful.
</p>

<div className="mt-10 grid gap-6 sm:grid-cols-3">
  <div>
    <p className="text-sm font-semibold text-[var(--accent)]">
      Cross-domain thinking
    </p>
    <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
      Connect ideas, methods, and perspectives across different fields.
    </p>
  </div>

  <div>
    <p className="text-sm font-semibold text-[var(--accent)]">
      Decision intelligence
    </p>
    <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
      Turn evidence into insights that help people understand what
      matters and what to do next.
    </p>
  </div>

  <div>
    <p className="text-sm font-semibold text-[var(--accent)]">
      Creative exploration
    </p>
    <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
      Aspiring to become an author and game developer, with a lasting
      passion for painting and creative work.
    </p>
  </div>
</div>

              
              
            </div>
          )}

          {/* Tech Stack */}
          {active === 2 && (
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--accent)]">
                Tech Stack
              </p>

              <h2 className="mt-4 max-w-2xl text-4xl tracking-tight sm:text-6xl">
                Tools for
                <br />
                <span className="text-[var(--accent)]">
                  analytical work.
                </span>
              </h2>

              <div className="mt-10 grid gap-7 sm:grid-cols-2">

<div>
  <p className="text-sm font-semibold text-[var(--accent)]">
    Data Analysis
  </p>
  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
    SQL · Python · Pandas · EDA · Advanced Excel · Google Sheets
  </p>
</div>

<div>
  <p className="text-sm font-semibold text-[var(--accent)]">
    Data Transformation
  </p>
  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
    ETL · Power Query
  </p>
</div>

<div>
  <p className="text-sm font-semibold text-[var(--accent)]">
    BI &amp; Visualization
  </p>
  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
    Power BI (DAX, dashboards) · Tableau · Matplotlib
  </p>
</div>

<div>
  <p className="text-sm font-semibold text-[var(--accent)]">
    AI &amp; Automation
  </p>
  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
    Power Automate · n8n
  </p>
</div>

<div>
  <p className="text-sm font-semibold text-[var(--accent)]">
    Tools
  </p>
  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
    Jira · Google Colab
  </p>
</div>

<p className="mt-10 max-w-xl text-left text-sm leading-7 text-[var(--muted)]">
  Open to picking up{" "}
  <span className="text-[var(--accent)]">new tools on demand.</span>
</p>
              </div>
            </div>
          )}

          {/* Progress */}
          <div className="mt-12 flex gap-2">
            {states.map((state, index) => (
              <button
                key={state}
                type="button"
                aria-label={`Show ${state}`}
                onClick={() => setActive(index)}
                className={`h-1 transition-all duration-300 ${
                  active === index
                    ? "w-12 bg-[var(--accent)]"
                    : "w-4 bg-[var(--border)]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}