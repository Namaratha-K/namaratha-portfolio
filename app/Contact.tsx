"use client";

import { useEffect, useState } from "react";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";

export default function Contact() {
  const [centerWord, setCenterWord] = useState("YOU");

  useEffect(() => {
    const words = ["YOU", "US", "TOGETHER"];
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % words.length;
      setCenterWord(words[index]);
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="contact"
      className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32"
    >
      <div className="grid gap-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">

        {/* LEFT — CONTACT CONTENT */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--accent)]">
            Let&apos;s Connect
          </p>

          <h2 className="mt-6 max-w-3xl text-5xl leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
            Have a project,
            <br />
            opportunity, or idea
            <br />
            <span className="text-[var(--accent)]">in mind?</span>
          </h2>

          <p className="mt-8 text-lg text-[var(--muted)]">
            Let&apos;s talk.
          </p>

          {/* CONTACT DETAILS */}
          <div className="mt-8 space-y-8">

            {/* EMAIL */}
            <a
              href="mailto:karanthanamaratha@gmail.com"
              className="
                group
                flex
                w-full
                max-w-2xl
                items-center
                justify-between
                rounded-full
                border
                border-[var(--accent)]/40
                bg-[var(--accent)]/[0.06]
                px-6
                py-5
                transition-all
                duration-300
                hover:border-[var(--accent)]
                hover:bg-[var(--accent)]/[0.10]
                sm:px-8
              "
            >
              <div>
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
                  Email
                </p>

                <p className="mt-2 text-base sm:text-lg">
                  karanthanamaratha@gmail.com
                </p>
              </div>

              <ArrowUpRight
                size={20}
                strokeWidth={1.7}
                className="
                  shrink-0
                  text-[var(--accent)]
                  transition-transform
                  duration-300
                  group-hover:-translate-y-1
                  group-hover:translate-x-1
                "
              />
            </a>

            {/* SECONDARY DETAILS */}
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-12">

              {/* LINKEDIN */}
              <a
                href="https://www.linkedin.com/in/namaratha-karanth-565ab8219/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  flex
                  items-center
                  gap-3
                  text-sm
                  transition-colors
                  hover:text-[var(--accent)]
                "
              >

                <span>LinkedIn</span>

                <ArrowUpRight
                  size={14}
                  strokeWidth={1.7}
                  className="
                    text-[var(--accent)]
                    transition-transform
                    duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                />
              </a>

              {/* LOCATION */}
              <div className="flex items-center gap-3 text-sm text-[var(--muted)]">
                <MapPin
                  size={17}
                  strokeWidth={1.7}
                  className="text-[var(--accent)]"
                />

                <span>Bengaluru, India</span>
              </div>

            </div>
          </div>
        </div>


        {/* RIGHT — CONNECTION VISUAL */}
        <div className="relative mx-auto aspect-square w-full max-w-[520px]">

          {/* Soft ambient glow */}
          <div
            className="
              absolute
              left-1/2
              top-1/2
              h-56
              w-56
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[var(--accent)]/[0.06]
              blur-3xl
            "
          />

          <svg
            viewBox="0 0 520 520"
            className="absolute inset-0 h-full w-full"
            aria-hidden="true"
          >

            {/* CONNECTION LINES */}

            <g
              className="
                stroke-[var(--accent)]
                opacity-30
              "
              fill="none"
              strokeWidth="1"
            >
              <line x1="260" y1="260" x2="260" y2="75" />
              <line x1="260" y1="260" x2="425" y2="175" />
              <line x1="260" y1="260" x2="425" y2="350" />
              <line x1="260" y1="260" x2="260" y2="445" />
              <line x1="260" y1="260" x2="95" y2="350" />
            </g>

            {/* Animated travelling dots */}

            <g fill="var(--accent)">
              <circle r="3">
                <animateMotion
                  dur="4s"
                  repeatCount="indefinite"
                  path="M260 260 L260 75"
                />
              </circle>

              <circle r="3">
                <animateMotion
                  dur="5s"
                  begin="1s"
                  repeatCount="indefinite"
                  path="M260 260 L425 175"
                />
              </circle>

              <circle r="3">
                <animateMotion
                  dur="4.5s"
                  begin="2s"
                  repeatCount="indefinite"
                  path="M260 260 L425 350"
                />
              </circle>

              <circle r="3">
                <animateMotion
                  dur="5s"
                  begin="1.5s"
                  repeatCount="indefinite"
                  path="M260 260 L260 445"
                />
              </circle>

              <circle r="3">
                <animateMotion
                  dur="4.5s"
                  begin="0.5s"
                  repeatCount="indefinite"
                  path="M260 260 L95 350"
                />
              </circle>
            </g>

            {/* Outer orbit */}
            <circle
  cx="260"
  cy="260"
  r="190"
  fill="none"
  stroke="var(--foreground)"
  strokeWidth="1"
  strokeDasharray="3 12"
  opacity="0.80"
  className="animate-[spin_35s_linear_infinite]"
  style={{ transformOrigin: "260px 260px" }}
/>

          </svg>


          {/* CENTER NODE */}
          <div
            className="
              absolute
              left-1/2
              top-1/2
              flex
              h-28
              w-28
              -translate-x-1/2
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-[var(--accent)]
              bg-[var(--background)]
              shadow-[0_0_50px_rgba(220,38,38,0.12)]
            "
          >
            <div className="relative z-10 flex h-full w-full flex-col items-center justify-center">
              <span
                key={centerWord}
                className={`animate-[fadeIn_500ms_ease-out] text-xs font-semibold uppercase tracking-[0.2em] ${
                  centerWord === "YOU"
                    ? "text-[var(--foreground)]"
                    : "text-[var(--accent)]"
                }`}
              >
                {centerWord}
              </span>

              <span className="mt-2 text-[0.65rem] uppercase tracking-[0.15em] text-[var(--muted)]">
                CONNECT
              </span>
            </div>
          </div>

          {/* PROJECT */}
          <ConnectionNode
            label="PROJECT"
            className="left-1/2 top-[6%] -translate-x-1/2"

          />

          {/* OPPORTUNITY */}
          <ConnectionNode
            label="OPPORTUNITY"
            className="right-[2%] top-[27%]"
          />

          {/* SOLUTIONING */}
          <ConnectionNode
            label="SOLUTIONING"
            className="bottom-[8%] left-1/2 -translate-x-1/2"
          />

          {/* IDEA */}
          <ConnectionNode
            label="IDEA"
            className="bottom-[27%] left-[2%]"
          />

          {/* CONNECTING */}
          <ConnectionNode
            label="CONNECTING"
            className="bottom-[32%] right-4"
          />

        </div>
      </div>
    </section>
  );
}


/* -------------------------------- */
/* CONNECTION NODE                  */
/* -------------------------------- */

function ConnectionNode({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`
        absolute
        ${className}
        group
        flex
        items-center
        gap-2
        rounded-full
        border
        border-[var(--border)]
        bg-[var(--background)]
        px-4
        py-2.5
        transition-all
        duration-300
        hover:border-[var(--accent)]
        hover:bg-[var(--accent)]/[0.06]
      `}
    >
      <span
        className="
          h-2
          w-2
          rounded-full
          bg-[var(--accent)]
          transition-all
          duration-300
          group-hover:scale-150
          group-hover:shadow-[0_0_12px_var(--accent)]
        "
      />

      <span className="text-[0.6rem] font-semibold tracking-[0.16em] text-[var(--muted)] group-hover:text-[var(--foreground)]">
        {label}
      </span>
    </div>
  );
}