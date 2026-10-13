"use client";

import { useState } from "react";

const experiences = [
  {
    id: "consero",
    number: "01",
    period: "2024 — 2025",
    company: "Consero Global Solutions",
    role: "Software Engineer L1 · Digital Transformation & Innovation",
    summary:
      "Built automation and analytics solutions across financial reporting, data processing, validation, reconciliation and reporting.",
    metrics: [
      ["36+", "Clients"],
      ["10+", "FTE Impact"],
      ["90%", "Faster Processing"],
    ],
    details: [
  {
    parts: [
      { text: "90%", accent: true },
      {
        text: " reduction in processing time by automating a core cash flow reporting process using Power Automate and Power Query — from 1–3 hours to approximately 6–30 minutes depending on volume.",
      },
    ],
  },
  {
    parts: [
      { text: "36+ clients", accent: true },
      {
        text: " supported through analytics automation and financial reporting solutions, contributing process improvements equivalent to ",
      },
      { text: "10+ FTE", accent: true },
      { text: " in labor savings." },
    ],
  },
  {
    parts: [
      { text: "45 minutes → ~30 seconds", accent: true },
      {
        text: " by redesigning a Power Automate workflow using reusable Power Query templates across datasets ranging from 800 to 15,000+ rows.",
      },
    ],
  },
  {
    parts: [
      { text: "50+ statement formats", accent: true },
      {
        text: " standardized into BI-ready datasets through a bank statement processing component, while investigating discrepancies across bank statements, AP/AR and source systems.",
      },
    ],
  },
  {
  parts: [
    { text: "Transformation Excellence Award", accent: true },
    {
      text: " received for building the Cash Flow Process Automation V0 prototype as part of a three-person team, which was later presented to international leadership by the MD.",
    },
  ],
},
],
skills: [
    "Power Automate",
    "Power Query",
    "RPA Lifecycle",
    "Financial Reporting",
    "Data Validation",
    "Reconciliation",
    "Stakeholder Management",
  ],
  },
  {
    id: "vois",
    number: "02",
    period: "2021 — 2022",
    company: "_VOIS (Vodafone)",
    role: "Data Analyst",
    summary:
      "Worked across SQL-based data analysis, data migration, ETL, validation, reconciliation and reporting.",
    metrics: [],
    details: [
  {
    parts: [
      { text: "SQL-based data analysis", accent: true },
      {
        text: " and data migration across enterprise datasets, using joins, aggregations and validation queries to extract, reconcile and verify data.",
      },
    ],
  },
  {
    parts: [
      { text: "Data cleaning, transformation and ETL", accent: true },
      {
        text: " across large datasets, alongside Excel-based reporting and identifying opportunities for SQL-based automation.",
      },
    ],
  },
  {
    parts: [
      { text: "Data migration reference guide", accent: true },
      {
        text: " created for teammates, providing a step-by-step workflow for onboarding and troubleshooting.",
      },
    ],
  },
],
skills: [
    "SQL",
    "Excel",
    "ETL",
    "Data Validation",
    "Data Migration",
    "Data Reconciliation",
  ],
  },
  
];

export default function WorkExperience() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleExperience = (id: string) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <section
  id="experience"
  className="mx-auto max-w-7xl px-6 pt-32 pb-8 lg:px-10"
