'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { ArrowRight, Search, XCircle } from 'lucide-react';
import { resourceItems } from '../data/site';

const categories = ['All', 'Article', 'Guide', 'Podcast', 'FAQ'];

export default function ResourcesPage() {
  const [category, setCategory] = useState('All');
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    return resourceItems.filter((item) => {
      const matchesCategory = category === 'All' || item.type === category;
      const text = `${item.title} ${item.text}`.toLowerCase();
      return matchesCategory && text.includes(query.toLowerCase());
    });
  }, [category, query]);

  return (
    <>
      <section className="hero hero--compact">
        <div className="container">
          <div className="section-head center reveal">
            <span className="eyebrow">Resource Hub</span>
            <h1>Knowledge and insights for clearer financial leadership.</h1>
            <p>
              Articles, podcast episodes, FAQs, and owner tools built around
              fractional CFO insight, accounting advisory, and financial clarity.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--soft" style={{ paddingTop: 'var(--space-10)', paddingBottom: 'var(--space-10)' }}>
        <div className="container">
          <div className="panel reveal" style={{ padding: 'var(--space-5)', display: 'flex', flexWrap: 'wrap', gap: 'var(--space-4)', alignItems: 'center', justifyContent: 'space-between' }}>
            <div className="hero__actions">
              {categories.map((item) => (
                <button
                  key={item}
                  type="button"
                  className={`btn ${category === item ? 'btn--primary' : 'btn--secondary'}`}
                  onClick={() => setCategory(item)}
                >
                  {item}
                </button>
              ))}
            </div>
            <label style={{ position: 'relative', minWidth: '260px' }}>
              <span className="eyebrow" style={{ marginBottom: 'var(--space-2)' }}>Search</span>
              <Search size={18} style={{ position: 'absolute', left: '1rem', bottom: '1rem', color: 'var(--purple-700)' }} />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search resources"
                style={{
                  width: '100%',
                  border: '1px solid var(--line)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '0.9rem 1rem 0.9rem 2.7rem',
                }}
              />
            </label>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {filtered.length ? (
            <div className="grid grid--4">
              {filtered.map((item) => {
                const Icon = item.icon;
                return (
                  <article className="card reveal" key={item.title}>
                    <span className="icon"><Icon /></span>
                    <span className="eyebrow">{item.type}</span>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                    <Link href={item.href || '/contact?subject=Resources'} className="link-arrow">
                      Open resource <ArrowRight size={17} />
                    </Link>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="section-head center reveal">
              <span className="icon" style={{ marginInline: 'auto' }}><XCircle /></span>
              <h2>No resources found.</h2>
              <p>Try another category or search term.</p>
              <button type="button" className="btn btn--primary" onClick={() => { setCategory('All'); setQuery(''); }}>
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="section section--purple cta">
        <div className="container">
          <div className="section-head center reveal">
            <span className="eyebrow">Personalized guidance</span>
            <h2>Resources are useful. A financial roadmap is better.</h2>
            <p>Book a Clarity Call and apply these frameworks to your actual numbers.</p>
          </div>
          <Link href="/contact" className="btn btn--secondary">Book a Clarity Call</Link>
        </div>
      </section>
    </>
  );
}
