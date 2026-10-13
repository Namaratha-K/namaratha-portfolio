"use client";

import { useState } from "react";
import Navbar from "../../Navbar";
import Footer from "../../Footer";

type Decision = "delivery" | "sellers" | "geography" | "categories";

const decisions = [
  {
    id: "delivery" as Decision,
    number: "01",
    title: "Delivery",
    description: "Reliability & delays",
  },
  {
    id: "sellers" as Decision,
    number: "02",
    title: "Sellers",
    description: "Seller performance",
  },
  {
    id: "geography" as Decision,
    number: "03",
    title: "Geography",
    description: "Interstate delivery",
  },
  {
    id: "categories" as Decision,
    number: "04",
    title: "Categories",
    description: "Product segments",
  },
];

export default function OlistProject() {
  const [selectedDecision, setSelectedDecision] =
    useState<Decision | null>(null);

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Navbar />

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pb-24 pt-20 lg:px-10 lg:pt-28">
        <div className="max-w-6xl">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
              03 · Marketplace Analytics
            </p>

            <h1 className="mt-6 max-w-6xl text-5xl font-medium leading-[0.95] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
  Olist Marketplace Performance
  <br />
  &amp; Customer Experience
</h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--foreground)] sm:text-xl">
              A leadership-oriented analysis of marketplace growth, delivery
              reliability, seller performance and customer satisfaction.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {["Python", "Pandas", "Data Analysis"].map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-[var(--accent)]/40 px-4 py-2 text-xs text-[var(--foreground)]"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          

          
        </div>
      </section>

      {/* Decision */}
      <section className="border-y border-[var(--border)]">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
          <div className="max-w-5xl">
  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
    Your Decision
  </p>
  <h2 className="mt-5 max-w-6xl text-4xl font-medium leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
  Olist has clearly grown.
  <br />
  <span className="text-[var(--accent)]">
    But has customer experience kept pace?
  </span>
</h2>

  <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--foreground)]">
    If you were leading marketplace operations, what would you
    investigate first?
  </p>