>
      {/* Section heading */}
      <div className="mb-16">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--accent)]">
          Work Experience
        </p>

        <h2 className="mt-4 max-w-3xl text-4xl tracking-tight sm:text-6xl">
          Building, automating,
          <br />
          <span className="text-[var(--accent)]">analysing.</span>
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--foreground)]/60">
          Experience across process automation, data analysis, business
          intelligence and enterprise systems.
        </p>
      </div>

      {/* Experience list */}
      <div className="border-t border-[var(--border)]">
        {experiences.map((experience) => {
          const isOpen = openId === experience.id;

          return (
            <article
              key={experience.id}
              className="border-b border-[var(--border)]"
            >
              {/* Collapsed row */}
              <button
                type="button"
                onClick={() => toggleExperience(experience.id)}
                className="group w-full py-10 text-left"
                aria-expanded={isOpen}
              >
                <div className="grid gap-8 lg:grid-cols-[80px_1fr_auto] lg:items-start">
                  {/* Number */}
<span
  className="
    flex h-9 w-9 shrink-0
    items-center justify-center
    rounded-full
    border border-[var(--foreground)]/40
    text-xs font-medium text-[var(--foreground)]
    transition-colors duration-200
    group-hover:border-[var(--accent)]
    group-hover:text-[var(--accent)]
  "
>
  {experience.number}
</span>

                  {/* Main information */}
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                      {experience.period}
                    </p>

                    <h3 className="mt-3 text-2xl tracking-tight sm:text-3xl">
                      {experience.company}
                    </h3>

                    <p className="mt-2 text-[0.8rem] text-[var(--muted)]">
                      {experience.role}
                    </p>

                    <p className="mt-6 max-w-2xl leading-7 text-[var(--foreground)]">
                      {experience.summary}
                    </p>

                    {/* Metrics */}
                    {experience.metrics.length > 0 && (
                      <div className="mt-9 flex flex-wrap gap-x-12 gap-y-5">
                        {experience.metrics.map(([value, label]) => (
                          <div key={label}>
                            <p className="text-lg font-medium text-[var(--accent)]">
                              {value}
                            </p>
                            <p className="mt-1 text-xs uppercase tracking-[0.15em] text-[var(--muted)]">
                              {label}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Expand control */}
                 <div className="flex items-center gap-3 pt-1 text-sm text-[var(--muted)] transition-colors group-hover:text-[var(--foreground)]">
  <span>{isOpen ? "Hide details" : "View details"}</span>

  <span
    className={`text-lg text-[var(--accent)] transition-transform duration-300 ${
      isOpen ? "rotate-45" : ""
    }`}
  >
    +
  </span>
</div>
                </div>
              </button>

              {/* Expanded content */}
              {isOpen && (
                <div className="grid gap-8 pb-12 lg:grid-cols-[80px_1fr_auto]">
                  <div />

                  <div className="max-w-3xl border-l-2 border-[var(--accent)] pl-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                      Details
                    </p>

                    <ul className="mt-5 space-y-5">
                      {experience.details.map((detail, index) => (
                        <li
                          key={index}
                          className="relative pl-6 leading-8 text-[var(--foreground)]/70"
                        >
                          <span className="absolute left-0 top-3 h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />

                          {detail.parts.map((part, partIndex) =>
                            part.accent ? (
                              <span
                                key={partIndex}
                                className="font-medium text-[var(--accent)]"
                              >
                                {part.text}
                              </span>
                            ) : (
                              <span key={partIndex}>{part.text}</span>
                            )
                          )}
                        </li>
                      ))}
                                        </ul>

                    {/* Consero Case Study Button */}
                    {experience.id === "consero" && (
                      <div className="mt-8">
                        <a
                          href="/projects/cash-flow-automation"
                          className="inline-flex items-center gap-2 rounded-full border border-[var(--accent)] px-5 py-2.5 text-sm font-medium text-[var(--foreground)] transition hover:bg-[var(--accent)] hover:text-white"
                        >
                          View Case Study
                          <span aria-hidden="true">↗</span>
                        </a>
                      </div>
                    )}

                    {experience.skills.length > 0 && (
  <div className="mt-12">
    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
      Tools &amp; Skills
    </p>

    <div className="mt-5 flex flex-wrap gap-2.5">
      {experience.skills.map((skill) => (
        <span
          key={skill}
          className="
            rounded-full
            border border-[var(--accent)]/50
            px-3.5 py-1.5
            text-[0.7rem]
            text-[var(--foreground)]/75
            transition-all duration-200
            hover:border-[var(--accent)]
            hover:bg-[var(--accent)]/10
            hover:text-[var(--accent)]
          "
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
)}
                  </div>

                  <div />
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}