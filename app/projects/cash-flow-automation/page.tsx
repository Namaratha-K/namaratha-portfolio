"use client";

import { useState } from "react";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import EngineeringDeepDive from "./EngineeringDeepDive";
import WorkflowExplorer from "./WorkflowExplorer";
import RoleRecognition from "./RoleRecognition";

export default function CashFlowAutomationPage() {
    const [comparison, setComparison] = useState<"before" | "after">(
    "before"
  );
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Navbar />

            {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-20 lg:px-10 lg:pt-28">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
          FINANCIAL OPERATIONS · PROCESS AUTOMATION
        </p>

        <h1 className="mt-8 max-w-6xl text-5xl font-medium leading-[0.98] tracking-[-0.05em] sm:text-7xl lg:text-8xl">
          Turning weekly
          <br />
          cash-flow preparation
          <br />
          into an{" "}
          <span className="text-[var(--accent)]">
            automated workflow.
          </span>
        </h1>

        <div className="mt-8 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <p className="max-w-2xl text-base leading-8 text-[var(--foreground)]/75 sm:text-lg">
            A configurable automation built with Power Automate and Power
            Query to standardize financial data, process reporting inputs,
            and reduce repetitive preparation work.
          </p>

          <div className="flex max-w-sm flex-wrap gap-2">
            {[
  "Power Automate",
  "Power Query",
  "Microsoft Excel",
  "Financial Reporting",
].map((tool) => (
            
              <span
                key={tool}
                className="rounded-full border border-[var(--accent)]/40 px-4 py-2 text-xs text-[var(--foreground)]"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

                {/* Workflow Illustration */}
        <div className="mt-20 border-y border-[var(--border)] py-10 sm:py-14">
          <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--foreground)]/50">
              Workflow at a glance
            </p>

            <span className="text-xs tracking-wide text-[var(--foreground)]/40">
              INPUT · TRANSFORMATION · OUTPUT
            </span>
          </div>

          <div className="mx-auto max-w-4xl">
            {/* Stage 01 — Inputs */}
            <div className="rounded-2xl border border-[var(--border)] p-5 transition-colors sm:p-7">
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[var(--border)] text-sm text-[var(--foreground)]/60">
                  01
                </span>

                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--foreground)]/45">
                    Input
                  </p>
                  <h3 className="mt-1 text-lg font-medium sm:text-xl">
                    Financial inputs
                  </h3>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-x-8 gap-y-3 pl-0 sm:pl-16">
  {[
    "Bank statements",
    "AP/AR aging",
    "Bill.com",
    "Cash-flow workbook",
  ].map((item) => (
    <span
      key={item}
      className="cursor-default text-sm text-[var(--foreground)]/60 transition-colors duration-200 hover:text-[var(--accent)]"
    >
      {item}
    </span>
  ))}
</div>
            </div>

            {/* Vertical connector */}
            <div className="flex flex-col items-center py-3" aria-hidden="true">
              <div className="h-5 w-px bg-[var(--border)]" />
              <span className="text-lg leading-none text-[var(--accent)]">
                ↓
              </span>
            </div>

            {/* Stage 02 — Automation */}
            <div className="relative overflow-hidden rounded-2xl border border-[var(--accent)]/60 bg-[var(--accent)]/[0.05] p-5 sm:p-7">
              <div className="absolute bottom-0 left-0 top-0 w-1 bg-[var(--accent)]" />

              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[var(--accent)]/50 text-sm text-[var(--accent)]">
                  02
                </span>

                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
                    Transformation
                  </p>
                  <h3 className="mt-1 text-lg font-medium sm:text-xl">
                    Process & transform
                  </h3>
                </div>
              </div>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-[var(--foreground)]/70 sm:pl-14">
                Configuration-driven processing, bank statement
                standardization, transaction matching, AP/AR aging updates,
                and cash-flow workbook preparation.
              </p>

              <div className="mt-5 flex flex-wrap gap-2 sm:pl-16">
  {[
    "Power Automate",
    "Power Query",
    "Microsoft Excel",
  ].map((tool) => (
    <span
      key={tool}
      className="rounded-full border border-[var(--accent)]/60 px-3 py-1.5 text-xs text-[var(--foreground)]/80 transition-colors duration-200 hover:bg-[var(--accent)] hover:text-white"
    >
      {tool}
    </span>
  ))}
</div>
            </div>

            {/* Vertical connector */}
            <div className="flex flex-col items-center py-3" aria-hidden="true">
              <div className="h-5 w-px bg-[var(--border)]" />
              <span className="text-lg leading-none text-[var(--accent)]">
                ↓
              </span>
            </div>

            {/* Stage 03 — Output */}
            <div className="rounded-2xl border border-[var(--border)] p-5 sm:p-7">
              <div className="flex items-center justify-between gap-4">
                <div className="flex min-w-0 items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[var(--border)] text-sm text-[var(--foreground)]/60">
                    03
                  </span>

                  <div className="min-w-0">
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--foreground)]/45">
                      Output
                    </p>
                    <h3 className="mt-1 text-lg font-medium sm:text-xl">
                      Reporting-ready data
                    </h3>
                  </div>
                </div>

                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--accent)]/10 text-xl text-[var(--accent)]"
                  aria-hidden="true"
                >
                  →
                </span>
              </div>

              <p className="mt-5 text-sm leading-7 text-[var(--foreground)]/60 sm:pl-14">
                Updated cash-flow workbook, applied formulas, and process
                logs recording completion status and errors.
              </p>
            </div>
          </div>

          {/* Closing statement */}
          <div className="mt-12 flex flex-col gap-4 border-t border-[var(--border)] pt-7 sm:mt-14 sm:flex-row sm:items-center sm:justify-between">
            <p className="border-l-2 border-[var(--accent)] py-1 pl-5 text-sm leading-7 text-[var(--foreground)]/80 sm:text-base">
  Less time preparing the data.
  <span className="mt-1 block text-[var(--accent)]">
    More time analysing the numbers.
  </span>
