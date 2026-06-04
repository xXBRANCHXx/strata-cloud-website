'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function ResourcesPage() {
  const observerRef = useRef(null);
  const [filter, setFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInUp');
            observerRef.current.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.reveal').forEach((el) => {
      observerRef.current.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, [filter, searchQuery]);

  const items = [
    {
      title: 'Financial Clarity Starter Kit',
      type: 'Owner Resources',
      format: 'Gated PDF Toolkit',
      desc: 'Our most popular free resource. Includes an interactive Excel cash flow template, a critical KPI matrix, and a quick bookkeeping hygiene checklist.',
      icon: '📦',
      linkText: 'Download Starter Kit →',
      link: '/contact?subject=Resources',
    },
    {
      title: 'The Financial Clarity Podcast',
      type: 'All',
      format: 'Weekly Audio/Video',
      desc: 'Tune in to our weekly discussion where we break down margins, systems implementation, hiring forecasts, and real business case studies in 30 minutes or less.',
      icon: '🎙️',
      linkText: 'Listen to Episodes →',
      link: '/podcast',
    },
    {
      title: 'Understanding Accrual vs Cash Accounting',
      type: 'Controller Resources',
      format: 'Deep-Dive Article',
      desc: 'Why cash-basis financials hide the real health of service firms. Learn when to transition to accrual and how it changes your valuation in the eyes of buyers.',
      icon: '📄',
      linkText: 'Read Article →',
      link: '/contact',
    },
    {
      title: 'Scaling Beyond $2M: A Financial Roadmap',
      type: 'Growth Stage',
      format: 'Strategic Ebook',
      desc: 'Written specifically for service founders scaling past $2M in revenue. Details when to hire a controller, how to forecast margins, and when to bring on a fractional CFO.',
      icon: '📘',
      linkText: 'Download Ebook →',
      link: '/contact?subject=Resources',
    },
    {
      title: 'Frequently Asked Questions (FAQ)',
      type: 'All',
      format: 'Knowledge Base',
      desc: 'Quick, honest answers to common questions about onboarding timelines, dashboard software configurations, pricing structures, and cleanup scopes.',
      icon: '❓',
      linkText: 'View FAQs →',
      link: '/contact',
    },
    {
      title: 'Cash Flow Cleanup Workshop',
      type: 'Owner Resources',
      format: 'On-Demand Video',
      desc: 'A 45-minute video walkthrough showing you exactly how to find duplicate software charges, clean up chart of accounts clutter, and model basic cash flow runway.',
      icon: '🎥',
      linkText: 'Watch Workshop →',
      link: '/contact?subject=Resources',
    },
  ];

  const filteredItems = items.filter((item) => {
    const matchesFilter = filter === 'All' || item.type === filter || (filter === 'Owner Resources' && item.type === 'All');
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const categories = ['All', 'Owner Resources', 'Controller Resources', 'Growth Stage'];

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="hero" style={{ minHeight: '60vh', padding: '10rem 0 6rem' }}>
        <div className="hero__bg-pattern" />
        <div className="hero__glow" />
        <div className="hero__glow hero__glow--secondary" />

        <div className="hero__content container">
          <div className="hero__text" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <span style={{ color: 'var(--teal)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '0.9rem', display: 'block', marginBottom: '1rem' }} className="animate-fadeInUp">
              Resource Hub
            </span>
            <h1 className="animate-fadeInUp" style={{ fontSize: '3.5rem', lineHeight: 1.1 }}>
              Knowledge & <span>Insights</span>
            </h1>
            <p className="hero__subtitle animate-fadeInUp animate-delay-1" style={{ margin: '1.5rem auto 0', fontSize: '1.25rem', color: 'rgba(255,255,255,0.8)' }}>
              Free frameworks, spreadsheets, and articles to help you build stable margins and bulletproof cash flows.
            </p>
          </div>
        </div>
      </section>

      {/* ===== FILTER & SEARCH BAR ===== */}
      <section style={{ background: 'var(--navy-light)', borderBottom: '1px solid rgba(255,255,255,0.1)', padding: '2rem 0', sticky: 'top', zIndex: 10 }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', mdDirection: 'row', gap: '1.5rem', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          
          {/* Categories */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                style={{
                  background: filter === cat ? 'var(--teal)' : 'rgba(255,255,255,0.05)',
                  color: filter === cat ? 'var(--navy-dark)' : 'var(--white)',
                  border: 'none',
                  padding: '0.6rem 1.25rem',
                  borderRadius: 'var(--radius-sm)',
                  cursor: 'pointer',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  transition: 'all 0.3s'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div style={{ position: 'relative', width: '100%', maxWidth: '300px' }}>
            <input
              type="text"
              placeholder="Search resources..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '0.6rem 1.25rem 0.6rem 2.5rem',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid rgba(255,255,255,0.2)',
                background: 'rgba(255,255,255,0.05)',
                color: 'var(--white)',
                fontSize: '0.9rem',
                outline: 'none'
              }}
            />
            <span style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)', fontSize: '0.9rem', opacity: 0.5 }}>
              🔍
            </span>
          </div>

        </div>
      </section>

      {/* ===== RESOURCES GRID ===== */}
      <section className="section" style={{ background: 'var(--white)', color: 'var(--navy)', padding: '6rem 0' }}>
        <div className="container">
          {filteredItems.length > 0 ? (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
              {filteredItems.map((item, idx) => (
                <div
                  key={idx}
                  className="reveal"
                  style={{
                    background: 'var(--off-white)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '2.5rem',
                    border: '1px solid var(--gray-200)',
                    boxShadow: 'var(--shadow-sm)',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    transition: 'all 0.3s'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                    <span style={{ fontSize: '2.5rem' }}>{item.icon}</span>
                    <span style={{ fontSize: '0.75rem', background: 'var(--gray-200)', color: 'var(--navy-light)', padding: '0.25rem 0.75rem', borderRadius: 'var(--radius-sm)', fontWeight: 700, textTransform: 'uppercase' }}>
                      {item.format}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.35rem', fontFamily: 'var(--font-heading)', color: 'var(--navy)', fontWeight: 700, marginBottom: '0.75rem', lineHeight: 1.3 }}>
                    {item.title}
                  </h3>
                  
                  <p style={{ color: 'var(--gray-600)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem', flexGrow: 1 }}>
                    {item.desc}
                  </p>

                  <div style={{ borderTop: '1px solid var(--gray-200)', paddingTop: '1.25rem' }}>
                    <Link href={item.link} className="btn btn--secondary" style={{ display: 'inline-block', width: '100%', textAlign: 'center', padding: '0.6rem', fontSize: '0.9rem' }} id={`resource-item-${idx}-btn`}>
                      {item.linkText}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="reveal" style={{ textAlign: 'center', padding: '5rem 0' }}>
              <span style={{ fontSize: '3rem', display: 'block', marginBottom: '1rem' }}>📭</span>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--navy)', fontWeight: 700 }}>No Resources Found</h3>
              <p style={{ color: 'var(--gray-500)', marginTop: '0.5rem' }}>
                We couldn\'t find any resources matching your search query or filter. Try a different term!
              </p>
              <button onClick={() => { setFilter('All'); setSearchQuery(''); }} className="btn btn--primary" style={{ marginTop: '1.5rem' }}>
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ===== BOTTOM GATED CALL TO ACTION ===== */}
      <section className="section section--dark" style={{ padding: '6rem 0', position: 'relative', overflow: 'hidden' }}>
        <div className="hero__glow" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 0.15 }} />
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <div className="reveal" style={{ maxWidth: '700px', margin: '0 auto' }}>
            <h2 className="section__title" style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Want a Personalized Advisory Audit?</h2>
            <p className="section__subtitle" style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.7)', marginBottom: '2.5rem' }}>
              Downloadable resources are a starting point, but every service business is unique. Book a 30-minute Clarity Call and let\'s analyze your margins and cash forecasts together.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn btn--primary" id="resources-cta-book-call">
                📞 Book a Clarity Call
              </Link>
              <a href="/contact?subject=Resources" className="btn btn--secondary" id="resources-cta-starter-kit">
                Download Starter Kit
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
