
import Navbar from "../../Navbar";
import Footer from "../../Footer";

export default function AmazonProject() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Navbar />

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-20 lg:px-10 lg:pt-28">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
          04 · Tableau · Sales Analytics
        </p>

        <h1 className="mt-6 max-w-5xl text-5xl font-medium leading-[0.98] tracking-[-0.05em] sm:text-7xl lg:text-8xl">
          Amazon Sales
          <br />
          <span className="text-[var(--accent)]">
            Performance
          </span>
        </h1>

        <div className="mt-8 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <p className="max-w-2xl text-lg leading-8 text-[var(--foreground)]">
            Exploring revenue patterns, product and regional
            performance, discounting trade-offs and sales behaviour
            through an interactive Tableau dashboard.
          </p>

          <div className="flex max-w-sm flex-wrap gap-2">
            {[
              "Tableau",
              "Sales Analytics",
              "Data Visualization",
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
      </section>

      {/* Executive Dashboard */}
<section className="mx-auto max-w-7xl px-6 lg:px-10">
  <div className="overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--surface)]">
    <img
      src="/projects/amazon/overview.png"
      alt="Amazon Sales Performance — Tableau Executive Overview"
      className="w-full"
    />
  </div>
</section>



      {/* Project Overview */}
      <section className="mx-auto max-w-7xl px-6 py-32 lg:px-10">
        <div className="grid gap-16 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
              The Project
            </p>
          </div>

          <div>
            <h2 className="max-w-3xl text-3xl leading-tight tracking-tight sm:text-5xl">
              Understanding the patterns behind sales performance.
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-8 text-[var(--foreground)]">
              This project examines sales performance across
              product categories, customer regions, discounts
              and payment methods. The goal was to move beyond
              headline revenue and explore the patterns and
              trade-offs that can inform business decisions.
            </p>

            
<p className="mt-4 max-w-2xl text-sm leading-6 text-[var(--muted)]">
  Dataset: Amazon Sales Analysis — Cleaned Data (Kaggle).
  <br />
  Period analyzed: 1 January 2022 – 31 December 2023.
  <br />
  Scope: 50,000 orders across 6 product categories and 4 regions.
</p>

          </div>
        </div>
      </section>

            {/* Revenue & Discount Dashboard */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">

        <div className="mb-10 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
            Dashboard 02 · Tableau
          </p>

          <h2 className="mt-5 text-3xl tracking-tight sm:text-5xl">
            Revenue Composition
            <br />
            <span className="text-[var(--accent)]">
              &amp; Discount Trade-offs
            </span>
          </h2>

          <p className="mt-6 max-w-2xl leading-7 text-[var(--foreground)]/70">
            Explore revenue across product categories, discount leakage,
            average order value, payment methods and order behaviour
            through a second interactive Tableau dashboard.
          </p>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--surface)]">
          <img
            src="/projects/amazon/revenue-tradeoffs.png"
            alt="Amazon Sales Performance Tableau dashboard showing revenue composition and discount trade-offs"
            className="h-auto w-full"
          />
        </div>

      </section>

      {/* Key Findings */}
<section className="mx-auto max-w-7xl px-6 py-32 lg:px-10">
  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
    Key Findings
  </p>

  <h2 className="mt-5 max-w-4xl text-4xl tracking-tight sm:text-6xl">
    Looking beyond
    <br />
    <span className="text-[var(--accent)]">
      the headline numbers.
    </span>
  </h2>

  <div className="mt-16 grid gap-x-12 gap-y-12 md:grid-cols-2">
    {[
      {
        number: "01",
        title: "A stable revenue base",
        metric: "$32.87M",
        description:
          "Revenue across 50,000 orders, with monthly fluctuations but no obvious recurring pattern.",
      },
      {
        number: "02",
        title: "A balanced sales mix",
        metric: "6 categories · 4 regions",
        description:
          "Revenue was broadly distributed across product categories and customer regions, with no clear dominant segment.",
      },
      {
        number: "03",
        title: "Discount leakage",
        metric: "$1.86M",
        description:
          "Discount leakage reached approximately $1.86M at the 30% discount level.",
      },
      {
        number: "04",
        title: "Lower average order value",
        metric: "$749 → $522",
        description:
          "Average order value declined across the observed discount levels, from approximately $749 at 0% to $522 at 30%. This is an observed relationship, not proof of causation.",
      },
    ].map((finding) => (
      <article
        key={finding.number}
        className="border-t border-[var(--border)] pt-6"
      >
        <p className="text-sm font-semibold tracking-[0.2em] text-[var(--accent)]">
          {finding.number}
        </p>

        <h3 className="mt-5 text-xl font-medium tracking-tight sm:text-2xl">
          {finding.title}
        </h3>

        <p className="mt-4 text-2xl font-medium tracking-tight text-[var(--accent)] sm:text-3xl">
          {finding.metric}
        </p>

        <p className="mt-4 max-w-lg leading-7 text-[var(--foreground)]/70">
          {finding.description}
        </p>
      </article>
    ))}
  </div>
        </section>

      {/* Methodology */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
          How It Was Built
        </p>

        <h2 className="mt-6 max-w-5xl text-4xl font-medium leading-tight tracking-tight sm:text-6xl">
  From raw sales data to an
  <br className="hidden sm:block" />
  <span className="text-[var(--accent)]">
    interactive dashboard.
  </span>
</h2>

       <div className="mt-16 grid grid-cols-1 items-stretch gap-4 sm:grid-cols-[1fr_auto_1fr] lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] lg:gap-3">

  {/* Step 1 */}
  <article className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-7 sm:p-6 xl:p-8">
    <span className="text-sm font-semibold">01</span>

    <h3 className="mt-10 text-2xl font-medium text-[var(--accent)]">
      Explore
    </h3>

    <p className="mt-3 text-sm leading-6 text-[var(--foreground)]/70">
      Understand the dataset, its fields and sales metrics.
    </p>
  </article>

  {/* Arrow 1 */}
  <div className="hidden items-center justify-center text-3xl text-[var(--accent)] lg:flex">
    →
  </div>

  {/* Step 2 */}
  <article className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-7 sm:p-6 xl:p-8">
    <span className="text-sm font-semibold">02</span>

    <h3 className="mt-10 text-2xl font-medium text-[var(--accent)]">
      Analyze
    </h3>

    <p className="mt-3 text-sm leading-6 text-[var(--foreground)]/70">
      Explore revenue, discounts, prices, customer ratings and profitability to identify patterns and select the most relevant insights for the final dashboard.
    </p>
  </article>

  {/* Arrow 2 */}
  <div className="hidden items-center justify-center text-3xl text-[var(--accent)] lg:flex">
    →
  </div>

  {/* Step 3 */}
  <article className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-7 sm:p-6 xl:p-8">
    <span className="text-sm font-semibold">03</span>

    <h3 className="mt-10 text-2xl font-medium text-[var(--accent)]">
      Visualize
    </h3>

    <p className="mt-3 text-sm leading-6 text-[var(--foreground)]/70">
      Build interactive Tableau views with filters and comparisons.
    </p>
  </article>

  {/* Arrow 3 */}
  <div className="hidden items-center justify-center text-3xl text-[var(--accent)] lg:flex">
    →
  </div>

  {/* Step 4 */}
  <article className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-7 sm:p-6 xl:p-8">
    <span className="text-sm font-semibold">04</span>

    <h3 className="mt-10 text-2xl font-medium text-[var(--accent)]">
      Interpret
    </h3>

    <p className="mt-3 text-sm leading-6 text-[var(--foreground)]/70">
      Identify revenue patterns and discount-related trade-offs.
    </p>
  </article>

</div>

      </section>

      {/* Recommendations */}
<section className="mx-auto max-w-7xl px-6 pt-32 pb-12 lg:px-10">
  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
    Recommendations
  </p>

  <h2 className="mt-6 max-w-4xl text-4xl font-medium leading-tight tracking-tight sm:text-6xl">
    Turning observations into{" "}
    <span className="text-[var(--accent)]">next steps.</span>
  </h2>

  <p className="mt-6 max-w-2xl leading-7 text-[var(--foreground)]/70">
    The analysis highlights opportunities to examine discounting
    more closely, evaluate order value alongside promotional depth,
    and investigate customer and basket behaviour through richer
    transaction-level data.
  </p>

  <div className="mt-16">
    {/* Recommendation 1 */}
    <article className="grid gap-6 border-t border-[var(--border)] py-8 md:grid-cols-[1fr_2fr] lg:grid-cols-[1fr_2fr]">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
          01 / Discounting
        </p>
        <p className="mt-3 text-3xl font-medium tracking-tight text-[var(--accent)] sm:text-4xl">
          $1.86M
        </p>
        <p className="mt-2 text-sm text-[var(--foreground)]/60">
          Discount leakage at the 30% discount level
        </p>
      </div>

      <div>
        <h3 className="text-xl font-medium sm:text-2xl">
          Monitor Discount Depth
        </h3>
        <p className="mt-3 max-w-2xl leading-7 text-[var(--foreground)]/70">
          Track revenue leakage at higher discount levels and evaluate
          whether deeper discounts justify the associated trade-off.
        </p>
      </div>
    </article>

    {/* Recommendation 2 */}
    <article className="grid gap-6 border-t border-[var(--border)] py-8 md:grid-cols-[1fr_2fr] lg:grid-cols-[1fr_2fr]">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
          02 / Order Value
        </p>
        <p className="mt-3 text-3xl font-medium tracking-tight text-[var(--accent)] sm:text-4xl">
          $749 → $522
        </p>
        <p className="mt-2 text-sm text-[var(--foreground)]/60">
          Average order value across observed discount levels
        </p>
      </div>

      <div>
        <h3 className="text-xl font-medium sm:text-2xl">
          Review Order Value by Discount Level
        </h3>
        <p className="mt-3 max-w-2xl leading-7 text-[var(--foreground)]/70">
          Use average order value alongside discount levels when
          assessing promotional performance, rather than evaluating
          discounts on revenue alone.
        </p>
      </div>
    </article>

    {/* Recommendation 3 */}
    <article className="grid gap-6 border-y border-[var(--border)] py-8 md:grid-cols-[1fr_2fr] lg:grid-cols-[1fr_2fr]">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
          03 / Future Analysis
        </p>
        <p className="mt-3 text-3xl font-medium tracking-tight text-[var(--accent)] sm:text-4xl">
          LINE-ITEM DATA
        </p>
        <p className="mt-2 text-sm text-[var(--foreground)]/60">
          A deeper view of baskets and product combinations
        </p>
      </div>

      <div>
        <h3 className="text-xl font-medium sm:text-2xl">
          Deepen Transaction-Level Analysis
        </h3>
        <p className="mt-3 max-w-2xl leading-7 text-[var(--foreground)]/70">
          Use richer transaction or line-item data in future analysis
          to investigate basket composition, product combinations
          and customer-level behaviour.
        </p>
      </div>
    </article>
  </div>
</section>

{/* Explore the Analysis */}
<section className="mx-auto max-w-7xl px-6 pb-10 pt-20 lg:px-10 lg:pb-10 lg:pt-20">
  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
    Explore the Analysis
  </p>

  <div className="mt-8 flex flex-wrap gap-3">
    <a
      href="https://public.tableau.com/views/Amazon_Sales_Performance_Revenue_Drivers/AmazonSalesPerformanceFromOverviewtoRevenueTrade-offs?:language=en-GB&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-medium text-white transition hover:opacity-85"
    >
      View Dashboard →
    </a>

    <a
      href="https://canva.link/7ahf1r3l5l94gjq"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex rounded-full border border-[var(--border)] px-6 py-3 text-sm font-medium text-[var(--foreground)] transition hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-white"
    >
      View Presentation →
    </a>
  </div>
</section>

{/* Recognition */}
<section className="mx-auto max-w-7xl px-6 pb-24 pt-12 lg:px-10">
  <div className="pt-8">

    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
      Recognition · Runner-up
    </p>

    <h2 className="mt-5 max-w-3xl text-3xl font-medium leading-tight tracking-tight sm:text-5xl">
      Tableau Data Visualization Challenge 2026
    </h2>

    <p className="mt-5 max-w-2xl leading-7 text-[var(--foreground)]/70">
      Awarded second place in the Tableau Data Visualization Challenge
      2026, organized by HackerRank Campus Crew at NIE Mysuru.
    </p>

    <p className="mt-3 text-sm text-[var(--foreground)]/50">
      30 September 2026
    </p>

    <a
      href="/projects/amazon/tableau-challenge-certificate.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="mt-7 inline-flex items-center gap-3 border-b border-[var(--accent)] pb-2 text-sm font-medium transition-colors hover:text-[var(--accent)]"
    >
      View Certificate
      <span aria-hidden="true">↗</span>
    </a>

  </div>
</section>


{/* Project Navigation */}
<section className="mx-auto max-w-7xl px-6 pb-16 pt-10 lg:px-10 lg:pb-20 lg:pt-10">
  <div className="flex flex-col justify-between gap-4 border-t border-[var(--border)] pt-8 sm:flex-row sm:items-center">
    <a
      href="/projects/olist"
      className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-5 py-2.5 text-sm text-[var(--foreground)] transition-all duration-200 hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-white"
    >
      ← Previous project
    </a>

    <a
      href="/projects/cash-flow-automation"
      className="inline-flex items-center gap-2 rounded-full border border-[var(--accent)] px-5 py-2.5 text-sm text-[var(--foreground)] transition-all duration-200 hover:bg-[var(--accent)] hover:text-white"
    >
      View Automation Case Study →
    </a>
  </div>
</section>


      <Footer />


    </main>
  );
}
