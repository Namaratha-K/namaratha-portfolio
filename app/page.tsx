"use client";

import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import Typewriter from "./Typewriter";
import AboutPanel from "./AboutPanel";
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import Contact from "./Contact";
import Footer from "./Footer";
import HeroAnalytics from "./HeroAnalytics";
import Navbar from "./Navbar";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main
      id="top"
      className="min-h-screen bg-[var(--background)] text-[var(--foreground)]"
    >
    {/* Navigation */}
    <Navbar />

      {/* Hero */}
      <section className="relative mx-auto flex min-h-[calc(100vh-90px)] max-w-7xl items-center px-6 py-20 lg:px-10">
        <div className="max-w-4xl">
          <p className="mb-7 text-sm uppercase tracking-[0.3em] text-[var(--foreground)]">
  <Typewriter />
</p>

          <h1 className="text-6xl font-semibold leading-[0.9] tracking-[-0.05em] sm:text-7xl lg:text-9xl">
  Data <span className="text-[var(--accent)]">Analyst</span>
</h1>

          <p className="mt-10 max-w-2xl text-lg leading-8 text-[var(--foreground)] sm:text-xl">
            I turn data into clear insights, thoughtful dashboards,
            and practical analytical solutions.
          </p>

          <div className="mt-10 max-w-2xl">
  {/* PRIMARY ACTIONS */}
  
<div className="flex flex-wrap gap-4">
  <a
    href="#work"
    className="rounded-full bg-[var(--accent)] px-7 py-3 text-sm font-medium text-white transition hover:opacity-85"
  >
    Explore my work
  </a>

  <a
    href="#contact"
    className="rounded-full border border-[var(--foreground)] px-7 py-3 text-sm font-medium text-[var(--foreground)] transition hover:bg-[var(--foreground)] hover:text-[var(--background)]"
  >
    Get in touch
  </a>
</div>

<div className="mt-6">
  <a
    href="/projects/cash-flow-automation"
    className="inline-flex w-[310px] max-w-full items-center justify-center gap-2 rounded-full border border-[var(--accent)]/60 bg-[var(--accent)]/[0.06] px-4 py-2.5 text-sm font-medium text-[var(--foreground)] transition-all duration-300 hover:border-[var(--accent)] hover:bg-[var(--accent)]/10 hover:text-[var(--accent)]"
  >
    View Automation Case Study
    <span aria-hidden="true">↗</span>
  </a>
</div>

</div>
        </div>

        <HeroAnalytics />
      </section>

      <AboutPanel />
      
      {/* Selected Work */}
<section
  id="work"
  className="mx-auto max-w-7xl px-6 py-32 lg:px-10"
>
  <div className="mb-16">
    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--accent)]">
      Featured Work
    </p>

    <h2 className="mt-4 max-w-3xl text-4xl tracking-tight sm:text-6xl">
      Turning data into decisions.
    </h2>

    <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--foreground)]/50">
      A selection of analytical projects spanning business intelligence,
      experimentation, customer analysis and data-driven decision making.
    </p>
  </div>

  {/* Featured Project */}
<article className="group">
  <div className="overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)]">
    <div className="relative aspect-[16/9] overflow-hidden">
      <img
        src="/projects/finance/overview.png"
        alt="Financial Analytics Dashboard — Power BI"
        className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.02]"
      />
    </div>
  </div>

  <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--accent)]">
  01 · Featured Project · Power BI
</p>

      <h3 className="text-3xl tracking-tight sm:text-4xl">
        Financial Analytics Dashboard
      </h3>

      
<p className="mt-4 max-w-2xl leading-7 text-[var(--foreground)]">
  An interactive personal finance dashboard designed to track
  income, spending, cash flow and transaction-level patterns.
</p>

<div className="mt-5 border-l-2 border-[var(--accent)] pl-5">
  <p className="text-sm leading-7 text-[var(--foreground)]/70">
    Key insight: Track spending patterns and compare income
    against expenses to understand cash flow over time.
  </p>
</div>


      

      <div className="mt-5 flex flex-wrap gap-2">
          {["Power BI", "DAX", "Power Query", "Data Modeling"].map(
            (tool) => (
              <span
                key={tool}
                className="px-1 py-1 text-xs text-[var(--foreground)] transition-colors hover:text-[var(--accent)]"
              >
                {tool}
              </span>
            )
          )}
        </div>
    </div>

    <a
      href="/projects/finance"
      className="shrink-0 rounded-full border border-[var(--border)] px-6 py-3 text-sm font-medium text-[var(--foreground)] transition hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-white"
    >
      View Case Study →
    </a>
  </div>
</article>
{/* Conversion & Experimentation */}
<article className="group mt-32">
  <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">

    {/* Project Info */}
    <div className="order-2 lg:order-1">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--accent)]">
        02 · E-commerce Analytics
      </p>

      <h3 className="mt-4 text-3xl tracking-tight sm:text-4xl">
        Conversion &amp; Experimentation
      </h3>

      
<p className="mt-5 max-w-xl leading-7 text-[var(--foreground)]">
  Diagnosing conversion leakage and identifying an opportunity
  to improve the first-time customer journey.
</p>

<div className="mt-5 border-l-2 border-[var(--accent)] pl-5">
  <p className="text-sm leading-7 text-[var(--foreground)]/70">
    Key finding: Returning users had a 1.00 percentage-point
    higher conversion rate than new users.
  </p>
