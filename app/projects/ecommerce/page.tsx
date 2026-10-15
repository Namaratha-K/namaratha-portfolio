import ThemeToggle from "../../ThemeToggle";
import Navbar from "../../Navbar";
import Footer from "../../Footer";

export default function EcommerceProject() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Navbar />

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pb-32 pt-20 lg:px-10 lg:pt-28">
        <div className="max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
            02 · E-commerce Analytics
          </p>

          <h1 className="mt-6 text-5xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-6xl lg:text-8xl">
            Conversion &amp;
            <br />
            Experimentation
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-[var(--foreground)] sm:text-xl">
            Diagnosing conversion leakage and identifying an opportunity
            to improve the first-time customer journey.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {["GA4", "BigQuery", "SQL", "Python", "Experimentation"].map(
              (tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-[var(--accent)]/40 px-4 py-2 text-xs text-[var(--foreground)]"
                >
                  {tool}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* The Problem */}
<section className="mx-auto max-w-7xl border-t border-[var(--border)] px-6 py-32 lg:px-10">
  <div className="mx-auto max-w-5xl text-center">

    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
      The Problem
    </p>

    <h2 className="mx-auto mt-8 max-w-4xl text-4xl font-medium leading-tight tracking-tight sm:text-6xl">
  The conversion opportunity is concentrated among{" "}
  <span className="text-[var(--accent)]">first-time</span>{" "}
  visitors.
</h2>

    <p className="mx-auto mt-8 max-w-2xl leading-8 text-[var(--foreground)]">
      The analysis investigated where customers were dropping out of the
      e-commerce journey and whether the conversion gap differed between
      new and returning users.
    </p>

    {/* Key Metrics */}
    <div className="mx-auto mt-16 grid max-w-3xl gap-10 sm:grid-cols-2">

      <div className="border-t border-[var(--border)] pt-6">
        <p className="text-5xl font-semibold text-[var(--accent)] sm:text-6xl">
          0.36%
        </p>

        <p className="mt-3 text-sm text-[var(--foreground)]">
          New-user session-to-purchase conversion
        </p>
      </div>

      <div className="border-t border-[var(--border)] pt-6">
        <p className="text-5xl font-semibold text-[var(--accent)] sm:text-6xl">
          1.36%
        </p>

        <p className="mt-3 text-sm text-[var(--foreground)]">
          Returning-user session-to-purchase conversion
        </p>
      </div>

    </div>

    {/* Key Insight */}
    <div className="mx-auto mt-12 max-w-2xl border-l-2 border-[var(--accent)] pl-6 text-left">
      <p className="text-lg leading-8">
        A{" "}
        <span className="font-semibold text-[var(--accent)]">
          +1.00 percentage-point
        </span>{" "}
        conversion gap separated returning and new users.
      </p>
    </div>

  </div>

      </section>
      {/* 01 — Funnel Analysis */}
<section className="mx-auto max-w-7xl px-6 py-32 lg:px-10">
  <div className="mb-12">
    <p className="text-sm font-bold tracking-[0.2em] text-[var(--accent)]">
  01
</p>

<p className="mt-3 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
  Funnel Analysis
</p>

<h2 className="text-4xl font-medium leading-tight tracking-tight sm:text-6xl">
  Where Is Conversion
  <br />
  <span className="text-[var(--accent)]">
    Leaking?
  </span>
</h2>

    <p className="mt-6 max-w-2xl leading-8 text-[var(--foreground)]">
      The funnel reveals substantial early-stage drop-off, with the
      largest volume loss occurring before customers reach the product
      stage.
    </p>
  </div>

  <div className="overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)]">
    <img
      src="/projects/ecommerce/funnel-analysis.png"
      alt="E-commerce session funnel analysis showing conversion drop-off"
      className="h-auto w-full"
    />
  </div>
</section>
{/* 02 — Acquisition Analysis */}
<section className="mx-auto max-w-7xl px-6 py-32 lg:px-10">
  <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">

    {/* Acquisition Mix Visual */}
    <div>
      <p className="text-sm font-bold tracking-[0.2em] text-[var(--accent)]">
        02
      </p>

      <p className="mt-3 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
        Acquisition Analysis
      </p>

      <div className="mt-8 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 sm:p-10">

        <p className="text-sm uppercase tracking-[0.2em] text-[var(--foreground)]">
          Customer Composition by Acquisition Source
        </p>

        <div className="mt-10 grid grid-cols-2 gap-10">

          {/* Google */}
          <div>
            <div className="flex h-72 flex-col justify-end overflow-hidden rounded-t-2xl border border-[var(--border)]">
              
              {/* Returning */}
              <div
                className="flex items-center justify-center bg-[var(--accent)] text-sm font-semibold text-white"
                style={{ height: "18.6%" }}
              >
                18.6%
              </div>

              {/* New */}
              <div
                className="flex items-center justify-center bg-[var(--border)] text-sm font-semibold text-[var(--foreground)]"
                style={{ height: "81.4%" }}
              >
                81.4%
              </div>

            </div>

            <p className="mt-4 text-center text-sm font-medium">
              Google
            </p>
          </div>

          {/* Shop Referral */}
          <div>
            <div className="flex h-72 flex-col justify-end overflow-hidden rounded-t-2xl border border-[var(--border)]">

              {/* Returning */}
              <div
                className="flex items-center justify-center bg-[var(--accent)] text-sm font-semibold text-white"
                style={{ height: "55.8%" }}
              >
                55.8%
              </div>

              {/* New */}
              <div
                className="flex items-center justify-center bg-[var(--border)] text-sm font-semibold text-[var(--foreground)]"
                style={{ height: "44.2%" }}
              >
                44.2%
              </div>

            </div>

            <p className="mt-4 text-center text-sm font-medium">
              Shop Referral
            </p>
          </div>

        </div>

        {/* Legend */}
        <div className="mt-8 flex justify-center gap-6 text-xs text-[var(--foreground)]">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--border)]" />
            New
          </div>

          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
            Returning
          </div>
        </div>

      </div>
    </div>

    {/* Explanation */}
    <div>
      <h2 className="text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
        When acquisition mix{" "}
        <span className="text-[var(--accent)]">
          changes the story.
        </span>
      </h2>

      <p className="mt-8 text-lg font-medium leading-8">
        Aggregate conversion can mislead.
      </p>

      <p className="mt-4 leading-8 text-[var(--foreground)]">
        Shop Referral shows higher aggregate conversion than
        Google Organic, but its customer mix is very different.
      </p>

      {/* Key comparison */}
      <div className="mt-10 border-l-2 border-[var(--accent)] pl-6">
        <p className="text-lg leading-8">
          Shop Referral:{" "}
          <span className="font-semibold text-[var(--accent)]">
            55.8% returning
          </span>
        </p>

        <p className="text-lg leading-8">
          Google:{" "}
          <span className="font-semibold text-[var(--accent)]">
            18.6% returning
          </span>
        </p>
      </div>

      <p className="mt-8 text-sm leading-7 text-[var(--muted)]">
        Acquisition source should therefore be considered alongside
        customer composition when interpreting conversion performance.
      </p>
    </div>

  </div>
