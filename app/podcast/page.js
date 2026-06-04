'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function PodcastPage() {
  const observerRef = useRef(null);

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
  }, []);

  const episodes = [
    {
      num: 1,
      title: 'Why Every Service Business Needs a Financial Roadmap',
      desc: 'Most service founders fly blind without realizing it. In this episode, we break down what a financial roadmap actually is and how it replaces stress with clear decisions.',
      takeaways: [
        'Difference between budget and roadmap',
        'How to identify your three main cash levers',
        'The #1 mistake founders make when forecasting hiring'
      ],
      gradient: 'linear-gradient(135deg, #1B2A4A 0%, #2EC4B6 100%)',
    },
    {
      num: 2,
      title: 'Cash Flow Secrets: Stop Running on Empty',
      desc: 'You can have high revenue and still be days away from payroll failure. We talk about dynamic cash flow planning and how to get off the cash roller coaster.',
      takeaways: [
        'How to build a basic 13-week rolling forecast',
        'Why accounts receivable policy dictates cash flow',
        'Setting up emergency cash buffers that make sense'
      ],
      gradient: 'linear-gradient(135deg, #243660 0%, #E5C06B 100%)',
    },
    {
      num: 3,
      title: 'Pricing for Profit: Are You Leaving Money on the Table?',
      desc: 'If your margins are razor thin, your pricing model is broken. We examine how to price service packages for sustainable growth and client satisfaction.',
      takeaways: [
        'Cost-plus pricing vs value-based pricing',
        'Auditing your current client margin profitability',
        'How to raise rates for existing clients without losing them'
      ],
      gradient: 'linear-gradient(135deg, #0F1B33 0%, #2EC4B6 100%)',
    },
    {
      num: 4,
      title: 'The Messy Books Epidemic: How to Clean Up Fast',
      desc: 'Messy transactions are more than just ugly; they lead to bad strategic decisions. We layout a step-by-step roadmap to clean up accounts and keep them that way.',
      takeaways: [
        'The cost of bad categorizations',
        'Setting up clear rules for receipts and software syncs',
        'When to outsource bookkeeping vs keeping it in-house'
      ],
      gradient: 'linear-gradient(135deg, #1B2A4A 0%, #D4A843 100%)',
    },
    {
      num: 5,
      title: 'From Gut Decisions to Data-Driven Growth',
      desc: 'In this episode, we share how shifting from gut instinct to reading key dashboards transforms a founder from a stressed task-doer into a true executive leader.',
      takeaways: [
        'Which 5 metrics you need to check weekly',
        'How dashboard automation saves hours of management time',
        'Case studies of founders who doubled profit with dashboard data'
      ],
      gradient: 'linear-gradient(135deg, #2EC4B6 0%, #1FA89B 100%)',
    },
    {
      num: 6,
      title: 'Building Your Financial Dream Team',
      desc: 'When should you hire a bookkeeper? A controller? A CFO? We map out the ideal order of financial hires to scale your service firm smoothly.',
      takeaways: [
        'Roles and responsibilities of bookkeepers vs CFOs',
        'How to spot a bad fit before hiring an agency',
        'Designing internal workflows to integrate your financial team'
      ],
      gradient: 'linear-gradient(135deg, #0F1B33 0%, #E5C06B 100%)',
    },
  ];

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="hero" style={{ minHeight: '60vh', padding: '10rem 0 6rem' }}>
        <div className="hero__bg-pattern" />
        <div className="hero__glow" />
        <div className="hero__glow hero__glow--secondary" />

        <div className="hero__content container">
          <div className="hero__text" style={{ maxWidth: '850px', margin: '0 auto', textAlign: 'center' }}>
            <span style={{ color: 'var(--teal)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '0.9rem', display: 'block', marginBottom: '1rem' }} className="animate-fadeInUp">
              Podcast
            </span>
            <h1 className="animate-fadeInUp" style={{ fontSize: '3.5rem', lineHeight: 1.1 }}>
              The Financial Clarity <br />
              <span>Podcast</span>
            </h1>
            <p className="hero__subtitle animate-fadeInUp animate-delay-1" style={{ margin: '1.5rem auto 0', fontSize: '1.25rem', color: 'rgba(255,255,255,0.8)' }}>
              Weekly insights for service-based business owners ready to lead with data, not guesswork. Host Kim discusses numbers, coaching, and strategy.
            </p>
          </div>
        </div>
      </section>

      {/* ===== PLATFORMS BAR ===== */}
      <section style={{ background: 'var(--navy-light)', borderBottom: '1px solid rgba(255,255,255,0.1)', padding: '2rem 0' }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
          <span style={{ color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em' }}>
            Listen & Subscribe On:
          </span>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <button className="platform-btn" style={{ background: '#1DB954', color: 'white', border: 'none', padding: '0.6rem 1.5rem', borderRadius: '50px', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
              🟢 Spotify
            </button>
            <button className="platform-btn" style={{ background: '#A349A4', color: 'white', border: 'none', padding: '0.6rem 1.5rem', borderRadius: '50px', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
              🟣 Apple Podcasts
            </button>
            <button className="platform-btn" style={{ background: '#FF0000', color: 'white', border: 'none', padding: '0.6rem 1.5rem', borderRadius: '50px', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
              🔴 YouTube
            </button>
          </div>
        </div>
      </section>

      {/* ===== EPISODES GRID ===== */}
      <section className="section" style={{ background: 'var(--white)', color: 'var(--navy)', padding: '6rem 0' }}>
        <div className="container">
          <div className="reveal" style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.25rem', fontFamily: 'var(--font-heading)', color: 'var(--navy)', fontWeight: 800 }}>
              Recent Episodes
            </h2>
            <p style={{ color: 'var(--gray-500)', fontSize: '1.1rem', marginTop: '0.5rem' }}>
              Get tactical blueprints and strategic shifts in 30 minutes or less.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2.5rem' }}>
            {episodes.map((ep) => (
              <div
                key={ep.num}
                className="reveal"
                style={{
                  background: 'var(--off-white)',
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  border: '1px solid var(--gray-200)',
                  boxShadow: 'var(--shadow-sm)',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%'
                }}
              >
                {/* Visual Cover Placeholder */}
                <div style={{
                  height: '180px',
                  background: ep.gradient,
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--white)',
                }}>
                  <div style={{ position: 'absolute', top: '1rem', left: '1rem', background: 'rgba(15,27,51,0.75)', padding: '0.25rem 0.75rem', borderRadius: 'var(--radius-sm)', fontSize: '0.8rem', fontWeight: 700, color: 'var(--teal)' }}>
                    EPISODE {ep.num}
                  </div>
                  
                  {/* Decorative Play Button */}
                  <div style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: 'var(--white)',
                    boxShadow: 'var(--shadow-md)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    color: 'var(--navy)',
                    paddingLeft: '0.25rem',
                    cursor: 'pointer',
                    transition: 'transform 0.2s',
                    hover: { transform: 'scale(1.1)' }
                  }}>
                    ▶️
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <h3 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-heading)', color: 'var(--navy)', fontWeight: 700, lineHeight: 1.3, marginBottom: '1rem' }}>
                    {ep.title}
                  </h3>
                  <p style={{ color: 'var(--gray-600)', fontSize: '0.9rem', lineHeight: 1.5, marginBottom: '1.5rem', flexGrow: 1 }}>
                    {ep.desc}
                  </p>
                  
                  {/* Key Takeaways */}
                  <div style={{ borderTop: '1px solid var(--gray-200)', paddingTop: '1.25rem', marginBottom: '1.5rem' }}>
                    <h4 style={{ fontSize: '0.8rem', color: 'var(--navy-light)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 700, marginBottom: '0.75rem' }}>
                      Key Takeaways:
                    </h4>
                    <ul style={{ margin: 0, paddingLeft: '1.2rem', color: 'var(--gray-600)', fontSize: '0.85rem', lineHeight: 1.5 }}>
                      {ep.takeaways.map((takeaway, idx) => (
                        <li key={idx} style={{ marginBottom: '0.25rem' }}>{takeaway}</li>
                      ))}
                    </ul>
                  </div>

                  <Link href="/contact" className="btn btn--secondary" style={{ textAlign: 'center', display: 'block', fontSize: '0.9rem' }} id={`podcast-ep-${ep.num}-cta`}>
                    📞 Book a Clarity Call
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BOTTOM CTA ===== */}
      <section className="section section--dark" style={{ padding: '6rem 0', position: 'relative', overflow: 'hidden' }}>
        <div className="hero__glow" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 0.15 }} />
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <div className="reveal" style={{ maxWidth: '700px', margin: '0 auto' }}>
            <h2 className="section__title" style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Apply What You Hear to Your Business</h2>
            <p className="section__subtitle" style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.7)', marginBottom: '2.5rem' }}>
              Listening is great, but execution is everything. Schedule your free 30-minute Clarity Call to audit your margins, cash forecasts, and ledgers with our advisory team.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn btn--primary" id="podcast-cta-book-call">
                📞 Book a Clarity Call
              </Link>
              <Link href="/services" className="btn btn--secondary" id="podcast-cta-services">
                Explore Advisory Packages
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
