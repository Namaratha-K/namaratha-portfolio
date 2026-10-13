import { MapPin } from "lucide-react";

export default function Education() {
  return (
    <section
      id="education"
      className="mx-auto max-w-7xl px-6 py-16 lg:px-10"
    >
      {/* Section heading */}
      <div className="mb-10">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--accent)]">
          Education
        </p>
      </div>

      {/* Education entry */}
      <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-start">
        
        {/* Education details */}
        <div>
          <h3 className="text-2xl tracking-tight sm:text-3xl">
            Bachelor of Engineering (B.E.)
          </h3>

          <p className="mt-2 text-sm text-[var(--muted)]">
            Information Science
          </p>

          <div className="mt-2 flex items-center gap-2 text-sm text-[var(--foreground)]">
            <MapPin
              size={14}
              strokeWidth={1.8}
              className="text-[var(--accent)]"
            />
            <span>Sai Vidya Institute of Technology</span>
          </div>

          <p className="mt-1 pl-6 text-sm text-[var(--muted)]">
  Bangalore, India
</p>
        </div>

        {/* Period */}
        <p className="text-xs text-[var(--muted)] lg:pt-1">
          2016 — 2020
        </p>

      </div>
    </section>
  );
}