</section>
{/* 03 — Customer Segmentation */}
<section className="mx-auto max-w-7xl px-6 py-32 lg:px-10">
  <div className="grid items-center gap-16 lg:grid-cols-[0.65fr_1.35fr] lg:gap-16">

    {/* Section Content */}
    <div>
      <p className="text-sm font-bold tracking-[0.2em] text-[var(--accent)]">
        03
      </p>

      <p className="mt-3 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
        Customer Segmentation
      </p>

      <h2 className="text-4xl font-medium leading-tight tracking-tight sm:text-6xl">
  Who Is Falling
  <br />
  <span className="text-[var(--accent)]">
    Behind?
  </span>
</h2>

      <p className="mt-8 max-w-xl leading-8 text-[var(--foreground)]">
        The conversion gap becomes clearer when customers are separated into new and returning users. Returning users consistently convert at higher rates across the major channels, highlighting a substantial difference in customer behavior.
      </p>

      <div className="mt-10 border-l-2 border-[var(--accent)] pl-6">
        <p className="text-lg leading-8">
          The first-time customer journey represents the clearest opportunity for investigation and improvement.
        </p>
      </div>

      
    </div>

    {/* Customer Segmentation Visual */}
    <div className="overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)]">
      <img
        src="/projects/ecommerce/customer-segmentation.png"
        alt="Customer segmentation analysis comparing new and returning users"
        className="h-auto w-full"
      />
    </div>

  </div>
