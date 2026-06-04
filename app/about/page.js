'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function AboutPage() {
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

  const values = [
    {
      title: 'Service',
      icon: '🤝',
      description: 'We go above and beyond to support our clients, anticipating their needs before they ask.',
      behaviors: ['Answering emails within 4 hours', 'Creating proactive financial alerts for key cash markers.'],
    },
    {
      title: 'Transparency',
      icon: '🔍',
      description: 'No hidden agendas or confusing jargon. We tell you the numbers exactly as they are.',
      behaviors: ['Explaining complex financial reports in plain language', 'Providing open, upfront pricing models.'],
    },
    {
      title: 'Respect',
      icon: '💚',
      description: 'We treat every business owner and team member with high regard, celebrating diverse perspectives.',
      behaviors: ['Active listening during feedback loops', 'Value alignment and respect for founders\' original vision.'],
    },
    {
      title: 'Accountability',
      icon: '📈',
      description: 'We take complete ownership of our work and commitments, delivering exactly what we promise.',
      behaviors: ['Owning up to errors instantly and fixing them', 'Hitting reporting deadlines month after month.'],
    },
    {
      title: 'Trust',
      icon: '🛡️',
      description: 'The foundation of all our relationships. We earn it by being consistent, honest, and reliable.',
      behaviors: ['Maintaining absolute confidentiality', 'Serving as a neutral, reliable sounding board for major pivots.'],
    },
    {
      title: 'Absolute Freedom',
      icon: '🕊️',
      description: 'We empower both our clients and team to achieve freedom through structure and clarity.',
      behaviors: ['Setting up automated financial operations', 'Supporting autonomous decision-making and flexible working structures.'],
    },
  ];

  const team = [
    {
      name: 'Kim',
      role: 'CEO & Founder',
      desc: 'Kim is passionate about bridging the gap between numbers and strategy. She founded Strata Cloud to give business owners the clarity and partnership she saw they were missing.',
      fun: '“I love when a client sees their dashboard for the first time and the stress visibly leaves their shoulders.”',
      initials: 'K',
      gradient: 'linear-gradient(135deg, #1B2A4A 0%, #2EC4B6 100%)',
    },
    {
      name: 'Sarah Miller',
      role: 'Fractional CFO',
      desc: 'With over 12 years in mid-market financial leadership, Sarah specializes in scaling service businesses and navigating complex pricing structures.',
      fun: '“Helping founders double their profit margins through smart pricing pivots is what keeps me motivated.”',
      initials: 'SM',
      gradient: 'linear-gradient(135deg, #243660 0%, #E5C06B 100%)',
    },
    {
      name: 'Marcus Vance',
      role: 'Director of Accounting',
      desc: 'Marcus oversees our monthly close processes and systems implementation, ensuring your financial records are audit-ready and absolutely clean.',
      fun: '“I geek out over clean ledger structures and integrations that save clients hours of manual data entry.”',
      initials: 'MV',
      gradient: 'linear-gradient(135deg, #0F1B33 0%, #2EC4B6 100%)',
    },
    {
      name: 'Elena Rodriguez',
      role: 'Senior Advisory Specialist',
      desc: 'Elena coordinates coaching programs and helps clients transition from messy transaction-level worries into strategic planning.',
      fun: '“My goal is to translate complex balance sheets into actionable checklists that founders can execute immediately.”',
      initials: 'ER',
      gradient: 'linear-gradient(135deg, #1B2A4A 0%, #D4A843 100%)',
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
              About Strata Cloud
            </span>
            <h1 className="animate-fadeInUp" style={{ fontSize: '3.5rem', lineHeight: 1.1 }}>
              Our Story. <span>Our Purpose.</span>
            </h1>
            <p className="hero__subtitle animate-fadeInUp animate-delay-1" style={{ margin: '1.5rem auto 0', fontSize: '1.25rem', color: 'rgba(255,255,255,0.8)' }}>
              A relationship-first financial partnership for growing service businesses ready for absolute clarity.
            </p>
          </div>
        </div>
      </section>

      {/* ===== OUR STORY ===== */}
      <section className="section" style={{ background: 'var(--white)', color: 'var(--navy)', padding: '6rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem', alignItems: 'center' }}>
            <div className="reveal">
              <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-heading)', color: 'var(--navy)', marginBottom: '2rem', fontWeight: 800 }}>
                Why We Exist
              </h2>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--gray-700)', marginBottom: '1.5rem' }}>
                At Strata Cloud Accountants, we believe business owners deserve more than basic, retrospective compliance. You don't just need someone to reconcile your bank statement two weeks late; you deserve <strong>clarity, responsiveness, and true partnership</strong>.
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--gray-700)', marginBottom: '1.5rem' }}>
                We bridge the gap between traditional accounting and executive business coaching. By blending fractional CFO insight with daily, accurate bookkeeping, we give you the data and support you need to make critical decisions with confidence.
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--gray-700)', marginBottom: '2rem' }}>
                Our <strong>relationship-first philosophy</strong> means we are an extension of your leadership team. When you have a cash flow question, a pricing dilemma, or a hiring decision, we are right there in the trenches with you.
              </p>
              
              <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginTop: '3rem' }}>
                <div style={{ borderLeft: '4px solid var(--teal)', paddingLeft: '1.5rem' }}>
                  <h3 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--navy)', margin: 0 }}>98%</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--gray-500)', textTransform: 'uppercase', fontWeight: 600, letterSpacing: '0.05em', margin: 0 }}>Referral-Driven Growth</p>
                </div>
                <div style={{ borderLeft: '4px solid var(--gold)', paddingLeft: '1.5rem' }}>
                  <h3 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--navy)', margin: 0 }}>100%</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--gray-500)', textTransform: 'uppercase', fontWeight: 600, letterSpacing: '0.05em', margin: 0 }}>Relationship First</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MISSION & VISION ===== */}
      <section className="section" style={{ background: 'var(--off-white)', color: 'var(--navy)', padding: '6rem 0', borderTop: '1px solid var(--gray-200)', borderBottom: '1px solid var(--gray-200)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
            {/* Mission Card */}
            <div className="reveal" style={{ background: 'var(--white)', borderRadius: 'var(--radius-lg)', padding: '3rem', boxShadow: 'var(--shadow-md)', border: '1px solid var(--gray-100)', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, width: '6px', height: '100%', background: 'var(--teal)' }} />
              <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>🎯</div>
              <h3 style={{ fontSize: '1.75rem', fontFamily: 'var(--font-heading)', color: 'var(--navy)', marginBottom: '1rem', fontWeight: 700 }}>Our Mission</h3>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.6, color: 'var(--gray-600)', margin: 0 }}>
                Provide extraordinary value to service-based business owners through world-class accounting, accurate real-time financial data, and proactive executive-level strategic advisory.
              </p>
            </div>
            
            {/* Vision Card */}
            <div className="reveal" style={{ background: 'var(--white)', borderRadius: 'var(--radius-lg)', padding: '3rem', boxShadow: 'var(--shadow-md)', border: '1px solid var(--gray-100)', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, width: '6px', height: '100%', background: 'var(--gold)' }} />
              <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>🚀</div>
              <h3 style={{ fontSize: '1.75rem', fontFamily: 'var(--font-heading)', color: 'var(--navy)', marginBottom: '1rem', fontWeight: 700 }}>Our Vision</h3>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.6, color: 'var(--gray-600)', margin: 0 }}>
                Empower service founders and business owners to escape compliance-driven stress and make confident, proactive decisions backed by crystal-clear financial roadmap analytics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CORE VALUES ===== */}
      <section className="section" style={{ background: 'var(--navy-dark)', color: 'var(--white)', padding: '6rem 0' }}>
        <div className="container">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="section__title" style={{ color: 'var(--white)' }}>Our Core Values</h2>
            <p className="section__subtitle" style={{ color: 'rgba(255,255,255,0.7)', margin: '0 auto', maxWidth: '600px' }}>
              These six core tenets guide every decision we make, every client relationship we build, and every teammate we bring on board.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {values.map((v, idx) => (
              <div key={v.title} className="reveal" style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 'var(--radius-md)', padding: '2.5rem', border: '1px solid rgba(255,255,255,0.05)', transition: 'all 0.3s ease', hover: { transform: 'translateY(-5px)', borderColor: 'var(--teal)' } }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                  <span style={{ fontSize: '2.25rem' }}>{v.icon}</span>
                  <h3 style={{ fontSize: '1.35rem', fontFamily: 'var(--font-heading)', fontWeight: 700, margin: 0, color: 'var(--white)' }}>{v.title}</h3>
                </div>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>{v.description}</p>
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1rem' }}>
                  <h4 style={{ fontSize: '0.8rem', color: 'var(--teal)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem', fontWeight: 700 }}>How we live this:</h4>
                  <ul style={{ margin: 0, paddingLeft: '1.2rem', color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', lineHeight: 1.5 }}>
                    {v.behaviors.map((b, i) => (
                      <li key={i} style={{ marginBottom: '0.35rem' }}>{b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MEET THE TEAM ===== */}
      <section className="section" style={{ background: 'var(--white)', color: 'var(--navy)', padding: '6rem 0' }}>
        <div className="container">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-heading)', color: 'var(--navy)', fontWeight: 800, margin: '0 0 1rem' }}>Meet the Leadership Team</h2>
            <p style={{ color: 'var(--gray-500)', fontSize: '1.1rem', margin: '0 auto', maxWidth: '600px' }}>
              We are an collaborative team of accountants, CFOs, and advisors united by a single goal: helping your business thrive.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2.5rem' }}>
            {team.map((member) => (
              <div key={member.name} className="reveal" style={{ display: 'flex', flexDirection: 'column', background: 'var(--off-white)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid var(--gray-200)' }}>
                <div style={{
                  height: '240px',
                  background: member.gradient,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--white)',
                  fontSize: '4.5rem',
                  fontWeight: 700,
                  fontFamily: 'var(--font-heading)',
                  position: 'relative'
                }}>
                  {member.initials}
                  <div style={{ position: 'absolute', bottom: '1rem', left: '1rem', background: 'rgba(15,27,51,0.7)', backdropFilter: 'blur(4px)', padding: '0.25rem 0.75rem', borderRadius: 'var(--radius-sm)', color: 'var(--teal)', fontSize: '0.8rem', fontWeight: 700 }}>
                    {member.role}
                  </div>
                </div>
                <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <h3 style={{ fontSize: '1.35rem', fontFamily: 'var(--font-heading)', fontWeight: 700, margin: '0 0 0.75rem', color: 'var(--navy)' }}>{member.name}</h3>
                  <p style={{ color: 'var(--gray-600)', fontSize: '0.9rem', lineHeight: 1.5, margin: '0 0 1.5rem', flexGrow: 1 }}>{member.desc}</p>
                  <div style={{ fontStyle: 'italic', color: 'var(--navy-light)', fontSize: '0.85rem', borderTop: '1px solid var(--gray-200)', paddingTop: '1rem' }}>
                    {member.fun}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BOTTOM CTA ===== */}
      <section className="section section--dark" style={{ position: 'relative', overflow: 'hidden', padding: '6rem 0' }}>
        <div className="hero__glow" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 0.15 }} />
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <div className="reveal" style={{ maxWidth: '700px', margin: '0 auto' }}>
            <h2 className="section__title" style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Ready for a Relationship-First Accounting Partner?</h2>
            <p className="section__subtitle" style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.7)', marginBottom: '2.5rem' }}>
              Let\'s discuss your financial roadmap. Schedule your free 30-minute Clarity Call today and feel the difference.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn btn--primary" id="about-cta-book-call">
                📞 Book a Clarity Call
              </Link>
              <Link href="/services" className="btn btn--secondary" id="about-cta-view-services">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
