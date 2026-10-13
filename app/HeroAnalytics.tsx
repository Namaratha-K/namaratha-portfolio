"use client";

import { useEffect, useState } from "react";

const frames = ["automation", "finance", "ecommerce"] as const;

type Frame = (typeof frames)[number];

export default function HeroAnalytics() {
  const [frame, setFrame] = useState<Frame>("automation");

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((current) => {
        const index = frames.indexOf(current);
        return frames[(index + 1) % frames.length];
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pointer-events-none absolute right-4 top-1/2 hidden h-[360px] w-[430px] -translate-y-1/2 lg:block">
      <div className="relative h-full w-full">
        {/* subtle analytical grid */}
        <div
          className="absolute inset-8 opacity-[0.08]"
          style={{
            backgroundImage: `
              linear-gradient(to right, var(--foreground) 1px, transparent 1px),
              linear-gradient(to bottom, var(--foreground) 1px, transparent 1px)
            `,
            backgroundSize: "52px 52px",
          }}
        />

        {/* Frame */}
        <div className="absolute inset-0">
          {frame === "automation" && <AutomationVisual />}
          {frame === "finance" && <FinanceVisual />}
          {frame === "ecommerce" && <EcommerceVisual />}
        </div>

        {/* Frame indicator */}
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
          {frames.map((item) => (
            <span
              key={item}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                frame === item
                  ? "w-5 bg-[var(--accent)]"
                  : "w-1.5 bg-[var(--foreground)]/25"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   01 · AUTOMATION
───────────────────────────────────────────── */

function AutomationVisual() {
  return (
    <div
      key="automation"
      className="animate-[fadeIn_700ms_ease-out]"
    >
      <VisualLabel text="AUTOMATION IMPACT" />

      <svg
        viewBox="0 0 430 280"
        className="mt-8 h-auto w-full"
      >
        {/* guide */}
        <line
          x1="45"
          y1="65"
          x2="390"
          y2="65"
          stroke="var(--foreground)"
          strokeOpacity="0.12"
        />

        <line
          x1="45"
          y1="210"
          x2="390"
          y2="210"
          stroke="var(--foreground)"
          strokeOpacity="0.12"
        />

        {/* line */}
        <path
          d="M55 65 C145 70 215 105 375 210"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="2"
          strokeDasharray="520"
          strokeDashoffset="520"
          className="animate-[drawLine_1.4s_ease-out_forwards]"
        />

        {/* points */}
        <circle
          cx="55"
          cy="65"
          r="5"
          fill="var(--accent)"
          className="animate-[scaleIn_500ms_ease-out_300ms_both]"
        />

        <circle
          cx="375"
          cy="210"
          r="5"
          fill="var(--accent)"
          className="animate-[scaleIn_500ms_ease-out_1200ms_both]"
        />

        {/* labels */}
        <text
          x="55"
          y="40"
          fill="var(--foreground)"
          fontSize="14"
          fontWeight="600"
        >
          45 min
        </text>

        <text
          x="375"
          y="242"
          textAnchor="end"
          fill="var(--foreground)"
          fontSize="14"
          fontWeight="600"
        >
          ~30 sec
        </text>

        <text
          x="55"
          y="255"
          fill="var(--muted)"
          fontSize="9"
          letterSpacing="2"
        >
          BEFORE
        </text>

        <text
          x="375"
          y="268"
          textAnchor="end"
          fill="var(--muted)"
          fontSize="9"
          letterSpacing="2"
        >
          AFTER
        </text>

        {/* insight */}
        <text
  x="390"
  y="55"
  textAnchor="end"
  fill="var(--accent)"
  fontSize="10"
  letterSpacing="2"
  fontWeight="600"
>
  ~90% FASTER
</text>
      </svg>
    </div>
  );
}

/* ─────────────────────────────────────────────
   02 · FINANCE
───────────────────────────────────────────── */

function FinanceVisual() {
  return (
    <div
      key="finance"
      className="animate-[fadeIn_700ms_ease-out]"
    >
      <VisualLabel text="FINANCIAL OVERVIEW" />

      <svg
        viewBox="0 0 430 280"
        className="mt-8 h-auto w-full"
      >
        {/* baseline */}
        <line
          x1="45"
          y1="215"
          x2="390"
          y2="215"
          stroke="var(--foreground)"
          strokeOpacity="0.14"
        />

        {/* subtle guides */}
        <line
          x1="45"
          y1="75"
          x2="390"
          y2="75"
          stroke="var(--foreground)"
          strokeOpacity="0.06"
        />

        <line
          x1="45"
          y1="145"
          x2="390"
          y2="145"
          stroke="var(--foreground)"
          strokeOpacity="0.06"
        />

        {/* spending trend: ₹2K → ₹5K */}
        <path
          d="M80 170 C145 165 230 130 350 80"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="2"
          strokeDasharray="430"
          strokeDashoffset="430"
          className="animate-[drawLine_1.4s_ease-out_forwards]"
        />

        {/* August */}
        <circle
          cx="80"
          cy="170"
          r="5"
          fill="var(--accent)"
          className="animate-[scaleIn_500ms_ease-out_300ms_both]"
        />

        {/* September */}
        <circle
          cx="350"
          cy="80"
          r="5"
          fill="var(--accent)"
          className="animate-[scaleIn_500ms_ease-out_1200ms_both]"
        />

        {/* values */}
        <text
          x="80"
          y="150"
          textAnchor="middle"
          fill="var(--foreground)"
          fontSize="13"
          fontWeight="600"
        >
          ₹2K
        </text>

        <text
          x="350"
          y="60"
          textAnchor="middle"
          fill="var(--foreground)"
          fontSize="13"
          fontWeight="600"
        >
          ₹5K
        </text>

        {/* period labels */}
        <text
          x="80"
          y="245"
          textAnchor="middle"
          fill="var(--muted)"
          fontSize="10"
          letterSpacing="1.5"
        >
          AUG '26
        </text>

        <text
          x="350"
          y="245"
          textAnchor="middle"
          fill="var(--muted)"
          fontSize="10"
          letterSpacing="1.5"
        >
          SEP '26
        </text>

        <text
          x="215"
          y="55"
          textAnchor="middle"
          fill="var(--accent)"
          fontSize="10"
          letterSpacing="2"
          fontWeight="600"
        >
          MONTHLY SPENDING
        </text>
      </svg>
    </div>
  );
}

/* ─────────────────────────────────────────────
   03 · E-COMMERCE
───────────────────────────────────────────── */

function EcommerceVisual() {
  const bars = [
    { label: "SESSIONS", value: 100, amount: "360K" },
    { label: "PRODUCT VIEW", value: 21.39, amount: "77K" },
    { label: "ADD TO CART", value: 4.22, amount: "15K" },
    { label: "CHECKOUT", value: 3.08, amount: "11K" },
    { label: "PURCHASE", value: 1.35, amount: "4.8K" },
  ];

  return (
    <div
      key="ecommerce"
      className="animate-[fadeIn_700ms_ease-out]"
    >
      <VisualLabel text="E-COMMERCE FUNNEL" />

      <div className="mt-8 space-y-4">
        {bars.map((bar, index) => (
          <div
            key={bar.label}
            className="animate-[slideIn_500ms_ease-out_both]"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="mb-1 flex items-center justify-between text-[9px] tracking-[0.16em]">
              <span className="text-[var(--muted)]">{bar.label}</span>
              <span className="text-[var(--foreground)]/70">
                {bar.amount}
              </span>
            </div>

            <div className="h-1 w-full bg-[var(--foreground)]/[0.08]">
              <div
                className="h-full origin-left bg-[var(--accent)] animate-[growBar_900ms_ease-out_both]"
                style={{
                  width: `${Math.max(bar.value, 4)}%`,
                  animationDelay: `${index * 100}ms`,
                }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-7 flex items-baseline justify-between">
        <span className="text-[9px] uppercase tracking-[0.18em] text-[var(--muted)]">
          Session → Purchase
        </span>

        <span className="text-xl font-semibold text-[var(--accent)]">
          1.35%
        </span>
      </div>
    </div>
  );
}

function VisualLabel({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--accent)]">
      <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
      {text}
    </div>
  );
}