</section>
{/* 04 — Root-Cause Analysis */}
<section className="mx-auto max-w-7xl px-6 py-32 lg:px-10">

  {/* Section Header */}
  <div className="max-w-3xl">
    <p className="text-sm font-bold tracking-[0.2em] text-[var(--accent)]">
      04
    </p>

    <p className="mt-3 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
      Root-Cause Analysis
    </p>

    <h2 className="mt-6 text-4xl font-medium leading-tight tracking-tight sm:text-6xl">
      What the evidence
      <br />
      <span className="text-[var(--accent)]">
        suggests.
      </span>
    </h2>

    <p className="mt-8 max-w-2xl leading-8 text-[var(--foreground)]">
      The analysis identifies a meaningful conversion gap between
      new and returning users. This difference persists across
      acquisition sources, while returning users also show deeper
      product exploration.
    </p>
  </div>

  {/* Evidence */}
  <div className="mt-16 grid gap-6 md:grid-cols-3">

    {/* Observation 01 */}
    <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8">
      <p className="text-sm font-bold text-[var(--accent)]">
        01
      </p>

      <h3 className="mt-8 text-xl font-semibold text-[var(--accent)]">
  Funnel Progression
</h3>

      <p className="mt-4 leading-7 text-[var(--foreground)]">
        Returning users outperform new users at every stage
        of the strict chronological funnel.
      </p>
    </div>

    {/* Observation 02 */}
    <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8">
      <p className="text-sm font-bold text-[var(--accent)]">
        02
      </p>

      <h3 className="mt-8 text-xl font-semibold text-[var(--accent)]">
  Acquisition Mix
</h3>

      <p className="mt-4 leading-7 text-[var(--foreground)]">
        Shop Referral&apos;s higher aggregate conversion is
        strongly associated with its higher returning-user share.
      </p>
    </div>

    {/* Observation 03 */}
    <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8">
      <p className="text-sm font-bold text-[var(--accent)]">
        03
      </p>

      <h3 className="mt-8 text-xl font-semibold text-[var(--accent)]">
  Product Exploration
</h3>

      <p className="mt-4 leading-7 text-[var(--foreground)]">
        Returning users viewed roughly 4 more distinct products
        per session across the major sources examined.
      </p>
    </div>

  </div>

  {/* Interpretation */}
  <div className="mt-12 grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr]">

    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
        What this means
      </p>

      <h3 className="mt-5 text-3xl font-medium leading-tight sm:text-4xl">
        The opportunity is concentrated among first-time visitors.
      </h3>
    </div>

    <div className="border-l-2 border-[var(--accent)] pl-6">
      <p className="text-lg leading-8">
        The evidence points toward an opportunity to reduce
        uncertainty during the first-time shopping journey.
        However, the observational data does not establish
        a causal root cause.
      </p>

      <p className="mt-6 text-sm leading-7 text-[var(--muted)]">
        The next step is therefore not to assume the cause,
        but to test whether reducing uncertainty improves
        progression toward purchase.
      </p>
    </div>

  </div>

