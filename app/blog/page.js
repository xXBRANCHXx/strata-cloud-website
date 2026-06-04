import Link from 'next/link';
import { ArrowRight, FileText } from 'lucide-react';

export const metadata = {
  title: 'Blog',
  description: 'Articles and insights from Strata Cloud Accountants.',
};

const posts = [
  'Is a fractional CFO worth it?',
  'What do CFO services include?',
  'What services does a fractional CFO provide?',
  'What services are offered by fractional CFO?',
];

export default function BlogPage() {
  return (
    <>
      <section className="hero hero--compact">
        <div className="container">
          <div className="section-head center reveal">
            <span className="eyebrow">Blog</span>
            <h1>News and articles for better financial decisions.</h1>
            <p>
              Practical finance articles for owners comparing fractional CFO,
              controller, bookkeeping, and advisory support.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid--4">
            {posts.map((post) => (
              <article className="card reveal" key={post}>
                <span className="icon"><FileText /></span>
                <span className="eyebrow">Article</span>
                <h3>{post}</h3>
                <p>Financial clarity content for owners ready to lead with better data.</p>
                <Link href="/contact?subject=Resources" className="link-arrow">
                  Request article <ArrowRight size={17} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
