import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-ctp-base flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        {/* Big 404 */}
        <p className="text-8xl font-bold text-ctp-surface1 select-none">404</p>

        {/* Divider */}
        <div className="mt-4 h-px bg-ctp-surface0 w-24 mx-auto" />

        {/* Message */}
        <h1 className="mt-6 text-xl font-semibold text-ctp-text">
          Page not found
        </h1>
        <p className="mt-3 text-sm text-ctp-subtext0 leading-relaxed">
          This page doesn&apos;t exist or was moved. Head back to the portfolio.
        </p>

        {/* Back home */}
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-lg border border-ctp-mauve/30 bg-ctp-mauve/10 px-5 py-2.5 text-sm text-ctp-mauve transition-colors hover:border-ctp-mauve/60 hover:bg-ctp-mauve/20"
        >
          ← Back to portfolio
        </Link>

        {/* Subtle footer */}
        <p className="mt-10 text-[10px] text-ctp-overlay0">
          pako.dev · Palapye, Botswana
        </p>
      </div>
    </main>
  );
}