</section>
{/* 05 — Experiment Design */}
<section className="mx-auto max-w-7xl px-6 py-32 lg:px-10">

  <p className="text-sm font-bold tracking-[0.2em] text-[var(--accent)]">
    05
  </p>

  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
    Experiment Design
  </p>

  <div className="mt-8 grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

    {/* Left */}
    <div>
      <h2 className="text-4xl font-medium leading-tight tracking-tight sm:text-6xl">
        From RCA
        <br />
        <span className="text-[var(--accent)]">
          to Experiment.
        </span>
      </h2>

      <p className="mt-8 leading-8 text-[var(--foreground)]">
        The analysis identifies an opportunity, but observational
        data cannot establish whether uncertainty is the causal
        driver of the conversion gap.
      </p>

      <div className="mt-10 border-l-2 border-[var(--accent)] pl-6">
        <p className="text-lg leading-8">
          <span className="font-semibold text-[var(--accent)]">
            Hypothesis:
          </span>{" "}
          If we reduce uncertainty for first-time visitors during
          the early shopping journey, new-user progression toward
          purchase will improve.
        </p>
      </div>
    </div>

    {/* Experiment Framework */}
    <div className="grid overflow-hidden rounded-3xl border-2 border-[var(--border)] bg-[var(--surface)] sm:grid-cols-2 lg:grid-cols-3">

      {/* Observation */}
      <div className="border-r-2 border-[var(--accent)] bg-[var(--surface)] p-7">
        <p className="text-sm font-bold text-[var(--accent)]">
          01
        </p>

        <h3 className="mt-8 text-lg font-semibold text-[var(--accent)]">
          Observation
        </h3>

        <p className="mt-3 text-sm leading-7">
          New users show lower funnel progression.
        </p>
      </div>

      {/* Hypothesis */}
      <div className="border-r-2 border-[var(--accent)] bg-[var(--surface)] p-7">
        <p className="text-sm font-bold text-[var(--accent)]">
          02
        </p>

        <h3 className="mt-8 text-lg font-semibold text-[var(--accent)]">
          Hypothesis
        </h3>

        <p className="mt-3 text-sm leading-7">
          First-time visitors may face uncertainty early
          in the journey.
        </p>
      </div>

      {/* Intervention */}
      <div className="bg-[var(--surface)] p-7">
        <p className="text-sm font-bold text-[var(--accent)]">
          03
        </p>

        <h3 className="mt-8 text-lg font-semibold text-[var(--accent)]">
          Intervention
        </h3>

        <p className="mt-3 text-sm leading-7">
          Add trust and decision-support content.
        </p>
      </div>

      {/* Experiment */}
      <div className="border-t-2 border-r-2 border-[var(--accent)] bg-[var(--surface)] p-7">
        <p className="text-sm font-bold text-[var(--accent)]">
          04
        </p>

        <h3 className="mt-8 text-lg font-semibold text-[var(--accent)]">
          Experiment
        </h3>

        <p className="mt-3 text-sm leading-7">
          Randomly assign new users to control and treatment.
        </p>
      </div>

      {/* Measure */}
      <div className="border-t-2 border-r-2 border-[var(--accent)] bg-[var(--surface)] p-7">
        <p className="text-sm font-bold text-[var(--accent)]">
          05
        </p>

        <h3 className="mt-8 text-lg font-semibold text-[var(--accent)]">
          Measure
        </h3>

        <p className="mt-3 text-sm leading-7">
          Track purchase conversion and funnel progression.
        </p>
      </div>

      {/* Decide */}
      <div className="border-t-2 border-[var(--accent)] bg-[var(--surface)] p-7">
        <p className="text-sm font-bold text-[var(--accent)]">
          06
        </p>

        <h3 className="mt-8 text-lg font-semibold text-[var(--accent)]">
          Decide
        </h3>

        <p className="mt-3 text-sm leading-7">
          Evaluate statistical and business significance.
        </p>
      </div>

    </div>

  </div>

</section>

{/* 06 — A/B Test & Statistical Evidence */}
<section className="mx-auto max-w-7xl px-6 py-32 lg:px-10">

  <p className="text-sm font-bold tracking-[0.2em] text-[var(--accent)]">
    06
  </p>

  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
    A/B Test & Statistical Evidence
  </p>

  <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--muted)]">
  The conversion rates above come from an illustrative simulated experiment
  and are separate from the observed conversion rates reported earlier in
  this case study.
