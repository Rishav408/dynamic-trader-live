export default function Loading() {
  return (
    <div className="container flex min-h-[60vh] items-center justify-center">
      <div className="h-12 w-12 animate-spin rounded-full border-2 border-[var(--border)] border-t-[color:var(--accent-green)]" />
    </div>
  );
}
