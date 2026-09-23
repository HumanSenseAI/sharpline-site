import Link from "next/link";
import { CATEGORIES } from "@/lib/categories";
import { Logo } from "@/components/logo";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://sharpline-wheat.vercel.app";

const STEPS = [
  {
    n: "01",
    title: "Tell us your role",
    body: "Your role and industry - that's it. We use it to write scenarios you'll actually face.",
  },
  {
    n: "02",
    title: "Get your program",
    body: "A personalized 64-scenario practice program: 8 categories, 8 scenarios each, built for you.",
  },
  {
    n: "03",
    title: "One drill a day",
    body: "A new scenario every day, on a repeating 64-day cycle. Write your response, get instant checks.",
  },
  {
    n: "04",
    title: "Sharpen with feedback",
    body: "On-demand AI coaching and an example response, whenever you want a second opinion.",
  },
];

const FEATURES = [
  {
    title: "Instant mechanical checks",
    body: "Word-count limits and hedge-word detection, scored the moment you submit - no waiting on a model to tell you the basics.",
  },
  {
    title: "On-demand AI coaching",
    body: "A direct, specific coaching note on your response, whenever you ask for one.",
  },
  {
    title: "See an optimal response",
    body: "A strong example answer to the same prompt, for when you want to see what \"good\" looks like.",
  },
  {
    title: "Streaks",
    body: "Current, longest, and total - practice that's easy to see, easy to keep up.",
  },
  {
    title: "Export your practice log",
    body: "Download your full history - prompts, responses, feedback - as a PDF, any time.",
  },
  {
    title: "Up to 3 programs at once",
    body: "Practicing for more than one role or context? Run up to three programs on one account.",
  },
];

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-10 border-b border-brand-border bg-brand-bg/90 backdrop-blur">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-4">
          <Logo />
          <nav className="hidden items-center gap-6 text-sm text-brand-textMuted sm:flex">
            <a href="#how-it-works" className="hover:text-brand-text">
              How it works
            </a>
            <a href="#categories" className="hover:text-brand-text">
              Categories
            </a>
            <a href="#pricing" className="hover:text-brand-text">
              Pricing
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <Link
              href={`${APP_URL}/login`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-brand-textMuted underline underline-offset-4 hover:text-brand-text"
            >
              Log in
            </Link>
            <Link
              href={`${APP_URL}/signup`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-[3px] bg-brand-orange px-4 py-2 text-sm font-medium text-brand-orangeInk hover:opacity-90"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-4 py-24 text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-brand-textMuted">
            Daily Articulation Practice
          </p>
          <Logo className="scale-125 sm:scale-150" />
          <p className="font-serif text-xl text-brand-textMuted italic">Stay sharp. Win more.</p>
          <p className="max-w-[54ch] text-brand-textMuted">
            Tell us your role and industry, and Sharpline builds you a
            personalized practice program - one short communication drill a
            day, built around scenarios you&apos;ll actually face. Instant
            word-count and precision checks, on-demand AI coaching, and a
            streak that keeps you coming back.
          </p>
          <div className="flex gap-3 pt-2">
            <Link
              href={`${APP_URL}/signup`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-[3px] bg-brand-orange px-5 py-2.5 text-sm font-medium text-brand-orangeInk hover:opacity-90"
            >
              Get Started
            </Link>
            <a
              href="#how-it-works"
              className="rounded-[3px] border border-brand-border px-5 py-2.5 text-sm font-medium text-brand-text hover:bg-brand-surfaceAlt"
            >
              How it works
            </a>
          </div>
        </section>

        {/* How it works */}
        <section id="how-it-works" className="border-t border-brand-border bg-brand-surface">
          <div className="mx-auto max-w-4xl px-4 py-20">
            <h2 className="text-center font-serif text-3xl font-medium text-brand-text">
              How it works
            </h2>
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
              {STEPS.map((step) => (
                <div key={step.n} className="flex gap-4">
                  <span className="font-mono text-2xl text-brand-orange">{step.n}</span>
                  <div>
                    <h3 className="font-medium text-brand-text">{step.title}</h3>
                    <p className="mt-1 text-sm text-brand-textMuted">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories */}
        <section id="categories" className="border-t border-brand-border">
          <div className="mx-auto max-w-4xl px-4 py-20">
            <div className="text-center">
              <h2 className="font-serif text-3xl font-medium text-brand-text">
                8 categories. 64 scenarios.
              </h2>
              <p className="mx-auto mt-2 max-w-[54ch] text-sm text-brand-textMuted">
                Every program covers the same 8 skills, each with 8 scenarios
                written for your role and industry.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
              {CATEGORIES.map((category) => (
                <div
                  key={category.key}
                  className="rounded-[4px] border border-brand-border bg-brand-surface p-5"
                >
                  <p className="font-serif text-lg font-medium text-brand-text">{category.name}</p>
                  <p className="mt-1 text-sm text-brand-textMuted">{category.tagline}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="border-t border-brand-border bg-brand-surface">
          <div className="mx-auto max-w-4xl px-4 py-20">
            <h2 className="text-center font-serif text-3xl font-medium text-brand-text">
              What&apos;s inside
            </h2>
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
              {FEATURES.map((feature) => (
                <div key={feature.title}>
                  <h3 className="font-medium text-brand-text">{feature.title}</h3>
                  <p className="mt-1 text-sm text-brand-textMuted">{feature.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="border-t border-brand-border">
          <div className="mx-auto flex max-w-md flex-col items-center gap-4 px-4 py-20 text-center">
            <p className="text-xs font-medium uppercase tracking-widest text-brand-textMuted">
              Pricing
            </p>
            <p className="font-mono text-5xl font-semibold text-brand-text">$29</p>
            <p className="text-brand-textMuted">
              One payment, 64 days of full access. No subscription.
            </p>
            <Link
              href={`${APP_URL}/signup`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-[3px] bg-brand-orange px-5 py-2.5 text-sm font-medium text-brand-orangeInk hover:opacity-90"
            >
              Get Started
            </Link>
          </div>
        </section>

        {/* Final CTA */}
        <section className="border-t border-brand-border bg-brand-surface">
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 px-4 py-20 text-center">
            <h2 className="font-serif text-3xl font-medium text-brand-text">
              Practice today&apos;s scenario.
            </h2>
            <Link
              href={`${APP_URL}/signup`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-[3px] bg-brand-orange px-5 py-2.5 text-sm font-medium text-brand-orangeInk hover:opacity-90"
            >
              Get Started
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-brand-border">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-1 px-4 py-10 text-center text-xs text-brand-textMuted">
          <Logo className="text-base" />
          <p className="mt-1">Stay sharp. Win more.</p>
        </div>
      </footer>
    </>
  );
}