</p>

  <div className="mt-8 grid gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
    {/* Right — Experiment Results */}
    <div>

      {/* Control → Treatment */}
      <div className="overflow-hidden rounded-3xl border-2 border-[var(--border)] bg-[var(--surface)]">

        <div className="grid sm:grid-cols-2">

          {/* Control */}
          <div className="border-b-2 border-[var(--accent)] p-8 sm:border-b-0 sm:border-r-2">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--muted)]">
              Control
            </p>

            <p className="mt-8 text-5xl font-semibold tracking-tight">
              3.60%
            </p>

            <p className="mt-3 text-sm text-[var(--muted)]">
              10,000 users
            </p>
          </div>

          {/* Treatment */}
          <div className="p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--accent)]">
              Treatment
            </p>

            <p className="mt-8 text-5xl font-semibold tracking-tight text-[var(--accent)]">
              4.30%
            </p>

            <p className="mt-3 text-sm text-[var(--muted)]">
              10,000 users
            </p>
          </div>

        </div>

        {/* Primary Result */}
        <div className="border-t-2 border-[var(--accent)] p-8 text-center">

          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--muted)]">
            Estimated Effect
          </p>

          <p className="mt-5 text-5xl font-semibold tracking-tight text-[var(--accent)] sm:text-6xl">
            +0.70 pp
          </p>

          <p className="mt-3 text-base text-[var(--foreground)]">
            +19.44% relative lift
          </p>

        </div>

        {/* Supporting Evidence */}
        <div className="grid border-t border-[var(--border)] sm:grid-cols-2">

          <div className="border-b border-[var(--border)] p-7 sm:border-b-0 sm:border-r">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
              P-value
            </p>

            <p className="mt-4 text-2xl font-semibold">
              0.011
            </p>

            <p className="mt-2 text-sm text-[var(--muted)]">
              Statistical evidence
            </p>
          </div>

          <div className="p-7">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
              95% Confidence Interval
            </p>

            <p className="mt-4 text-2xl font-semibold">
              +0.16 to +1.24 pp
            </p>

            <p className="mt-2 text-sm text-[var(--muted)]">
              Estimated conversion effect
            </p>
          </div>

        </div>

      </div>

      {/* Disclaimer */}
      <p className="mt-5 text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
        Illustrative simulated experiment · Not an actual test result
      </p>

    </div>

    {/* Left — Explanation */}
    <div>
      <h2 className="text-4xl font-medium leading-tight tracking-tight sm:text-6xl">
        From Experiment
        <br />
        <span className="text-[var(--accent)]">
          to Evidence.
        </span>
      </h2>

      <p className="mt-8 leading-8 text-[var(--foreground)]">
        An illustrative randomized experiment was used to
        evaluate whether the proposed intervention could improve
        purchase conversion among first-time visitors.
      </p>

      <div className="mt-10 border-l-2 border-[var(--accent)] pl-6">
        <p className="text-lg leading-8">
          The treatment group improved conversion by{" "}
          <span className="font-semibold text-[var(--accent)]">
            0.70 percentage points
          </span>{" "}
          over control.
        </p>
      </div>
    </div>

    

  </div>

</section>

