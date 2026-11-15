import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-card mx-auto mt-16 max-w-xl rounded-[2rem] border border-white/10 px-6 py-16 text-center">
      <p className="text-xs tracking-[0.18em] text-cyan uppercase">Missing exhibit</p>
      <h1 className="mt-3 font-display text-5xl">That page is not in the museum.</h1>
      <p className="mt-4 text-silver">The machine or diagram you asked for is not part of this exhibit.</p>
      <Link href="/" className="btn mt-6 inline-flex rounded-full bg-cyan px-5 py-2.5 font-medium text-space">
        Back to the entrance
      </Link>
    </div>
  );
}
