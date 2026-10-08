import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-dvh place-items-center px-5 text-center">
      <div>
        <p className="font-display text-7xl italic text-accent">404</p>
        <h1 className="mt-4 text-2xl font-semibold tracking-tight">This page doesn&apos;t exist.</h1>
        <Link href="/" className="mt-8 inline-flex rounded-full bg-ink px-6 py-3 font-medium text-paper hover:bg-accent">
          Back to home
        </Link>
      </div>
    </main>
  );
}