{/* 07 — Business Significance & Decision */}
<section className="mx-auto max-w-7xl px-6 py-32 lg:px-10">

  <p className="text-sm font-bold tracking-[0.2em] text-[var(--accent)]">
    07
  </p>

  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
    Business Significance & Decision
  </p>

  <div className="mt-8 grid gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">

    {/* Left — Decision Framework */}
    <div>
      <div className="overflow-hidden rounded-3xl border-2 border-[var(--border)] bg-[var(--surface)]">

        {/* Incremental Revenue */}
        <div className="p-7">
          <div className="flex items-baseline gap-4">
            <p className="text-sm font-bold text-[var(--accent)]">
              01
            </p>

            <h3 className="text-lg font-semibold text-[var(--accent)]">
              Incremental Revenue
            </h3>
          </div>

          <p className="mt-3 pl-9 text-sm leading-7 text-[var(--foreground)]">
            Estimate the additional revenue generated by the
            observed conversion improvement.
          </p>
        </div>

        {/* Contribution Margin */}
        <div className="p-7">
          <div className="flex items-baseline gap-4">
            <p className="text-sm font-bold text-[var(--accent)]">
              02
            </p>

            <h3 className="text-lg font-semibold text-[var(--accent)]">
              Contribution Margin
            </h3>
          </div>

          <p className="mt-3 pl-9 text-sm leading-7 text-[var(--foreground)]">
            Evaluate whether incremental conversions translate
            into profitable contribution.
          </p>
        </div>

        {/* Implementation Cost */}
        <div className="p-7">
          <div className="flex items-baseline gap-4">
            <p className="text-sm font-bold text-[var(--accent)]">
              03
            </p>

            <h3 className="text-lg font-semibold text-[var(--accent)]">
              Implementation Cost
            </h3>
          </div>

          <p className="mt-3 pl-9 text-sm leading-7 text-[var(--foreground)]">
            Compare the expected benefit with the cost of
            implementing the intervention.
          </p>
        </div>

        {/* Downstream Impact */}
        <div className="p-7">
          <div className="flex items-baseline gap-4">
            <p className="text-sm font-bold text-[var(--accent)]">
              04
            </p>

            <h3 className="text-lg font-semibold text-[var(--accent)]">
              Downstream Impact
            </h3>
          </div>

          <p className="mt-3 pl-9 text-sm leading-7 text-[var(--foreground)]">
            Check whether the improvement creates unintended
            effects elsewhere in the funnel or business.
          </p>
        </div>

        {/* Effect Durability */}
        <div className="p-7">
          <div className="flex items-baseline gap-4">
            <p className="text-sm font-bold text-[var(--accent)]">
              05
            </p>

            <h3 className="text-lg font-semibold text-[var(--accent)]">
              Effect Durability
            </h3>
          </div>

          <p className="mt-3 pl-9 text-sm leading-7 text-[var(--foreground)]">
            Determine whether the observed improvement persists
            over time rather than representing a short-lived effect.
          </p>
        </div>

      </div>
    </div>

    {/* Right — Explanation */}
    <div>

      <h2 className="text-4xl font-medium leading-tight tracking-tight sm:text-6xl">
        From Statistical
        <br />
        <span className="text-[var(--accent)]">
          Evidence to Decision.
        </span>
      </h2>

      <p className="mt-8 leading-8 text-[var(--foreground)]">
        A statistically significant result does not automatically
        mean an intervention should be rolled out. The business
        impact must also justify the cost and potential downstream
        effects.
      </p>

      <div className="mt-10 border-l-2 border-[var(--accent)] pl-6">
        <p className="text-lg leading-8">
          <span className="font-semibold text-[var(--accent)]">
            Decision principle:
          </span>{" "}
          statistical significance is necessary, but not sufficient
          for rollout.
        </p>
      </div>

      <p className="mt-6 text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
        Illustrative experiment · Actual business impact was not measured
      </p>

    </div>

  </div>

