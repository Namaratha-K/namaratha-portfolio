export default function Footer() {
  return (
    <footer className="mx-auto max-w-7xl px-6 pb-8 pt-16 lg:px-10">
      <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-lg font-semibold tracking-tight">
            NAMARATHA
          </p>

          <p className="mt-2 text-sm text-[var(--muted)]">
            Data Analytics · Business Intelligence · Automation
          </p>
        </div>

        <a
          href="#top"
          className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
        >
          Back to top ↑
        </a>
      </div>

      <div className="mt-10 flex flex-col gap-2 text-xs text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Namaratha Karanth</p>

        <p>Built with Next.js · TypeScript</p>
      </div>
    </footer>
  );
}