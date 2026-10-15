"use client";

import { useState } from "react";

const deepDives = [
  {
    number: "01",
    label: "BANK STATEMENT PROCESSING",
    title: "Bank statement processing & transaction matching.",
    description:
      "Bank statements arrived in different formats and needed to be processed before their data could be incorporated into the cash-flow workbook. The workflow also had to reconcile bank transactions against bill transaction records, where one bank transaction could correspond to multiple bill transaction records.",
    challenge:
       "Handling 50+ bank statement formats across clients while maintaining reusable processing logic. Implementing transaction-matching logic in Power Automate was another major challenge.",
    steps: [
      {
        title: "Identify & extract",
        description:
          "Identify the bank statement format and extract the required columns, calculating additional fields where necessary.",
      },
      {
        title: "Standardize & match dates",
        description:
          "Use a dedicated conversion function to standardize bank statement dates to the required date format for bill transaction records before matching transactions.",
      },
      {
        title: "Match transactions",
        description:
          "Match a bank statement transaction against multiple bill transaction records using dates and amounts, then capture the relevant transaction descriptions.",
      },
      {
        title: "Update the workbook",
        description:
          "Insert transaction details into the appropriate section of the bank statement sheet, add rows where required, and populate balance calculations and category mappings using VLOOKUP.",
      },
    ],
    insight:
      "Supporting 50+ bank statement formats required format identification and appropriate processing logic. Reusable utility functions helped reduce duplicated logic across client-specific implementations. Reliable transaction matching also required standardizing date formats before reconciling a bank transaction against multiple bill transaction records.",
  },
  {
    number: "02",
    label: "AP & AR AGING AUTOMATION",
    title: "AP & AR aging automation.",
    description:
      "Accounts payable and receivable aging data needed to be transformed, evaluated, and incorporated into the cash-flow workbook. The challenge was not simply loading the data, but determining which existing records needed to change.",
    challenge:
      "Translating query results into the correct workbook operations while handling changing records and transaction volumes.",
    steps: [
      {
        title: "Prepare the input data",
        description:
          "Remove unnecessary headers and columns, convert column settings, and prepare the AP/AR aging data for processing.",
      },
      {
        title: "Load data & refresh queries",
        description:
          "Load prepared details into the cash-flow input and AP/AR aging input sheets, then refresh the relevant reusable Power Query template.",
      },
      {
        title: "Determine the required action",
        description:
          "Use the generated query output and VLOOKUP-based logic to identify which records should be inserted, updated, deleted, or retained.",
      },
      {
        title: "Apply changes in batches",
        description:
          "Process the identified changes in batches, inserting required rows, updating amounts, and removing records that no longer belong in the cash-flow workbook.",
      },
    ],
    actions: ["INSERT", "UPDATE", "DELETE", "RETAIN"],
    insight:
      "The workflow connected data transformation with record-level decisions, translating query results into the corresponding updates to the cash-flow workbook.",
  },
  {
    number: "03",
    label: "WORKBOOK & FORMULA MANAGEMENT",
    title: "Dynamic workbook updates & formula management.",
    description:
      "The cash-flow workbook needed to accommodate changing transaction volumes while maintaining its reporting structure, category assignments, and calculations.",
    challenge:
      "Updating workbook rows and formulas as records changed, while preserving the structure needed for financial reporting.",
    steps: [
      {
        title: "Prepare the weekly structure",
        description:
          "Create the current week's column and populate it with the appropriate formulas.",
      },
      {
        title: "Update rows dynamically",
        description:
          "Insert new rows or remove existing ones according to the processing results, accommodating changes in transaction volumes.",
      },
      {
        title: "Apply lookup logic",
        description:
          "Use VLOOKUP to map transaction categories and populate the relevant fields in the cash-flow workbook.",
      },
      {
        title: "Populate formulas & save",
        description:
          "Apply the required formulas using the workbook's formula reference row and save the workbook at each processing step.",
      },
    ],
    insight:
      "Reliable workbook automation required more than moving data between sheets. Row operations, category lookups, formula propagation, and incremental saves all had to work together to preserve the structure and calculations required for weekly financial reporting.",
  },
];