</section>
{/* 08 — Impact Monitoring */}
<section className="mx-auto max-w-7xl px-6 py-32 lg:px-10">

  <p className="text-sm font-bold tracking-[0.2em] text-[var(--accent)]">
    08
  </p>

  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
    Impact Monitoring
  </p>

  <div className="mt-8 grid gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">

    {/* Monitoring Framework — LEFT */}
    <div className="overflow-hidden rounded-3xl border-2 border-[var(--border)] bg-[var(--surface)]">

      {/* Primary KPI */}
      <div className="p-8 sm:p-10">

        <div className="flex items-baseline gap-4">
          <p className="text-sm font-bold text-[var(--accent)]">
            01
          </p>

          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
            Primary KPI
          </p>
        </div>

        <h3 className="mt-8 text-4xl font-semibold tracking-tight sm:text-5xl">
          Purchase Conversion
        </h3>

        <p className="mt-4 max-w-xl leading-7">
          Monitor whether the intervention produces a sustained
          improvement in new-user conversion.
        </p>

      </div>

      {/* Guardrails */}
      <div className="p-8 pt-2 sm:p-10 sm:pt-4">

        <div className="flex items-baseline gap-4">
          <p className="text-sm font-bold text-[var(--accent)]">
            02
          </p>

          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
            Guardrails
          </p>
        </div>

        <div className="mt-8 grid gap-x-10 gap-y-8 sm:grid-cols-2">

          <div>
            <h4 className="font-semibold text-[var(--accent)]">
              Add-to-cart rate
            </h4>

            <p className="mt-2 text-sm leading-6">
              Ensure earlier funnel progression remains healthy.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-[var(--accent)]">
              Checkout progression
            </h4>

            <p className="mt-2 text-sm leading-6">
              Monitor movement toward checkout.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-[var(--accent)]">
              Checkout-to-purchase
            </h4>

            <p className="mt-2 text-sm leading-6">
              Confirm that downstream conversion does not weaken.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-[var(--accent)]">
              Revenue / Contribution Margin
            </h4>

            <p className="mt-2 text-sm leading-6">
              Validate that conversion improvement translates
              into commercial value.
            </p>
          </div>

          <div className="sm:col-span-2">
            <h4 className="font-semibold text-[var(--accent)]">
              Segment Stability
            </h4>

            <p className="mt-2 text-sm leading-6">
              Check whether the observed improvement remains
              consistent across relevant customer segments.
            </p>
          </div>

        </div>

      </div>

    </div>

    {/* Explanation — RIGHT */}
    <div>

      <h2 className="text-4xl font-medium leading-tight tracking-tight sm:text-6xl">
        From Experiment
        <br />
        <span className="text-[var(--accent)]">
          to Measured Impact.
        </span>
      </h2>

      <p className="mt-8 leading-8 text-[var(--foreground)]">
        A successful experiment is not the end of the analysis.
        A real rollout should be monitored over time to confirm
        that the improvement persists without creating downstream
        funnel or commercial problems.
      </p>

      <div className="mt-10 border-l-2 border-[var(--accent)] pl-6">
        <p className="text-lg leading-8">
          The goal is not simply to improve a conversion metric,
          but to confirm that the improvement creates durable
          business value.
        </p>
      </div>

    </div>

  </div>

</section>

{/* Explore the Analysis */}
<section className="mx-auto max-w-7xl px-6 pb-10 pt-20 lg:px-10 lg:pb-10 lg:pt-20">
  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
    Explore the Analysis
  </p>

  <div className="mt-8 flex flex-wrap gap-3">
    <a
      href="https://colab.research.google.com/drive/1paTNQgJFhu_3laSrMA4_yTh-v-KfFU2k?usp=sharing"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-medium text-white transition hover:opacity-85"
    >
      View Notebook →
    </a>

    <a
      href="https://canva.link/nlzliqh6hz5u1gg"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex rounded-full border border-[var(--border)] px-6 py-3 text-sm font-medium text-[var(--foreground)] transition hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-white"
    >
      View Analysis PPT →
    </a>
  </div>
</section>


      {/* Project Navigation */}
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-10 lg:px-10 lg:pb-20 lg:pt-10">
        <div className="flex flex-col justify-between gap-4 border-t border-[var(--border)] pt-8 sm:flex-row sm:items-center">
          <a
            href="/projects/finance"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-5 py-2.5 text-sm text-[var(--foreground)] transition-all duration-200 hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-white"
          >
            ← Previous project
          </a>

          <a
            href="/projects/olist"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--accent)] px-5 py-2.5 text-sm text-[var(--foreground)] transition-all duration-200 hover:bg-[var(--accent)] hover:text-white"
          >
            Next project →
          </a>
        </div>
      </section>


<Footer />

    </main>
  );
}