</p>

            <span className="pl-5 text-xs text-[var(--foreground)]/40 sm:pl-0">
              Weekly cash-flow reporting
            </span>
          </div>
        </div>
      </section>

           {/* Project Overview */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
            The Project
          </p>

          <div>
            <h2 className="max-w-3xl text-3xl leading-tight tracking-tight sm:text-5xl">
  Automating the preparation behind
  <span className="text-[var(--accent)]">
    {" "}weekly cash-flow reporting.
  </span>
</h2>

            <p className="mt-8 max-w-2xl leading-8 text-[var(--foreground)]/70">
  Weekly cash-flow reporting involved preparing data from multiple sources,
  including bank statements, Bill.com, and accounts payable and receivable
  aging files.
</p>

<p className="mt-6 max-w-2xl leading-8 text-[var(--foreground)]/70">
  Varying bank statement formats, transaction matching, and workbook updates
  made the process repetitive and detail-intensive.
</p>

<p className="mt-6 max-w-2xl leading-8 text-[var(--foreground)]/70">
  I contributed to the development and evolution of the Cash Flow Process
  Automation solution using Power Automate, Power Query, and Excel.
</p>

<p className="mt-6 max-w-2xl leading-8 text-[var(--foreground)]/70">
  The workflow processed required inputs, standardized data, updated the
  cash-flow workbook, and logged process status and errors, freeing more
  time for financial analysis.
</p>

          </div>
        </div>
      </section>

      {/* Before / After Comparison */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
          {/* Section Introduction */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
              The Transformation
            </p>

            <h2 className="mt-5 text-3xl leading-tight tracking-tight sm:text-5xl">
              From manual preparation to{" "}
              <span className="text-[var(--accent)]">
                automated workflows.
              </span>
            </h2>

            <p className="mt-6 max-w-sm text-sm leading-7 text-[var(--foreground)]/60">
              Explore how the weekly cash-flow reporting process changed
              with configurable automation.
            </p>
          </div>

          {/* Interactive Comparison */}
          <div>
            <div
              className="mb-6 inline-flex rounded-full border border-[var(--border)] p-1"
              role="group"
              aria-label="Compare the workflow before and after automation"
            >
              <button
                type="button"
                onClick={() => setComparison("before")}
                aria-pressed={comparison === "before"}
                className={`rounded-full px-5 py-2.5 text-sm transition-colors ${
                  comparison === "before"
                    ? "bg-[var(--accent)] text-white"
                    : "text-[var(--foreground)]/60 hover:text-[var(--accent)]"
                }`}
              >
                Before
              </button>

              <button
                type="button"
                onClick={() => setComparison("after")}
                aria-pressed={comparison === "after"}
                className={`rounded-full px-5 py-2.5 text-sm transition-colors ${
                  comparison === "after"
                    ? "bg-[var(--accent)] text-white"
                    : "text-[var(--foreground)]/60 hover:text-[var(--accent)]"
                }`}
              >
                After
              </button>
            </div>

            <div
              key={comparison}
              className="rounded-2xl border border-[var(--border)] p-6 sm:p-8"
              aria-live="polite"
            >
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[var(--foreground)]/50">
                    {comparison === "before"
                      ? "Before automation"
                      : "After automation"}
                  </p>

                  <h3 className="mt-3 text-2xl font-medium tracking-tight">
                    {comparison === "before"
                      ? "Repetitive weekly preparation"
                      : "A configurable processing workflow"}
                  </h3>
                </div>

                <span
                  className={`rounded-full border px-3 py-1.5 text-xs ${
                    comparison === "after"
                      ? "border-[var(--accent)]/60 text-[var(--accent)]"
                      : "border-[var(--border)] text-[var(--foreground)]/60"
                  }`}
                >
                  {comparison === "before"
                    ? "Manual workflow"
                    : "Automated preparation"}
                </span>
              </div>

              <ul className="mt-7 space-y-5">
                {(comparison === "before"
                  ? [
                      "Bank statements in varying formats needed standardization.",
                      "Transactions needed matching against Bill.com records.",
                      "AP/AR aging data required processing and reconciliation.",
                      "The cash-flow workbook needed row updates and formulas.",
                      "Missing inputs and processing issues needed investigation.",
                    ]
                  : [
                      "Configuration settings and file availability determined which steps ran.",
                      "Bank statement data was standardized and relevant transactions were matched.",
                      "Required AP/AR aging updates were processed.",
                      "The cash-flow workbook was updated with the required rows and formulas.",
                      "Process logs recorded completed steps, skipped steps, errors, and reasons.",
                    ]
                ).map((item, index) => (
                  <li key={item} className="flex gap-4">
                    <span
                      className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-xs ${
                        comparison === "after"
                          ? "border-[var(--accent)]/50 text-[var(--accent)]"
                          : "border-[var(--border)] text-[var(--foreground)]/50"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p className="text-sm leading-7 text-[var(--foreground)]/75">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>

              <div className="mt-8 border-t border-[var(--border)] pt-6">
                <p className="text-sm leading-7 text-[var(--foreground)]/70">
                  {comparison === "before"
                    ? "Repetitive preparation took time away from analysing cash flow."
                    : "The automation handled repetitive preparation, freeing more time for financial analysis."}
                </p>

                {comparison === "after" && (
                  <p className="mt-3 text-sm font-medium text-[var(--accent)]">
                    Less time preparing the data. More time analysing the numbers.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
<section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
    The Impact
  </p>

  <h2 className="mt-5 max-w-4xl text-4xl tracking-tight sm:text-6xl">
    Measurable improvements in
    <br />
    <span className="text-[var(--accent)]">reporting efficiency.</span>
  </h2>

  <p className="mt-5 max-w-2xl text-sm leading-7 text-[var(--foreground)]/60">
    Automating repetitive preparation steps reduced processing time
    and made financial reporting workflows more efficient.
  </p>

  <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
    {/* Metric 1 */}
    <div className="group flex min-h-[280px] flex-col rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-7 transition-all duration-300 hover:border-[var(--accent)] hover:bg-[var(--accent)]/[0.07] sm:p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--foreground)]/50 transition-colors group-hover:text-[var(--accent)]">
        Reporting process
      </p>

      <div className="mt-8">
        <p className="text-4xl font-medium tracking-tight text-[var(--foreground)] sm:text-5xl">
          1–3 hrs
        </p>

        <div className="mt-3 flex items-center gap-3">
          <span className="text-xl text-[var(--accent)]" aria-hidden="true">
            ↓
          </span>
          <span className="text-4xl font-medium tracking-tight text-[var(--accent)] sm:text-5xl">
            6–30 min
          </span>
        </div>
      </div>

      <p className="mt-auto pt-8 text-sm leading-6 text-[var(--foreground)]/60">
        Overall processing time, reduced depending on data volume.
      </p>
    </div>

    {/* Metric 2 */}
    <div className="group flex min-h-[280px] flex-col rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-7 transition-all duration-300 hover:border-[var(--accent)] hover:bg-[var(--accent)]/[0.07] sm:p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--foreground)]/50 transition-colors group-hover:text-[var(--accent)]">
        Scale
      </p>

      <div className="mt-8">
        <p className="text-4xl font-medium tracking-tight text-[var(--accent)] sm:text-5xl">
          36+
        </p>

        <p className="mt-5 text-4xl font-medium tracking-tight text-[var(--foreground)] sm:text-4xl">
  Clients supported
</p>
      </div>

      <p className="mt-auto pt-8 text-sm leading-6 text-[var(--foreground)]/60">
        Supported through financial reporting and automation solutions.
      </p>
    </div>

    {/* Metric 3 */}
    <div className="group flex min-h-[280px] flex-col rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-7 transition-all duration-300 hover:border-[var(--accent)] hover:bg-[var(--accent)]/[0.07] sm:p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--foreground)]/50 transition-colors group-hover:text-[var(--accent)]">
        Power Query optimisation
      </p>

      <div className="mt-8">
        <p className="text-4xl font-medium tracking-tight text-[var(--foreground)] sm:text-5xl">
          45 min
        </p>

        <div className="mt-3 flex items-center gap-3">
          <span className="text-xl text-[var(--accent)]" aria-hidden="true">
            ↓
          </span>
          <span className="text-4xl font-medium tracking-tight text-[var(--accent)] sm:text-5xl">
            ~30 sec
          </span>
        </div>
      </div>

      <p className="mt-auto pt-8 text-sm leading-6 text-[var(--foreground)]/60">
        Processing time for one workflow step using reusable templates
        across datasets of 800–15,000+ rows.
      </p>
    </div>
  </div>
</section>

<EngineeringDeepDive />

<WorkflowExplorer />

<RoleRecognition />

      {/* Back to Projects */}
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
        <a
          href="/#experience"
          className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-5 py-3 text-sm transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
        >
          ← Back to Work Experience
        </a>
      </section>

      <Footer />
    </main>
  );
}