export default function EngineeringDeepDive() {
  const [activeIndex, setActiveIndex] = useState(0);

  const active = deepDives[activeIndex];

  
function goTo(index: number) {
  setActiveIndex(
    (index + deepDives.length) % deepDives.length
  );

  document.getElementById("engineering-deep-dive")?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}


  return (
    <section
      id="engineering-deep-dive"
      className="mx-auto max-w-7xl px-6 py-24 lg:px-10"
    >
      {/* Section Header */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
          Engineering Deep Dive
        </p>

        <p
          className="text-sm tabular-nums text-[var(--foreground)]/50"
          aria-live="polite"
          aria-atomic="true"
        >
          {active.number} / 03
        </p>
      </div>

      {/* Main Content */}
      <div
        key={active.number}
        className="mt-5 grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20"
      >
        {/* Left: Context */}
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--foreground)]/45">
            {active.label}
          </p>

          <h2 className="mt-5 text-3xl leading-tight tracking-tight sm:text-5xl">
  {activeIndex === 0 ? (
    <>
      Bank statement processing
      <span className="text-[var(--accent)]">
        {" "}& transaction matching.
      </span>
    </>
  ) : activeIndex === 1 ? (
    <>
      AP & AR aging
      <span className="text-[var(--accent)]">
        {" "}automation.
      </span>
    </>
  ) : (
    <>
      Dynamic workbook updates
      <span className="text-[var(--accent)]">
        {" "}& formula management.
      </span>
    </>
  )}
</h2>

          <p className="mt-6 text-base leading-8 text-[var(--foreground)]/70">
            {active.description}
          </p>

          <div className="mt-8 border-l-2 border-[var(--accent)] pl-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
              Engineering Challenge
            </p>

            <p className="mt-2 text-sm leading-7 text-[var(--foreground)]/70">
              {active.challenge}
            </p>
          </div>

          {/* AP / AR Record Actions */}
          {active.actions && (
            <div className="mt-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--foreground)]/50">
                Record Decision Logic
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {active.actions.map((action) => (
                  <span
                    key={action}
                    className="rounded-full border border-[var(--accent)]/50 px-4 py-2 text-xs font-semibold tracking-wide text-[var(--accent)]"
                  >
                    {action}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right: Connected Timeline */}
        <div className="relative">
          <div className="absolute bottom-8 left-[19px] top-8 w-px bg-[var(--border)]" />

          <div className="space-y-10">
            {active.steps.map((step, index) => (
              <div
                key={step.title}
                className="group relative flex gap-6"
              >
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--accent)] bg-[var(--background)] text-sm font-medium text-[var(--accent)] transition-colors duration-200 group-hover:bg-[var(--accent)] group-hover:text-white">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="pt-1">
                  <h3 className="text-lg font-medium transition-colors duration-200 group-hover:text-[var(--accent)]">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[var(--foreground)]/60">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Engineering Insight */}
      <div
        key={`insight-${active.number}`}
        className="mt-16 rounded-2xl border border-[var(--accent)]/40 bg-[var(--accent)]/[0.05] p-7 sm:p-9"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--accent)]">
          Engineering Insight
        </p>

        <div className="mt-4 grid gap-4 sm:grid-cols-[auto_1fr] sm:items-start sm:gap-8">
          <span
            className="text-3xl text-[var(--accent)]"
            aria-hidden="true"
          >
            ↳
          </span>

          <p className="max-w-4xl text-base leading-8 text-[var(--foreground)]/80">
            {active.insight}
          </p>
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-10 flex flex-wrap items-center justify-between gap-6 border-t border-[var(--border)] pt-6">
        <button
          type="button"
          onClick={() => goTo(activeIndex - 1)}
          className="text-sm text-[var(--foreground)]/70 transition-colors hover:text-[var(--accent)]"
          aria-label="Previous engineering deep dive"
        >
          ← Previous
        </button>

        <div
          className="flex items-center gap-3"
          aria-label="Choose engineering deep dive"
        >
          {deepDives.map((dive, index) => (
            <button
              key={dive.number}
              type="button"
              onClick={() => goTo(index)}
              aria-label={`Show deep dive ${dive.number}: ${dive.label}`}
              aria-current={index === activeIndex ? "step" : undefined}
              className={`flex h-10 w-10 items-center justify-center rounded-full border text-sm transition-colors duration-200 ${
                index === activeIndex
                  ? "border-[var(--accent)] bg-[var(--accent)] text-white"
                  : "border-[var(--border)] text-[var(--foreground)]/60 hover:border-[var(--accent)] hover:text-[var(--accent)]"
              }`}
            >
              {dive.number}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={() => goTo(activeIndex + 1)}
          className="text-sm text-[var(--foreground)]/70 transition-colors hover:text-[var(--accent)]"
          aria-label="Next engineering deep dive"
        >
          Next →
        </button>
      </div>
    </section>
  );
}