</div>


      <div className="mt-6 flex flex-wrap gap-2">
        {["GA4", "BigQuery", "SQL", "Python", "Experimentation"].map(
          (tool) => (
            <span
              key={tool}
              className="px-1 py-1 text-xs text-[var(--foreground)] transition-colors hover:text-[var(--accent)]"
            >
              {tool}
            </span>
          )
        )}
      </div>

      <a
        href="/projects/ecommerce"
        className="mt-8 inline-flex rounded-full border border-[var(--border)] px-6 py-3 text-sm font-medium text-[var(--foreground)] transition hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-white"
      >
        View Case Study →
      </a>
    </div>

    {/* Project Image */}
<div className="order-1 overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] lg:order-2">
  <div className="relative aspect-[16/10] overflow-hidden">
    <img
      src="/projects/ecommerce/funnel-analysis.png"
      alt="E-commerce Conversion Funnel Analysis"
      className="h-full w-full object-contain transition duration-700 group-hover:scale-[1.02]"
    />
  </div>
</div>

  </div>
</article>
{/* Olist Marketplace Analysis */}
<article className="group mt-32">
  <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-20">

    {/* Project Image */}
    <div className="order-1 overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)]">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src="/projects/olist/delivery-risk.png"
          alt="Olist Marketplace Performance and Customer Experience Analysis"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.02]"
        />
      </div>
    </div>

    {/* Project Info */}
    <div className="order-2">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--accent)]">
        03 · Marketplace Analytics
      </p>

      <h3 className="mt-4 text-3xl tracking-tight sm:text-4xl">
        Olist Marketplace Performance
        <br />
        &amp; Customer Experience
      </h3>

      <p className="mt-5 max-w-xl leading-7 text-[var(--foreground)]">
        A leadership-oriented analysis of marketplace growth, delivery
        reliability, seller performance and customer satisfaction.
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {["Python", "Pandas", "Data Analysis"].map((tool) => (
          <span
            key={tool}
            className="px-1 py-1 text-xs text-[var(--foreground)] transition-colors hover:text-[var(--accent)]"
          >
            {tool}
          </span>
        ))}
      </div>

      <div className="mt-8 border-l-2 border-[var(--accent)] pl-5">
        <p className="text-sm leading-7 text-[var(--foreground)]/70">
          Delivery reliability emerged as the clearest operational
          relationship with customer dissatisfaction.
        </p>
      </div>

      <a
        href="/projects/olist"
        className="mt-8 inline-flex rounded-full border border-[var(--border)] px-6 py-3 text-sm font-medium text-[var(--foreground)] transition hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-white"
      >
        View Case Study →
      </a>
    </div>

  </div>
</article>
{/* Amazon Sales Performance */}
<article className="group mt-32">
  {/* Project Image */}
  <div className="overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)]">
    <div className="relative aspect-[16/10] overflow-hidden">
  <img
    src="/projects/amazon/overview.png"
    alt="Amazon Sales Performance Tableau Dashboard"
    className="h-full w-full object-contain transition duration-700 group-hover:scale-[1.02]"
  />
</div>
  </div>

  {/* Project Info */}
  <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--accent)]">
        04 · Tableau
      </p>

      <h3 className="mt-4 text-3xl tracking-tight sm:text-4xl">
        Amazon Sales Performance
      </h3>

      <p className="mt-4 max-w-2xl leading-7 text-[var(--foreground)]">
        An interactive sales analysis exploring revenue trends,
        category and regional mix, discounting and order behaviour.
      </p>

      
<div className="mt-5 flex flex-wrap items-center gap-3">
  <span className="inline-flex items-center rounded-full border border-[var(--accent)]/40 bg-[var(--accent)]/[0.06] px-3 py-1.5 text-sm font-medium text-[var(--accent)]">
    Runner-up
  </span>
  <span className="text-sm text-[var(--foreground)]/70">
    Tableau Data Visualization Challenge 2026
  </span>
</div>


      

      <div className="mt-5 flex flex-wrap gap-2">
        {["Tableau", "Sales Analytics", "Data Visualization"].map((tool) => (
          <span
            key={tool}
            className="px-1 py-1 text-xs text-[var(--foreground)] transition-colors hover:text-[var(--accent)]"
          >
            {tool}
          </span>
        ))}
      </div>
    </div>

    <a
      href="/projects/amazon"
      className="shrink-0 rounded-full border border-[var(--border)] px-6 py-3 text-sm font-medium text-[var(--foreground)] transition hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-white"
    >
      View Case Study →
    </a>
  </div>
</article>
</section>
<WorkExperience />
<Education />

{/* Resume */}
<section
  id="resume"
  className="mx-auto max-w-7xl px-6 py-16 lg:px-10"
>
  <div>
    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--accent)]">
      Resume
    </p>

    <a
      href="/resume/Namaratha_Karanth_CV.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="
        mt-5
        inline-flex
        items-center
        gap-2
        rounded-full
        border
        border-[var(--foreground)]/40
        px-5
        py-2.5
        text-sm
        text-[var(--foreground)]
        transition-all
        duration-200
        hover:border-[var(--accent)]
        hover:text-[var(--accent)]
      "
    >
      Download my resume
      <span className="text-[var(--accent)]">↗</span>
    </a>
  </div>
</section>

<Contact />
<Footer />

        
    </main>
  );
}