</div>

          {/* Decision Cards */}
          <div className="mt-16 grid gap-4 md:grid-cols-2">
            {decisions.map((decision) => {
              const isSelected = selectedDecision === decision.id;

              return (
                <button
                  key={decision.id}
                  type="button"
                  onClick={() => setSelectedDecision(decision.id)}
                  className={`group relative overflow-hidden rounded-2xl border p-5 text-left transition-all duration-300 sm:p-6 ${
                    isSelected
                      ? "border-[var(--accent)] bg-[var(--accent)]/[0.08]"
                      : "border-[var(--border)] bg-[var(--surface)] hover:-translate-y-1 hover:border-[var(--accent)]/70"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-4">
                        <span
                          className={`text-sm font-bold tracking-[0.2em] transition-colors ${
                            isSelected
                              ? "text-[var(--accent)]"
                              : "text-[var(--muted)] group-hover:text-[var(--accent)]"
                          }`}
                        >
                          {decision.number}
                        </span>

                        <h3 className="text-xl font-medium tracking-tight sm:text-2xl">
                          {decision.title}
                        </h3>
                      </div>

                      <p className="mt-2 text-sm text-[var(--muted)]">
                        {decision.description}
                      </p>
                    </div>

                    <span
                      className={`text-lg transition-all duration-300 ${
                        isSelected
                          ? "translate-x-0 text-[var(--accent)]"
                          : "-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                      }`}
                    >
                      →
                    </span>
                  </div>

                  <div
                    className={`absolute bottom-0 left-0 h-1 bg-[var(--accent)] transition-all duration-500 ${
                      isSelected ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Decision Reveal */}
          {selectedDecision && (
            <div className="mt-6 overflow-hidden rounded-2xl border border-[var(--accent)]/50 bg-[var(--surface)]">
              {selectedDecision === "delivery" ? (
  <div className="p-8 sm:p-10 lg:p-12">
    {/* Header */}
    <div className="max-w-4xl">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
        Primary signal
      </p>

      <h3 className="mt-5 text-4xl font-medium tracking-[-0.03em] sm:text-5xl lg:text-6xl">
        Delivery reliability.
      </h3>

      <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-lg">
        Delivery timing shows the clearest and most consistent relationship
        with customer satisfaction across the analysis.
      </p>
    </div>

   {/* Main comparison */}
<div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">

  {/* Early / on-time */}
  <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-5">
    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
      Early / on-time
    </p>

    <div className="mt-4 flex items-baseline gap-1">
      <p className="text-3xl font-semibold tracking-tight text-[var(--accent)]">
        4.28
      </p>
      <span className="text-lg text-[var(--accent)]">★</span>
    </div>

    <p className="mt-1 text-xs text-[var(--muted)]">
      Average review
    </p>

    <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-[var(--border)]">
      <div
        className="h-full w-[86%] rounded-full bg-[var(--accent)]"
        aria-hidden="true"
      />
    </div>
  </div>

  {/* Late */}
  <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-5">
    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
      Late
    </p>

    <div className="mt-4 flex items-baseline gap-1">
      <p className="text-3xl font-semibold tracking-tight">
        2.55
      </p>
      <span className="text-lg">★</span>
    </div>

    <p className="mt-1 text-xs text-[var(--muted)]">
      Average review
    </p>

    <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-[var(--border)]">
      <div
        className="h-full w-[51%] rounded-full bg-[var(--accent)] opacity-50"
        aria-hidden="true"
      />
    </div>
  </div>

  {/* Satisfaction gap */}
  <div className="rounded-xl border border-[var(--accent)]/50 bg-[var(--accent)]/[0.06] p-5">
    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
      Satisfaction gap
    </p>

    <div className="mt-4 flex items-baseline gap-1">
      <p className="text-3xl font-semibold tracking-tight text-[var(--accent)]">
        1.74
      </p>
      <span className="text-lg text-[var(--accent)]">★</span>
    </div>

    <p className="mt-1 text-xs leading-5 text-[var(--muted)]">
      Lower average score for late orders
    </p>
  </div>

  {/* Pearson */}
  <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-5">
    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
      Pearson correlation
    </p>

    <p className="mt-4 text-3xl font-semibold tracking-tight">
      −0.269
    </p>

    <p className="mt-1 text-xs leading-5 text-[var(--muted)]">
      Delay / review
    </p>
  </div>

</div>

</div>
) :  (
                <div className="p-6 sm:p-8">
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--muted)]">
                    Secondary signal
                  </p>

                  {selectedDecision === "sellers" && (
                    <>
                      <h3 className="mt-4 text-2xl font-medium tracking-tight sm:text-3xl">
                        Seller performance can help locate the risk.
                      </h3>

                      <p className="mt-5 max-w-2xl leading-8 text-[var(--foreground)]">
                        Sellers with persistently high late-delivery rates are useful
                        targets for operational intervention. Seller performance helps
                        identify where delivery problems may be concentrated.
                      </p>

                      <p className="mt-6 text-sm text-[var(--muted)]">
                        Suggested KPI:{" "}
                        <span className="text-[var(--foreground)]">
                          seller late-delivery rate
                        </span>
                      </p>
                    </>
                  )}

                  {selectedDecision === "geography" && (
                    <>
                      <h3 className="mt-4 text-2xl font-medium tracking-tight sm:text-3xl">
                        Interstate delivery shows a measurable risk signal.
                      </h3>

                      <p className="mt-5 max-w-2xl leading-8 text-[var(--foreground)]">
                        Different-state orders were late more often than same-state
                        orders, and also received lower average reviews.
                      </p>

                      <div className="mt-8 grid gap-4 sm:grid-cols-2">
                        <div className="rounded-2xl border border-[var(--border)] p-6">
                          <p className="text-sm uppercase tracking-[0.2em] text-[var(--muted)]">
                            Different-state
                          </p>
                          <p className="mt-4 text-3xl font-semibold">
                            10.0%
                          </p>
                          <p className="mt-1 text-xs text-[var(--muted)]">
                            Late · 3.95★ average review
                          </p>
                        </div>

                        <div className="rounded-2xl border border-[var(--border)] p-6">
                          <p className="text-sm uppercase tracking-[0.2em] text-[var(--muted)]">
                            Same-state
                          </p>
                          <p className="mt-4 text-3xl font-semibold">
                            6.7%
                          </p>
                          <p className="mt-1 text-xs text-[var(--muted)]">
                            Late · 4.13★ average review
                          </p>
                        </div>
                      </div>
                    </>
                  )}

                  {selectedDecision === "categories" && (
                    <>
                      <h3 className="mt-4 text-2xl font-medium tracking-tight sm:text-3xl">
                        Office furniture underperforms its benchmark.
                      </h3>

                      <p className="mt-5 max-w-2xl leading-8 text-[var(--foreground)]">
                        Office furniture averages a 3.61★ review score versus a
                        4.09★ marketplace category benchmark, making it a clear segment
                        for deeper investigation.
                      </p>

                      <div className="mt-8 grid gap-4 sm:grid-cols-2">
                        <div className="rounded-2xl border border-[var(--border)] p-6">
                          <p className="text-sm uppercase tracking-[0.2em] text-[var(--muted)]">
                            Office furniture
                          </p>
                          <p className="mt-4 text-3xl font-semibold">
                            3.61★
                          </p>
                          <p className="mt-1 text-xs text-[var(--muted)]">
                            Average review
                          </p>
                        </div>

                        <div className="rounded-2xl border border-[var(--border)] p-6">
                          <p className="text-sm uppercase tracking-[0.2em] text-[var(--muted)]">
                            Marketplace benchmark
                          </p>
                          <p className="mt-4 text-3xl font-semibold">
                            4.09★
                          </p>
                          <p className="mt-1 text-xs text-[var(--muted)]">
                            Category benchmark
                          </p>
                        </div>
                      </div>
                    </>
                  )}

                  <div className="mt-10 border-t border-[var(--border)] pt-6">
                    <button
                      type="button"
                      onClick={() => setSelectedDecision("delivery")}
                      className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-medium text-white transition hover:opacity-85"
                    >
                      Explore the primary signal →
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

     {/* Severe Delay Impact */}
<section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
  <div className="max-w-5xl">
    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
      The severity effect
    </p>

    <h2 className="mt-4 text-4xl font-medium leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl">
      The longer the delay,
      <br />
      <span className="text-[var(--accent)]">
        the sharper the satisfaction drop.
      </span>
    </h2>

    <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--foreground)]/80 sm:text-lg">
      Severe delays are where the relationship becomes especially visible.
      Low satisfaction rises sharply as delivery delays extend.
    </p>
  </div>

  {/* Severity comparison */}
  <div className="mt-10 grid gap-3 lg:grid-cols-3">

    {/* 1–2 days */}
    <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5">
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold tracking-[0.2em] text-[var(--muted)]">
          01
        </p>

        <p className="text-xs uppercase tracking-[0.15em] text-[var(--muted)]">
          1–2 days late
        </p>
      </div>

      <p className="mt-6 text-4xl font-semibold tracking-tight text-[var(--accent)]">
        15.6%
      </p>

      <p className="mt-1 text-xs text-[var(--muted)]">
        Low satisfaction
      </p>

      <div className="mt-5 h-2 overflow-hidden rounded-full bg-[var(--border)]">
        <div
          className="h-full w-[20%] rounded-full bg-[var(--accent)]"
          aria-hidden="true"
        />
      </div>
    </div>

    {/* 6–10 days */}
    <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5">
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold tracking-[0.2em] text-[var(--muted)]">
          02
        </p>

        <p className="text-xs uppercase tracking-[0.15em] text-[var(--muted)]">
          6–10 days late
        </p>
      </div>

      <p className="mt-6 text-4xl font-semibold tracking-tight text-[var(--accent)]">
        74.1%
      </p>

      <p className="mt-1 text-xs text-[var(--muted)]">
        Low satisfaction
      </p>

      <div className="mt-5 h-2 overflow-hidden rounded-full bg-[var(--border)]">
        <div
          className="h-full w-[92%] rounded-full bg-[var(--accent)]"
          aria-hidden="true"
        />
      </div>
    </div>

    {/* 11–20 days */}
    <div className="rounded-xl border border-[var(--accent)]/60 bg-[var(--accent)]/[0.06] p-5">
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold tracking-[0.2em] text-[var(--accent)]">
          03
        </p>

        <p className="text-xs uppercase tracking-[0.15em] text-[var(--muted)]">
          11–20 days late
        </p>
      </div>

      <p className="mt-6 text-4xl font-semibold tracking-tight text-[var(--accent)]">
        80.3%
      </p>

      <p className="mt-1 text-xs text-[var(--muted)]">
        Low satisfaction
      </p>

      <div className="mt-5 h-2 overflow-hidden rounded-full bg-[var(--border)]">
        <div
          className="h-full w-full rounded-full bg-[var(--accent)]"
          aria-hidden="true"
        />
      </div>
    </div>
  </div>

  {/* Takeaway */}
  <div className="mt-6 flex items-start gap-4 border-l-2 border-[var(--accent)] pl-5">
    <p className="max-w-3xl text-sm leading-6 text-[var(--foreground)]/80">
      Severe delays should be identified and escalated before they become
      extended customer experience failures.
    </p>
  </div>
</section>

{/* Secondary Signals */}
<section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28">
  <div className="max-w-5xl">
    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
      Secondary signals
    </p>

    <h2 className="mt-4 text-4xl font-medium leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl">
      Delivery is the primary signal.
      <br />
      <span className="text-[var(--muted)]">
        But other patterns help locate the risk.
      </span>
    </h2>

    <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--foreground)]/80 sm:text-lg">
      Geography, freight cost, category performance and seller behaviour
      provide additional signals for where operational problems may be
      concentrated.
    </p>
  </div>

  <div className="mt-12 grid gap-4 lg:grid-cols-2">
    {/* Geography */}
    <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-7">
      <div className="flex items-start justify-between">
        <p className="text-xs font-semibold tracking-[0.2em] text-[var(--accent)]">
          01 · GEOGRAPHY
        </p>

        <span className="text-sm text-[var(--muted)]">
          Interstate
        </span>
      </div>

      <h3 className="mt-8 text-2xl font-medium tracking-tight">
        Different-state orders were more likely to arrive late.
      </h3>

      <div className="mt-7 grid grid-cols-2 gap-4">
        <div>
          <p className="text-3xl font-semibold tracking-tight">
            10.0%
          </p>
          <p className="mt-1 text-sm text-[var(--muted)]">
            Different-state late
          </p>
        </div>

        <div>
          <p className="text-3xl font-semibold tracking-tight">
            6.7%
          </p>
          <p className="mt-1 text-sm text-[var(--muted)]">
            Same-state late
          </p>
        </div>
      </div>

      <p className="mt-6 text-sm leading-6 text-[var(--muted)]">
        Average review was also lower for different-state orders:
        3.95★ versus 4.13★.
      </p>
    </div>

    {/* Freight */}
    <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-7">
      <div className="flex items-start justify-between">
        <p className="text-xs font-semibold tracking-[0.2em] text-[var(--accent)]">
          02 · FREIGHT
        </p>

        <span className="text-sm text-[var(--muted)]">
          Cost signal
        </span>
      </div>

      <h3 className="mt-8 text-2xl font-medium tracking-tight">
        Higher freight cost coincided with lower reviews.
      </h3>

      <div className="mt-7 flex items-end gap-5">
        <div>
          <p className="text-3xl font-semibold tracking-tight">
            4.28★
          </p>
          <p className="mt-1 text-sm text-[var(--muted)]">
            Under $10 freight
          </p>
        </div>

        <span className="pb-2 text-xl text-[var(--muted)]">→</span>

        <div>
          <p className="text-3xl font-semibold tracking-tight text-[var(--accent)]">
            3.65★
          </p>
          <p className="mt-1 text-sm text-[var(--muted)]">
            $80+ freight
          </p>
        </div>
      </div>

      <p className="mt-6 text-sm leading-6 text-[var(--muted)]">
        A useful segment-level signal, but not evidence that freight cost
        itself causes lower satisfaction.
      </p>
    </div>

    {/* Category */}
    <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-7">
      <div className="flex items-start justify-between">
        <p className="text-xs font-semibold tracking-[0.2em] text-[var(--accent)]">
          03 · CATEGORY
        </p>

        <span className="text-sm text-[var(--muted)]">
          Segment
        </span>
      </div>

      <h3 className="mt-8 text-2xl font-medium tracking-tight">
        Office furniture underperformed its benchmark.
      </h3>

      <div className="mt-7 grid grid-cols-2 gap-4">
        <div>
          <p className="text-3xl font-semibold tracking-tight text-[var(--accent)]">
            3.61★
          </p>
          <p className="mt-1 text-sm text-[var(--muted)]">
            Office furniture
          </p>
        </div>

        <div>
          <p className="text-3xl font-semibold tracking-tight">
            4.09★
          </p>
          <p className="mt-1 text-sm text-[var(--muted)]">
            Category benchmark
          </p>
        </div>
      </div>

      <p className="mt-6 text-sm leading-6 text-[var(--muted)]">
        A segment-specific opportunity for deeper investigation, rather
        than a universal explanation for dissatisfaction.
      </p>
    </div>

    {/* Sellers */}
    <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-7">
      <div className="flex items-start justify-between">
        <p className="text-xs font-semibold tracking-[0.2em] text-[var(--accent)]">
          04 · SELLERS
        </p>

        <span className="text-sm text-[var(--muted)]">
          Intervention
        </span>
      </div>

      <h3 className="mt-8 text-2xl font-medium tracking-tight">
        Seller performance can help locate delivery risk.
      </h3>

      <p className="mt-7 max-w-xl text-base leading-7 text-[var(--foreground)]/80">
        Sellers with persistently high late-delivery rates provide useful
        targets for operational investigation and intervention.
      </p>

      <div className="mt-7 border-t border-[var(--border)] pt-5">
        <p className="text-sm text-[var(--muted)]">
          Suggested focus
        </p>

        <p className="mt-1 text-base">
          Seller late-delivery rate
        </p>
      </div>
    </div>
  </div>
</section>

{/* Recommendations */}
<section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
  <div className="max-w-5xl">
    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
      What should Olist do?
    </p>

    <h2 className="mt-4 text-4xl font-medium leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl">
      Turn the signal into
      <br />
      <span className="text-[var(--accent)]">
        operational action.
      </span>
    </h2>

    <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--foreground)]/80 sm:text-lg">
      The analysis points to delivery reliability as the first priority,
      with secondary signals helping Olist target where intervention may
      have the greatest operational value.
    </p>
  </div>

  <div className="mt-10 border-y border-[var(--border)]">

  {/* Column headings */}
  <div className="hidden grid-cols-[60px_1fr_220px] gap-5 border-b border-[var(--border)] py-4 lg:grid">
    <div />

    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--accent)]">
      Action
    </p>

    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--accent)]">
      KPI
    </p>
  </div>

  <div className="divide-y divide-[var(--border)]">

    {/* Recommendation 01 */}
    <div className="grid gap-5 py-6 lg:grid-cols-[60px_1fr_220px] lg:items-stretch">
      <p className="text-sm font-semibold tracking-[0.2em] text-[var(--accent)]">
        01
      </p>

      <div>
        <h3 className="text-xl font-medium tracking-tight sm:text-2xl">
          Reduce severe delivery delays.
        </h3>

        <p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--muted)]">
          Focus exception monitoring on orders reaching 6+ days late
          and escalate severe delays before they become extended
          customer experience failures.
        </p>
      </div>
    
      <div>
        <p className="mt-1.5 text-sm leading-6">
          Severe-delay share
          <br />
          Low-review share
        </p>
      </div>
    </div>

    {/* Recommendation 02 */}
    <div className="grid gap-5 py-6 lg:grid-cols-[60px_1fr_220px] lg:items-start">
      <p className="text-sm font-semibold tracking-[0.2em] text-[var(--accent)]">
        02
      </p>

      <div>
        <h3 className="text-xl font-medium tracking-tight sm:text-2xl">
          Target high-risk sellers and delivery segments.
        </h3>

        <p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--muted)]">
          Identify sellers with persistently high late-delivery rates
          and prioritize the segments where delivery reliability is
          weakest.
        </p>
      </div>

      <div>
        <p className="mt-1.5 text-sm leading-6">
          Seller late-delivery rate
          <br />
          Segment late rate
        </p>
      </div>
    </div>

    {/* Recommendation 03 */}
    <div className="grid gap-5 py-6 lg:grid-cols-[60px_1fr_220px] lg:items-start">
      <p className="text-sm font-semibold tracking-[0.2em] text-[var(--accent)]">
        03
      </p>

      <div>
        <h3 className="text-xl font-medium tracking-tight sm:text-2xl">
          Investigate interstate and high-freight segments.
        </h3>

        <p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--muted)]">
          Use geography and freight-cost signals to identify segments
          that warrant deeper operational investigation.
        </p>
      </div>

      <div>
        <p className="mt-1.5 text-sm leading-6">
          Segment late rate
          <br />
          Review score
        </p>
      </div>
    </div>

    {/* Recommendation 04 */}
    <div className="grid gap-5 py-6 lg:grid-cols-[60px_1fr_220px] lg:items-start">
      <p className="text-sm font-semibold tracking-[0.2em] text-[var(--accent)]">
        04
      </p>

      <div>
        <h3 className="text-xl font-medium tracking-tight sm:text-2xl">
          Investigate category underperformance.
        </h3>

        <p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--muted)]">
          Use category-level review gaps, such as office furniture,
          to identify segments that may need deeper investigation.
        </p>
      </div>

      <div>
        <p className="mt-1.5 text-sm leading-6">
          Category review gap
        </p>
      </div>
    </div>
  </div>
</div>
</section>

{/* Methodology */}
<section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
  <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">

    {/* Left */}
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
        How I analyzed it
      </p>

      <h2 className="mt-5 text-4xl font-medium leading-[1.02] tracking-tight sm:text-5xl">
        From marketplace data
        <br />
        <span className="text-[var(--accent)]">
          to operational signals.
        </span>
      </h2>
    </div>

    {/* Right */}
    <div>
      <p className="max-w-3xl text-sm leading-6 text-[var(--foreground)]/80 sm:text-base">
        The analysis was built around an order-level analytical base,
        combining multiple marketplace tables while controlling for
        fan-out and duplicate aggregation.
      </p>

      {/* Summary metrics */}
      <div className="mt-8 grid grid-cols-3 border-b border-[var(--border)] pb-8">
        <div>
          <p className="text-3xl font-semibold tracking-tight">
            ~100K
          </p>
          <p className="mt-1 text-xs text-[var(--muted)]">
            Orders analyzed
          </p>
        </div>

        <div>
          <p className="text-3xl font-semibold tracking-tight">
            9
          </p>
          <p className="mt-1 text-xs text-[var(--muted)]">
            Linked tables
          </p>
        </div>

        <div>
          <p className="text-3xl font-semibold tracking-tight">
            6
          </p>
          <p className="mt-1 text-xs text-[var(--muted)]">
            Analytical lenses
          </p>
        </div>
      </div>

      {/* Analytical lenses */}
      <div className="border-b border-[var(--border)] py-7">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
          Analytical lenses
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {[
            "Performance",
            "Delivery",
            "Seller / Geo",
            "Category",
            "Payment",
            "Root Cause",
          ].map((item) => (
            <span
              key={item}
              className="rounded-full border border-[var(--border)] px-3 py-1.5 text-xs text-[var(--muted)]"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Data quality */}
      <div className="border-b border-[var(--border)] py-7">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
          Data quality controls
        </p>

        <p className="mt-3 max-w-3xl text-sm leading-6 text-[var(--muted)]">
          Delivery timing was checked against estimated dates. Reviews
          were summarized at order level where multiple reviews existed,
          while payment and item-level tables were summarized before
          joining to avoid fan-out.
        </p>
      </div>

      {/* Analytical boundary */}
      <div className="pt-7">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
          Analytical boundary
        </p>

        <p className="mt-3 max-w-3xl text-sm leading-6 text-[var(--muted)]">
          This is observational analysis. The findings identify
          associations and operational signals, not proven causal effects.
        </p>
      </div>
    </div>
  </div>
</section>

{/* Supporting Analysis */}
<section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
  <div className="max-w-5xl">
    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
      Supporting analysis
    </p>

    <h2 className="mt-4 text-4xl font-medium leading-[1.02] tracking-tight sm:text-5xl">
      The evidence
      <br />
      <span className="text-[var(--accent)]">
        behind the story.
      </span>
    </h2>

    <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--foreground)]/80">
      A selection of the deeper analysis used to validate the findings
      presented throughout this case study.
    </p>
  </div>

  {/* Visual gallery */}
  <div className="mt-10 grid gap-5 md:grid-cols-2">

    {/* Delivery reliability */}
    <figure className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] md:col-span-2">
      <div className="overflow-hidden">
        <img
          src="/projects/olist/delivery-risk.png"
          alt="Delivery reliability analysis comparing early or on-time and late orders"
          className="w-full object-cover transition duration-500 group-hover:scale-[1.01]"
        />
      </div>

      <figcaption className="border-t border-[var(--border)] px-5 py-4">
        <p className="text-sm font-medium">
          Delivery reliability and customer satisfaction
        </p>
        <p className="mt-1 text-xs text-[var(--muted)]">
          Early/on-time orders averaged 4.28★ versus 2.55★ for late orders.
        </p>
      </figcaption>
    </figure>

    {/* Severity */}
    <figure className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)]">
      <div className="overflow-hidden">
        <img
          src="/projects/olist/delay-severity.png"
          alt="Delivery delay severity and low customer satisfaction analysis"
          className="w-full object-cover"
        />
      </div>

      <figcaption className="border-t border-[var(--border)] px-5 py-4">
        <p className="text-sm font-medium">
          Severe delay impact
        </p>
        <p className="mt-1 text-xs text-[var(--muted)]">
          Low satisfaction rises sharply as delivery delays extend.
        </p>
      </figcaption>
    </figure>

    {/* Growth */}
    <figure className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)]">
      <div className="overflow-hidden">
        <img
          src="/projects/olist/growth-satisfaction.png"
          alt="Olist marketplace growth and customer satisfaction analysis"
          className="w-full object-cover"
        />
      </div>

      <figcaption className="border-t border-[var(--border)] px-5 py-4">
        <p className="text-sm font-medium">
          Growth and satisfaction
        </p>
        <p className="mt-1 text-xs text-[var(--muted)]">
          Marketplace activity expanded while review scores fluctuated.
        </p>
      </figcaption>
    </figure>

  </div>
</section>

{/* Explore the Analysis */}
<section className="mx-auto max-w-7xl px-6 pb-10 pt-20 lg:px-10 lg:pb-10 lg:pt-20">
  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
    Explore the Analysis
  </p>

  <div className="mt-8 flex flex-wrap gap-3">
    <a
      href="https://colab.research.google.com/drive/1PzQ_HORtyXaNbjdM4scnUyLmEMFqjagf?usp=sharing"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-medium text-white transition hover:opacity-85"
    >
      View Notebook →
    </a>

    <a
      href="https://docs.google.com/presentation/d/1Q35aHr8yJ6pNLkr50gqfBP_4XATCQSuK/edit?usp=drive_link&ouid=111265864405339006373&rtpof=true&sd=true"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex rounded-full border border-[var(--border)] px-6 py-3 text-sm font-medium text-[var(--foreground)] transition hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-white"
    >
      View Leadership Report →
    </a>
  </div>
</section>

{/* Back to Work */}
<section className="mx-auto max-w-7xl px-6 pb-16 pt-10 lg:px-10 lg:pb-20 lg:pt-10">
  <div className="flex justify-start">
    <a
      href="/#work"
      className="
        inline-flex
        items-center
        gap-2
        rounded-full
        border
        border-[var(--border)]
        px-5
        py-2.5
        text-sm
        text-[var(--foreground)]
        transition-all
        duration-200
        hover:border-[var(--accent)]
        hover:bg-[var(--accent)]
        hover:text-white
      "
    >
      ← Back to Work
    </a>
  </div>
</section>

<Footer />
    </main>
  );
}