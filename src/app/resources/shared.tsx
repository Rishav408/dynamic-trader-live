import { Badge, Button, Card, Section } from '@/components/ui';

export function ArticleLayout({
  title,
  readTime,
  body,
}: {
  title: string;
  readTime: string;
  body: string[];
}) {
  return (
    <>
      <div className="reading-progress" />
      <Section className="pt-28">
        <article className="mx-auto max-w-3xl">
          <Badge>{readTime}</Badge>
          <h1 className="mt-5 font-display text-5xl font-extrabold md:text-6xl">{title}</h1>
          <Card className="mt-8 space-y-6 text-lg leading-9 text-[color:var(--text-secondary)]">
            {body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </Card>
          <div className="mt-8 flex gap-3">
            <Button href="/resources" variant="secondary">
              Back to Resources
            </Button>
            <Button href="/apply">Apply Now</Button>
          </div>
        </article>
      </Section>
    </>
  );
}
