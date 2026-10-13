import ThemeToggle from "../../ThemeToggle";
import Navbar from "../../Navbar";
import Footer from "../../Footer";

export default function FinanceProject() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Navbar />

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pb-24 pt-20 lg:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
          01 · Power BI
        </p>

        <h1 className="mt-6 max-w-5xl text-5xl font-medium tracking-[-0.05em] sm:text-7xl lg:text-8xl">
          Financial Analytics Dashboard
        </h1>

        <div className="mt-8 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <p className="max-w-2xl text-lg leading-8 text-[var(--foreground)]">
            An interactive personal finance dashboard designed to understand
            income, spending, cash flow and transaction-level patterns.
          </p>

         <div className="flex max-w-sm flex-wrap gap-2">
  {["Power BI", "DAX", "Power Query", "Data Modeling"].map(
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

      {/* Hero Dashboard */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="overflow-hidden rounded-[2rem] border border-[var(--border)] bg-white/[0.03]">
          <img
            src="/projects/finance/overview.png"
            alt="Financial Analytics Dashboard overview"
            className="w-full"
          />
        </div>
      </section>

      {/* Project Introduction */}
      <section className="mx-auto max-w-7xl px-6 py-32 lg:px-10">
        <div className="grid gap-16 md:grid-cols-[1fr_2fr]">
          <div>
           <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
  The Project
</p>
          </div>

          <div>
            <h2 className="max-w-3xl text-3xl leading-tight tracking-tight sm:text-5xl">
              Turning transaction data into a clearer financial picture.
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-8 text-[var(--foreground)]">
              This dashboard transforms personal transaction data into an
              interactive view of income, spending, cash flow and financial
              patterns. It was designed to make everyday financial behaviour
              easier to explore and identify areas where spending could be
              optimised.
            </p>
          </div>
        </div>
      </section>

    {/* Dashboard Exploration */}
<section className="border-y border-[var(--border)]">
  <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
      Dashboard Exploration
    </p>

    <h2 className="mt-5 max-w-3xl text-4xl tracking-tight sm:text-6xl">
      Explore the different analytical views.
    </h2>

    {/* Spending Analysis */}
    <div className="mt-20">
      <div className="mb-8 max-w-xl">
        <p className="text-sm font-bold tracking-[0.2em] text-[var(--accent)]">
          01
        </p>

        <h3 className="mt-3 text-3xl tracking-tight sm:text-4xl">
          Spending Analysis
        </h3>

        <p className="mt-4 leading-7 text-[var(--foreground)]">
          Analyse spending by category, expense type and context while
          identifying trends and the transactions contributing to them.
        </p>
      </div>

      <div className="overflow-hidden rounded-3xl border border-[var(--border)]">
        <img
          src="/projects/finance/spending-analysis.png"
          alt="Spending Analysis dashboard"
          className="w-full"
        />
      </div>
    </div>

    {/* Transactions */}
    <div className="mt-28">
      <div className="mb-8 ml-auto max-w-xl text-left lg:text-right">
        <p className="text-sm font-bold tracking-[0.2em] text-[var(--accent)]">
          02
        </p>

        <h3 className="mt-3 text-3xl tracking-tight sm:text-4xl">
          Transaction Explorer
        </h3>

        <p className="mt-4 leading-7 text-[var(--foreground)]">
          Explore individual transactions through filters for category,
          payment mode, expense type and context.
        </p>
      </div>

      <div className="overflow-hidden rounded-3xl border border-[var(--border)]">
        <img
          src="/projects/finance/transactions.png"
          alt="Transactions dashboard"
          className="w-full"
        />
      </div>
    </div>

    {/* Methodology */}
    <div className="mt-28">
      <div className="mb-8 max-w-xl">
        <p className="text-sm font-bold tracking-[0.2em] text-[var(--accent)]">
          03
        </p>

        <h3 className="mt-3 text-3xl tracking-tight sm:text-4xl">
          Methodology
        </h3>

        <p className="mt-4 leading-7 text-[var(--foreground)]">
          The dashboard connects transaction data with Power Query,
          structured data modelling and DAX calculations to produce
          interactive analytical views.
        </p>
      </div>

      <div className="overflow-hidden rounded-3xl border border-[var(--border)]">
        <img
          src="/projects/finance/about.png"
          alt="Financial dashboard methodology"
          className="w-full"
        />
      </div>
    </div>
  </div>
</section>



      {/* How It Was Built */}
      <section className="mx-auto max-w-7xl px-6 py-32 lg:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
          How It Was Built
        </p>

        <h2 className="mt-5 max-w-3xl text-4xl tracking-tight sm:text-6xl">
          From raw transactions to an interactive dashboard.
        </h2>

       <div className="mt-16 grid overflow-hidden rounded-3xl border border-[var(--border)] md:grid-cols-5">
  {[
    ["01", "Data", "Google Sheets"],
    ["02", "Transform", "Power Query"],
    ["03", "Model", "Data Model"],
    ["04", "Calculate", "DAX"],
    ["05", "Visualise", "Power BI"],
  ].map(([number, title, description]) => (
    <div
  key={number}
  className="border-b border-[var(--border)] bg-[var(--surface)] p-7 md:border-b-0 md:border-r last:md:border-r-0"
>
      <p className="text-sm font-bold text-[var(--foreground)]">{number}</p>

      <h3 className="mt-12 text-lg font-medium text-[var(--accent)]">
        {title}
      </h3>

      <p className="mt-2 text-sm text-[var(--foreground)]">
        {description}
      </p>
    </div>
  ))}
</div>
      </section>

      {/* Behind the Data */}
      <section className="border-y border-[var(--border)]">
        <div className="mx-auto max-w-7xl px-6 py-32 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
                Behind the Data
              </p>

              <h2 className="mt-5 text-4xl tracking-tight sm:text-5xl">
                The data behind the dashboard.
              </h2>
            </div>

            <div>
              <p className="max-w-2xl leading-8 text-[var(--foreground)]">
                The analysis begins with structured transaction data containing
                dates, descriptions, income, spending, categories, payment
                modes, expense types and context.
              </p>

              <div className="mt-10 overflow-hidden rounded-3xl border border-[var(--border)]">
                <img
                  src="/projects/finance/raw-data.png"
                  alt="Personal finance transaction dataset"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="mx-auto max-w-7xl px-6 py-32 lg:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
          Key Features
        </p>

        <div className="mt-12 grid gap-x-16 gap-y-12 md:grid-cols-2">
          {[
            ["Cash Flow", "Track income, spending and net cash flow over time."],
            [
              "Spending Analysis",
              "Break spending down by category, expense type and context.",
            ],
            [
              "Transaction Drill-down",
              "Explore individual transactions through interactive filters.",
            ],
            [
              "Dynamic Insights",
              "Surface key observations directly inside the dashboard.",
            ],
            [
              "Bank Balance",
              "Track closing balance and changes in bank cash position.",
            ],
            [
              "Period Analysis",
              "Compare selected periods and understand changes over time.",
            ],
          ].map(([title, description], index) => (
  <div key={title} className="border-t border-[var(--border)] pt-6">
   <div className="flex items-baseline gap-4">
  <span className="text-sm font-bold text-[var(--accent)]">
    {String(index + 1).padStart(2, "0")}
  </span>

  <h3 className="text-lg font-semibold text-[var(--accent)]">
    {title}
  </h3>
</div>

    <p className="mt-3 max-w-md leading-7 text-[var(--foreground)]">
      {description}
    </p>
  </div>
))}
        </div>
      </section>

      {/* Footer */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
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