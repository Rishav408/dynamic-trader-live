import type { Metadata } from 'next';
import { ArticleLayout } from '../shared';

export const metadata: Metadata = {
  title: 'What Are Institutional Order Blocks?',
  description: 'A practical introduction to institutional order blocks and DMC context.',
};

export default function OrderBlocksArticle() {
  return (
    <ArticleLayout
      title="What Are Institutional Order Blocks? The Complete Guide"
      readTime="8 min"
      body={[
        'Institutional order blocks are zones where large participants previously created meaningful buying or selling pressure. Retail traders often see only candles; professional traders ask why price reacted there and whether unfilled liquidity remains.',
        'Inside the DMC framework, an order block is never traded in isolation. We qualify it using market structure, liquidity context, displacement, fair value gaps, session timing, and defined risk.',
        'The goal is not to predict every reversal. The goal is to build a repeatable decision process: identify the institutional zone, wait for confirmation, define invalidation, and only then execute.',
      ]}
    />
  );
}
