'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function ServicesPage() {
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

  const services = [
    {
      id: 'fractional-cfo',
      title: 'Fractional CFO Services',
      subtitle: 'Executive-level financial strategy without the full-time overhead.',
      desc: 'Our fractional CFO services provide the high-level strategy you need to scale your business, manage cash flow, and prepare for capital raises or exits. We join your leadership team as an active strategic partner.',
      bullets: [
        'Strategic financial planning & modeling',
        'Cash flow optimization & forecasting',
        'Board-ready financial reporting packages',
        'Capital structure & fundraising advisory',
        'Scenario planning for hiring, pricing, and expansion'
      ],
      icon: '📈',
      bgGradient: 'linear-gradient(135deg, #1B2A4A 0%, #2EC4B6 100%)',
    },
    {
      id: 'accounting',
      title: 'Accounting & Controller Services',
      subtitle: 'Accurate, audit-ready financial management and process oversight.',
      desc: 'We manage your monthly close process, prepare complex financial statements, and coordinate tax preparation. Get high-quality oversight of internal processes and technical compliance.',
      bullets: [
        'Accrual-based monthly close cycles',
        'Financial statement prep (GAAP-compliant)',
        'Revenue recognition & deferred revenue mapping',
        'Internal controls setup & audit prep coordination',
        'Process optimization & accounting system setup'
      ],
      icon: '🛡️',
      bgGradient: 'linear-gradient(135deg, #243660 0%, #E5C06B 100%)',
    },
    {
      id: 'bookkeeping',
      title: 'Bookkeeping',
      subtitle: 'Real-time transaction tracking and clean ledgers.',
      desc: 'Keep your day-to-day accounts spotless. We handle receipt tracking, bank reconciliations, accounts payable, accounts receivable, and payroll so you never have to worry about your books again.',
      bullets: [
        'Daily transaction recording & categorization',
        'Bank, credit card, & loan reconciliations',
        'Accounts Payable (A/P) bill pay workflows',
        'Accounts Receivable (A/R) invoicing & collection',
        'Payroll administration & contractor tracking'
      ],
      icon: '📑',
      bgGradient: 'linear-gradient(135deg, #0F1B33 0%, #2EC4B6 100%)',
    },
    {
      id: 'advisory',
      title: 'Advisory Services & Business Coaching',
      subtitle: 'Bridging the gap between numbers and execution.',
      desc: 'Accounting is only useful if you know how to act on it. We provide regular business coaching sessions to review KPIs, fine-tune pricing strategy, and keep you accountable to your growth roadmap.',
      bullets: [
        'Key Performance Indicator (KPI) development',
        'Pricing & margin analysis for service packages',
        'Regular business coaching & accountability check-ins',
        'Unit economics analysis & client profitability checks',
        'Strategic growth mapping & goal tracking'
      ],
      icon: '🎯',
      bgGradient: 'linear-gradient(135deg, #1B2A4A 0%, #D4A843 100%)',
    },
    {
      id: 'dashboards',
      title: 'Financial Dashboards & KPI Reporting',
      subtitle: 'Visual, real-time insight into your company\'s vital metrics.',
      desc: 'No more confusing spreadsheets. We build customized, real-time financial dashboards that pull data from your accounting software, CRM, and tools to give you an at-a-glance view of health.',
      bullets: [
        'Custom interactive KPI dashboards (Fathom, PowerBI, etc.)',
        'Real-time cash flow visualization',
        'Visual break-even and runway charts',
        'Operational metrics tracking',
        'Simplified executive summary dashboards'
      ],
      icon: '📊',
      bgGradient: 'linear-gradient(135deg, #2EC4B6 0%, #1FA89B 100%)',
    },
  ];

  const painPoints = [
    {
      title: 'Messy Books',
      desc: 'Hard to tell where you stand? We clean them up, fix chart of accounts errors, and keep them pristine month after month.',
      icon: '🧹',
    },
    {
      title: 'Cash Flow Crunch',
      desc: 'Running out of funds unexpectedly? We build custom, rolling 13-week cash flow forecasts so you can see gaps months in advance.',
      icon: '💸',
    },
    {
      title: 'Late Receivables',
      desc: 'Customers not paying on time? We establish automated collection workflows and professional invoice policies to get you paid faster.',
      icon: '⏳',
    },
    {
      title: 'No CFO Insight',
      desc: 'Making blind strategic choices? We provide fractional CFO advice on hiring, pricing, and resource allocations based on actual data.',
      icon: '🧠',
    },
    {
      title: 'Pricing Confusion',
      desc: 'Not sure if you\'re charging enough? We run margin analyses to ensure your service packages are priced for sustainable profitability.',
      icon: '🏷️',
    },
    {
      title: 'Forecast Blind Spots',
      desc: 'Can\'t see the path ahead? We model different scenarios for hires, software rollouts, or office expansion before you spend a dime.',
      icon: '🔮',
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
          <div className="hero__text" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <span style={{ color: 'var(--teal)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '0.9rem', display: 'block', marginBottom: '1rem' }} className="animate-fadeInUp">
              Our Expertise
            </span>
            <h1 className="animate-fadeInUp" style={{ fontSize: '3.5rem', lineHeight: 1.1 }}>
              Financial Services That <br />
              <span style={{ color: 'var(--teal)' }}>Drive Growth</span>
            </h1>
            <p className="hero__subtitle animate-fadeInUp animate-delay-1" style={{ margin: '1.5rem auto 0', fontSize: '1.25rem', color: 'rgba(255,255,255,0.8)' }}>
              From transaction tracking to boardroom strategy, we provide the complete financial stack for growing service-based businesses.
            </p>
          </div>
        </div>
      </section>

      {/* ===== QUICK NAV ===== */}
      <div style={{ background: 'var(--navy-light)', borderBottom: '1px solid rgba(255,255,255,0.1)', sticky: 'top', zIndex: 10, padding: '1rem 0' }}>
        <div className="container" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          {services.map((s) => (
            <a key={s.id} href={`#${s.id}`} style={{ color: 'var(--white)', fontSize: '0.9rem', fontWeight: 600, textDecoration: 'none', padding: '0.5rem 1rem', borderRadius: 'var(--radius-sm)', transition: 'background 0.3s' }} className="nav-anchor">
              {s.icon} {s.title.split(' ')[0]}
            </a>
          ))}
          <style jsx>{`
            .nav-anchor:hover {
              background: rgba(46,196,182,0.15);
              color: var(--teal);
            }
          `}</style>
        </div>
      </div>

      {/* ===== DETAILED SERVICES LIST ===== */}
      <section className="section" style={{ background: 'var(--white)', color: 'var(--navy)', padding: '6rem 0' }}>
        <div className="container">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={service.id}
                id={service.id}
                className="reveal"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr',
                  gap: '4rem',
                  alignItems: 'center',
                  padding: '5rem 0',
                  borderBottom: index !== services.length - 1 ? '1px solid var(--gray-200)' : 'none',
                }}
              >
                <div style={{ gridColumn: 'span 1', order: isEven ? 1 : 2 }}>
                  <span style={{ fontSize: '3rem', display: 'block', marginBottom: '1.5rem' }}>{service.icon}</span>
                  <h2 style={{ fontSize: '2.25rem', fontFamily: 'var(--font-heading)', fontWeight: 800, color: 'var(--navy)', marginBottom: '0.5rem' }}>
                    {service.title}
                  </h2>
                  <h3 style={{ fontSize: '1.15rem', color: 'var(--teal)', fontWeight: 600, marginBottom: '1.5rem', fontFamily: 'var(--font-body)' }}>
                    {service.subtitle}
                  </h3>
                  <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--gray-700)', marginBottom: '2rem' }}>
                    {service.desc}
                  </p>
                  
                  <div style={{ background: 'var(--off-white)', padding: '2rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--gray-200)' }}>
                    <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--navy-light)', fontWeight: 700, marginBottom: '1rem' }}>
                      Key Deliverables & Focus Areas:
                    </h4>
                    <ul style={{ margin: 0, paddingLeft: '1.25rem', color: 'var(--gray-600)', fontSize: '0.95rem', lineHeight: '1.8' }}>
                      {service.bullets.map((b, i) => (
                        <li key={i} style={{ marginBottom: '0.5rem' }}>{b}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div style={{ marginTop: '2rem' }}>
                    <Link href="/contact" className="btn btn--primary" id={`services-inquire-${service.id}`}>
                      Inquire About This Service →
                    </Link>
                  </div>
                </div>

                <div
                  style={{
                    gridColumn: 'span 1',
                    order: isEven ? 2 : 1,
                    height: '400px',
                    borderRadius: 'var(--radius-lg)',
                    background: service.bgGradient,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--white)',
                    fontSize: '8rem',
                    boxShadow: 'var(--shadow-lg)',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '120%', height: '120%', background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 60%)' }} />
                  {service.icon}
                  <div style={{ fontSize: '1.25rem', fontFamily: 'var(--font-heading)', fontWeight: 700, marginTop: '2rem', opacity: 0.9 }}>
                    Strata Cloud {service.title.split(' ')[0]}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ===== PAIN POINTS SECTION ===== */}
      <section className="section" style={{ background: 'var(--off-white)', color: 'var(--navy)', padding: '6rem 0', borderTop: '1px solid var(--gray-200)' }}>
        <div className="container">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span style={{ color: 'var(--teal)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.9rem', display: 'block', marginBottom: '0.5rem' }}>
              Common Hurdles
            </span>
            <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-heading)', color: 'var(--navy)', fontWeight: 800 }}>
              Are You Experiencing These Pain Points?
            </h2>
            <p style={{ color: 'var(--gray-500)', fontSize: '1.1rem', margin: '1rem auto 0', maxWidth: '600px' }}>
              Scaling a service firm is hard. Don\'t let operational finance gaps hold your growth back.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {painPoints.map((item) => (
              <div
                key={item.title}
                className="reveal"
                style={{
                  background: 'var(--white)',
                  padding: '2.5rem',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--gray-200)',
                  boxShadow: 'var(--shadow-sm)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  hover: {
                    transform: 'translateY(-5px)',
                    boxShadow: 'var(--shadow-md)',
                  }
                }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '1.25rem' }}>{item.icon}</div>
                <h3 style={{ fontSize: '1.35rem', fontFamily: 'var(--font-heading)', color: 'var(--navy)', fontWeight: 700, marginBottom: '0.75rem' }}>
                  {item.title}
                </h3>
                <p style={{ color: 'var(--gray-600)', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>
                  {item.desc}
                </p>
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
            <h2 className="section__title" style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Ready to Scale with Absolute Financial Clarity?</h2>
            <p className="section__subtitle" style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.7)', marginBottom: '2.5rem' }}>
              Book your 30-minute Clarity Call. We\'ll examine your current accounting setup and outline a path to stable margins and stress-free forecasting.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn btn--primary" id="services-cta-book-call">
                📞 Book a Clarity Call
              </Link>
              <Link href="/about" className="btn btn--secondary" id="services-cta-about">
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
