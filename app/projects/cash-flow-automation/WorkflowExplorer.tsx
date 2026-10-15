"use client";

import { useState } from "react";

const stages = [
  {
    number: "01",
    title: "Inputs",
    subtitle: "Source files",
    description:
      "The reporting workflow brought together bank statements, AP/AR aging data, bill transaction records, and the cash-flow workbook.",
    details: [
        "Cash-flow workbook — the workbook updated by the reporting process.",
        "Bank statements — transaction details from bank accounts.",
        "Bill transaction records — transaction data.",
        "AP & AR aging — accounts payable and receivable records.",
],
    technology: "Excel · Source files",
  },
  {
    number: "02",
    title: "Orchestration",
    subtitle: "Workflow execution",
    description:
      "Power Automate coordinated the reporting process, executing the required steps according to the workflow configuration and available inputs.",
    details: [
      "Read the workflow configuration.",
      "Execute the required processing steps.",
      "Coordinate data processing and workbook updates.",
      "Record process status and errors.",
    ],
    technology: "Microsoft Power Automate",
  },
  {
    number: "03",
    title: "Transformation",
    subtitle: "Data preparation",
    description:
      "Input data was standardized and prepared for reporting. Reusable Power Query templates supported data processing, while a dedicated function converted bank statement dates to bill trnasactions's date format before transaction matching.",
    details: [
      "Identify bank statement formats and extract required columns.",
      "Standardize dates for transaction matching.",
      "Match bank transactions against bill transaction records using dates and amounts.",
      "Prepare AP/AR aging data and refresh relevant queries.",
    ],
    technology: "Power Query · Power Automate",
  },
  {
    number: "04",
    title: "Workbook updates",
    subtitle: "Reporting logic",
    description:
      "The automation updated the cash-flow workbook with the processed information, applying the appropriate row operations, category mappings, and formulas.",
    details: [
      "Insert bank transaction details in the appropriate workbook section.",
      "Insert, update, delete, or retain AP/AR records as required.",
      "Apply category mappings using VLOOKUP.",
      "Populate formulas and save the workbook at each processing step.",
    ],
    technology: "Microsoft Excel · VLOOKUP",
  },
  {
    number: "05",
    title: "Output & monitoring",
    subtitle: "Results and traceability",
    description:
      "The process produced an updated cash-flow workbook and a log recording completed steps, process status, and errors to support troubleshooting.",
    details: [
      "Updated cash-flow workbook for financial reporting.",
      "Record completed processing steps.",
      "Capture errors and process status.",
      "Provide diagnostic information about failures.",
    ],
    technology: "Excel · Process logs",
  },
];

export default function WorkflowExplorer() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = stages[activeIndex];

  return (
    <section
      id="workflow-architecture"
      className="mx-auto max-w-7xl px-6 py-24 lg:px-10"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
        Workflow Architecture
      </p>

      <h2 className="mt-5 max-w-4xl text-4xl leading-tight tracking-tight sm:text-6xl">
        Follow the flow
        <span className="text-[var(--accent)]"> of data.</span>
      </h2>

      <p className="mt-5 max-w-2xl text-sm leading-7 text-[var(--foreground)]/60">
        Explore how source files moved through the reporting workflow,
        from data preparation to workbook updates and process monitoring.
      </p>

      {/* Interactive pipeline */}
      <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {stages.map((stage, index) => (
          <div key={stage.number} className="relative">
            <button
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-pressed={index === activeIndex}
              className={`group flex h-full min-h-36 w-full flex-col rounded-2xl border p-5 text-left transition-all duration-200 ${
                index === activeIndex
                  ? "border-[var(--accent)] bg-[var(--accent)]/[0.08]"
                  : "border-[var(--border)] bg-[var(--surface)] hover:border-[var(--accent)] hover:bg-[var(--accent)]/[0.04]"
              }`}
            >
              <span
                className={`text-xs font-semibold tracking-[0.2em] ${
                  index === activeIndex
                    ? "text-[var(--accent)]"
                    : "text-[var(--foreground)]/40 group-hover:text-[var(--accent)]"
                }`}
              >
                {stage.number}
              </span>

              <span
                className={`mt-5 text-base font-medium transition-colors ${
                  index === activeIndex
                    ? "text-[var(--accent)]"
                    : "text-[var(--foreground)] group-hover:text-[var(--accent)]"
                }`}
              >
                {stage.title}
              </span>

              <span className="mt-2 text-xs leading-5 text-[var(--foreground)]/50">
                {stage.subtitle}
              </span>
            </button>

            {index < stages.length - 1 && (
              <span
                className="pointer-events-none absolute -right-2 top-1/2 z-10 hidden -translate-y-1/2 text-lg text-[var(--accent)] lg:block"
                aria-hidden="true"
              >
                →
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Selected stage details */}
      <div
  key={active.number}
  className="mt-8 h-[435px] overflow-y-auto rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-7 sm:p-8 flex flex-col"
  aria-live="polite"
  aria-atomic="true"
>
        <div className="grid flex-1 content-start gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
              Stage {active.number} / 05
            </p>

            <h3 className="mt-4 text-2xl font-medium tracking-tight sm:text-3xl">
              {active.title}
            </h3>

            <p className="mt-4 text-sm leading-7 text-[var(--foreground)]/65">
              {active.description}
            </p>

            <div className="mt-7 border-t border-[var(--border)] pt-5">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--foreground)]/40">
                Technologies
              </p>

              <p className="mt-3 text-sm text-[var(--accent)]">
                {active.technology}
              </p>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--foreground)]/45">
              Inside this stage
            </p>

            <div className="mt-5 space-y-5 pr-28">
  {active.details.map((detail, index) => {
  const isUpstreamInput =
    activeIndex === 0 && (index === 2 || index === 3);

  return (
    <div key={detail} className="relative flex gap-4">
      <span className="mt-0.5 text-sm font-medium text-[var(--accent)]">
        {String(index + 1).padStart(2, "0")}
      </span>

      <p className="text-sm leading-7 text-[var(--foreground)]/70">
        {detail}
      </p>

      {isUpstreamInput && index === 2 && (
        <div className="absolute right-0 top-0 bottom-[-44px] flex items-center translate-x-full pl-3">
          <div className="flex h-full items-center">
            <div className="h-full w-3 rounded-r-full border-r-2 border-t-2 border-b-2 border-[var(--accent)]" />
          </div>

          <span className="ml-2 whitespace-nowrap text-xs text-[var(--accent)]">
            Upstream bot
          </span>
        </div>
      )}
    </div>
  );
})}
</div>

          </div>
        </div>

        {/* Stage navigation */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-[var(--border)] pt-6">
          <button
            type="button"
            onClick={() =>
              setActiveIndex(
                (activeIndex - 1 + stages.length) % stages.length
              )
            }
            className="text-sm text-[var(--foreground)]/60 transition-colors hover:text-[var(--accent)]"
          >
            ← Previous stage
          </button>

          <span className="text-xs tabular-nums text-[var(--foreground)]/40">
            {activeIndex + 1} of {stages.length}
          </span>

          <button
            type="button"
            onClick={() =>
              setActiveIndex((activeIndex + 1) % stages.length)
            }
            className="text-sm text-[var(--foreground)]/60 transition-colors hover:text-[var(--accent)]"
          >
            Next stage →
          </button>
        </div>
      </div>
    </section>
  );
}