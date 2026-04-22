import { Star } from 'lucide-react';

export function StarRating() {
  return (
    <div className="flex gap-1 text-[color:var(--accent-green)]" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} size={16} fill="currentColor" aria-hidden />
      ))}
    </div>
  );
}
