'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

export default function CareersPage() {
  const observerRef = useRef(null);
  const [activeTab, setActiveTab] = useState('thrive');

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

  const evpThemes = [
    {
      title: 'Meaningful Impact',
      icon: '🌍',
      desc: 'You aren\'t just crunching numbers; you are shaping the success and peace of mind of real business founders.',
    },
    {
      title: 'Clarity Over Chaos',
      icon: '✨',
      desc: 'We advocate for clean processes internally and externally, so you can execute your work without constant administrative friction.',
    },
    {
      title: 'Ownership & Accountability',
      icon: '🔑',
      desc: 'We trust you to manage your accounts and schedule. With that autonomy comes full ownership over your deliverables and client success.',
    },
    {
      title: 'Freedom with Structure',
      icon: '🕊️',
      desc: 'Work from where you want, with flexible hours. We don\'t micromanage; we build robust systems so you can work independently.',
    },
    {
      title: 'Human-Centered Culture',
      icon: '❤️',
      desc: 'We treat our team as whole humans with families, hobbies, and personal goals. Mental wellbeing and respect are non-negotiable.',
    },
  ];

  const comparison = [
    {
      metric: 'Work Approach',
      typical: 'Task-focused, checking off lists',
      strata: 'Relationship-first advisory',
    },
    {
      metric: 'Client Connection',
      typical: 'Transactional emails once a month',
      strata: 'Coaching-driven partnership',
    },
    {
      metric: 'Hierarchy & Autonomy',
      typical: 'Rigid structure, heavy micromanagement',
      strata: 'Trust-based autonomy & ownership',
    },
    {
      metric: 'Client Seat',
      typical: 'Back-office administrative recorder',
      strata: 'Valued seat at the executive table',
    },
    {
      metric: 'Growth Direction',
      typical: 'More hours, same administrative tasks',
      strata: 'Strategic advisor skill development',
    },
  ];

  const roles = [
    {
      id: 'cfo-advisor',
      title: 'Senior Client Advisor / Fractional CFO',
      type: 'Full-Time | Remote',
      desc: 'Lead the advisory and strategy for a portfolio of 8-12 growing service businesses. Host client coaching calls, design financial dashboards, and serve as their fractional CFO.',
      requirements: '8+ years of accounting/CFO experience, strong client-facing advisory confidence, and passion for coaching.',
    },
    {
      id: 'sr-accountant',
      title: 'Senior Accountant',
      type: 'Full-Time | Remote',
      desc: 'Manage the monthly accrual close cycles, reconcile complex balance sheets, and ensure client accounts are audit-ready. Mentor junior staff and optimize system integrations.',
      requirements: '4+ years of public accounting or corporate accounting experience, advanced Excel/QBO knowledge, and extreme attention to detail.',
    },
    {
      id: 'advisory-spec',
      title: 'Advisory Operations Specialist',
      type: 'Part-Time or Full-Time | Remote',
      desc: 'Support the advisory team by gathering client KPIs, building initial dashboard drafts in Fathom, and running margin audits. Perfect for those looking to pivot into strategic coaching.',
      requirements: '2+ years of accounting or finance experience, strong technical aptitude with BI tools, and eagerness to learn strategic advisory.',
    },
  ];

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="hero" style={{ minHeight: '65vh', padding: '10rem 0 6rem' }}>
        <div className="hero__bg-pattern" />
        <div className="hero__glow" />
        <div className="hero__glow hero__glow--secondary" />

        <div className="hero__content container">
          <div className="hero__text" style={{ maxWidth: '850px', margin: '0 auto', textAlign: 'center' }}>
            <span style={{ color: 'var(--teal)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '0.9rem', display: 'block', marginBottom: '1rem' }} className="animate-fadeInUp">
              Careers at Strata Cloud
            </span>
            <h1 className="animate-fadeInUp" style={{ fontSize: '3.5rem', lineHeight: 1.1 }}>
              Build a Career Where <br />
              <span>Clarity & Humanity Coexist</span>
            </h1>
            <p className="hero__subtitle animate-fadeInUp animate-delay-1" style={{ margin: '1.5rem auto 0', fontSize: '1.25rem', color: 'rgba(255,255,255,0.8)' }}>
              Join a modern fractional accounting firm that values trust, autonomy, and real, advisory-driven client impact.
            </p>
            <div className="animate-fadeInUp animate-delay-2" style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="#open-roles" className="btn btn--primary" id="careers-cta-roles">
                View Open Roles
              </a>
              <a href="#fit-check" className="btn btn--secondary" id="careers-cta-fit">
                Is Strata Cloud Right for You?
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== EVP THEMES ===== */}
      <section className="section" style={{ background: 'var(--white)', color: 'var(--navy)', padding: '6rem 0' }}>
        <div className="container">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-heading)', color: 'var(--navy)', fontWeight: 800 }}>
              The Strata Cloud Difference
            </h2>
            <p style={{ color: 'var(--gray-500)', fontSize: '1.1rem', margin: '1rem auto 0', maxWidth: '600px' }}>
              We aren\'t your typical, old-school accounting shop. Here is what we prioritize for our team members daily:
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {evpThemes.map((theme) => (
              <div
                key={theme.title}
                className="reveal"
                style={{
                  background: 'var(--off-white)',
                  padding: '2.5rem',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--gray-200)',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <div style={{ fontSize: '3rem', marginBottom: '1.25rem' }}>{theme.icon}</div>
                <h3 style={{ fontSize: '1.35rem', fontFamily: 'var(--font-heading)', color: 'var(--navy)', fontWeight: 700, marginBottom: '0.75rem' }}>
                  {theme.title}
                </h3>
                <p style={{ color: 'var(--gray-600)', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>
                  {theme.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== COMPARISON CHART ===== */}
      <section className="section" style={{ background: 'var(--off-white)', color: 'var(--navy)', padding: '6rem 0', borderTop: '1px solid var(--gray-200)', borderBottom: '1px solid var(--gray-200)' }}>
        <div className="container">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-heading)', color: 'var(--navy)', fontWeight: 800 }}>
              What Makes Us Different
            </h2>
            <p style={{ color: 'var(--gray-500)', fontSize: '1.1rem', margin: '1rem auto 0', maxWidth: '600px' }}>
              How we compare to the typical, compliance-only firms you might be used to.
            </p>
          </div>

          <div className="reveal" style={{ background: 'var(--white)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-md)', border: '1px solid var(--gray-200)' }}>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                <thead>
                  <tr style={{ background: 'var(--navy)', color: 'var(--white)' }}>
                    <th style={{ padding: '1.5rem 2rem', fontFamily: 'var(--font-heading)', fontWeight: 700 }}>Focus</th>
                    <th style={{ padding: '1.5rem 2rem', fontFamily: 'var(--font-heading)', fontWeight: 700 }}>Typical Accounting Firm</th>
                    <th style={{ padding: '1.5rem 2rem', fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--teal)' }}>Strata Cloud Accountants</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((item, idx) => (
                    <tr key={idx} style={{ borderBottom: idx !== comparison.length - 1 ? '1px solid var(--gray-200)' : 'none', background: idx % 2 === 0 ? 'var(--white)' : 'var(--gray-50)' }}>
                      <td style={{ padding: '1.5rem 2rem', fontWeight: 700, color: 'var(--navy)', fontSize: '0.95rem' }}>{item.metric}</td>
                      <td style={{ padding: '1.5rem 2rem', color: 'var(--gray-500)', fontSize: '0.95rem' }}>{item.typical}</td>
                      <td style={{ padding: '1.5rem 2rem', color: 'var(--navy-light)', fontWeight: 600, fontSize: '0.95rem' }}>
                        <span style={{ color: 'var(--teal)', marginRight: '0.5rem' }}>✓</span> {item.strata}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ===== INTERACTIVE FIT CHECK ===== */}
      <section id="fit-check" className="section" style={{ background: 'var(--navy-dark)', color: 'var(--white)', padding: '6rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <h2 className="section__title" style={{ color: 'var(--white)' }}>Is Strata Cloud Right for You?</h2>
            <p className="section__subtitle" style={{ color: 'rgba(255,255,255,0.7)', margin: '0 auto' }}>
              We value absolute alignment. Check out who thrives here and who might not find us a good fit.
            </p>
          </div>

          <div className="reveal" style={{ display: 'flex', justifyContent: 'center', marginBottom: '2.5rem' }}>
            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '0.35rem', borderRadius: 'var(--radius-md)', display: 'inline-flex', gap: '0.5rem' }}>
              <button
                onClick={() => setActiveTab('thrive')}
                style={{
                  background: activeTab === 'thrive' ? 'var(--teal)' : 'transparent',
                  color: activeTab === 'thrive' ? 'var(--navy-dark)' : 'var(--white)',
                  border: 'none',
                  padding: '0.75rem 1.5rem',
                  borderRadius: 'var(--radius-sm)',
                  cursor: 'pointer',
                  fontWeight: 700,
                  transition: 'all 0.3s'
                }}
              >
                🎉 You\'ll Thrive Here If...
              </button>
              <button
                onClick={() => setActiveTab('struggle')}
                style={{
                  background: activeTab === 'struggle' ? 'var(--gold)' : 'transparent',
                  color: activeTab === 'struggle' ? 'var(--navy-dark)' : 'var(--white)',
                  border: 'none',
                  padding: '0.75rem 1.5rem',
                  borderRadius: 'var(--radius-sm)',
                  cursor: 'pointer',
                  fontWeight: 700,
                  transition: 'all 0.3s'
                }}
              >
                ⚠️ You May Struggle If...
              </button>
            </div>
          </div>

          <div className="reveal" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 'var(--radius-lg)', padding: '3rem' }}>
            {activeTab === 'thrive' ? (
              <div>
                <h3 style={{ color: 'var(--teal)', fontSize: '1.5rem', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)', fontWeight: 700 }}>You will fit right in if:</h3>
                <ul style={{ margin: 0, paddingLeft: '1.5rem', fontSize: '1.05rem', lineHeight: '1.8', color: 'rgba(255,255,255,0.85)' }}>
                  <li style={{ marginBottom: '1rem' }}><strong>You value radical transparency:</strong> You talk about mistakes openly so we can solve them together, and you don\'t hide behind professional jargon.</li>
                  <li style={{ marginBottom: '1rem' }}><strong>You enjoy coaching and teaching:</strong> You love translating a balance sheet into real, actionable advice and seeing your client understand it.</li>
                  <li style={{ marginBottom: '1rem' }}><strong>You take complete ownership:</strong> You don\'t wait to be told what to do. You see a client process that is broken and you coordinate fixing it.</li>
                  <li style={{ marginBottom: '1rem' }}><strong>You thrive with autonomy:</strong> You like setting your own routine, working in a remote-first setup, and delivering outstanding work on schedule.</li>
                </ul>
              </div>
            ) : (
              <div>
                <h3 style={{ color: 'var(--gold)', fontSize: '1.5rem', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)', fontWeight: 700 }}>This might not be the place for you if:</h3>
                <ul style={{ margin: 0, paddingLeft: '1.5rem', fontSize: '1.05rem', lineHeight: '1.8', color: 'rgba(255,255,255,0.85)' }}>
                  <li style={{ marginBottom: '1rem' }}><strong>You prefer heavy micromanagement:</strong> If you need a boss listing daily tasks and monitoring active hours, you will feel lost here.</li>
                  <li style={{ marginBottom: '1rem' }}><strong>You want purely transactional work:</strong> If you just want to punch in numbers and log off without ever talking to a client or caring about their strategy, you won\'t thrive.</li>
                  <li style={{ marginBottom: '1rem' }}><strong>You avoid accountability:</strong> We do not finger-point, but we do expect you to own your client portfolio and fix mistakes proactively.</li>
                  <li style={{ marginBottom: '1rem' }}><strong>You struggle with open feedback:</strong> We believe in fast, kind, direct conversations to improve our work.</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ===== GROWTH PHILOSOPHY ===== */}
      <section className="section" style={{ background: 'var(--white)', color: 'var(--navy)', padding: '6rem 0' }}>
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
          <div className="reveal">
            <span style={{ color: 'var(--teal)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.9rem', display: 'block', marginBottom: '0.5rem' }}>
              Our Philosophy
            </span>
            <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-heading)', color: 'var(--navy)', fontWeight: 800 }}>
              How We View Career Growth
            </h2>
            <p style={{ color: 'var(--gray-700)', fontSize: '1.1rem', lineHeight: '1.8', marginTop: '1.5rem', textAlign: 'left' }}>
              At Strata Cloud, growth isn\'t just about surviving busy seasons to get a title bump. We define career growth as <strong>expanding your capabilities, confidence, and scope of impact</strong>.
            </p>
            <p style={{ color: 'var(--gray-700)', fontSize: '1.1rem', lineHeight: '1.8', marginTop: '1.5rem', textAlign: 'left' }}>
              We actively train our accountants and analysts to step into the role of a Fractional CFO. This means you will get direct exposure to high-level strategic conversations, learn KPI dashboard development, and build the consulting confidence necessary to sit at the executive table with business owners.
            </p>
          </div>
        </div>
      </section>

      {/* ===== OPEN ROLES ===== */}
      <section id="open-roles" className="section" style={{ background: 'var(--off-white)', color: 'var(--navy)', padding: '6rem 0', borderTop: '1px solid var(--gray-200)' }}>
        <div className="container">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-heading)', color: 'var(--navy)', fontWeight: 800 }}>
              Current Open Roles
            </h2>
            <p style={{ color: 'var(--gray-500)', fontSize: '1.1rem', margin: '1rem auto 0', maxWidth: '600px' }}>
              We are always looking for smart, client-focused financial experts to join our remote-first team.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', maxWidth: '900px', margin: '0 auto' }}>
            {roles.map((role) => (
              <div
                key={role.id}
                className="reveal"
                style={{
                  background: 'var(--white)',
                  padding: '2.5rem',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--gray-200)',
                  boxShadow: 'var(--shadow-sm)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  position: 'relative'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                  <div>
                    <h3 style={{ fontSize: '1.4rem', fontFamily: 'var(--font-heading)', color: 'var(--navy)', fontWeight: 700, margin: 0 }}>
                      {role.title}
                    </h3>
                    <span style={{ fontSize: '0.85rem', color: 'var(--teal)', fontWeight: 700, textTransform: 'uppercase', display: 'block', marginTop: '0.25rem' }}>
                      {role.type}
                    </span>
                  </div>
                  <Link href="/contact?subject=Careers" className="btn btn--secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }} id={`careers-apply-${role.id}`}>
                    Apply Now
                  </Link>
                </div>
                <p style={{ color: 'var(--gray-600)', fontSize: '0.95rem', lineHeight: 1.5, margin: 0 }}>
                  {role.desc}
                </p>
                <div style={{ borderTop: '1px solid var(--gray-100)', paddingTop: '1rem', fontSize: '0.85rem', color: 'var(--gray-500)' }}>
                  <strong>Key Requirements:</strong> {role.requirements}
                </div>
              </div>
            ))}
          </div>

          <div className="reveal" style={{ textAlign: 'center', marginTop: '4rem', color: 'var(--gray-600)' }}>
            <p>Don\'t see a role that fits but love our mission? We\'d still love to hear from you.</p>
            <Link href="/contact" style={{ color: 'var(--teal)', fontWeight: 600, textDecoration: 'underline' }}>
              Send us a message with your resume →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
