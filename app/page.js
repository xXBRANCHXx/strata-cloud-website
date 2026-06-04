'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function HomePage() {
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

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="hero" id="hero">
        <div className="hero__bg-pattern" />
        <div className="hero__glow" />
        <div className="hero__glow hero__glow--secondary" />

        <div className="hero__content">
          <div className="hero__text">
            <h1 className="animate-fadeInUp">
              Financial Clarity.
              <span>Human Connection.</span>
            </h1>
            <p className="hero__subtitle animate-fadeInUp animate-delay-1">
              Fractional accounting and advisory for service-based businesses
              ready to move from messy books and gut decisions to confident,
              data-driven growth.
            </p>
            <div className="hero__buttons animate-fadeInUp animate-delay-2">
              <Link href="/contact" className="btn btn--primary btn--lg" id="hero-cta-book">
                📞 Book a Clarity Call
              </Link>
              <Link href="/services" className="btn btn--secondary btn--lg" id="hero-cta-services">
                Explore Services →
              </Link>
            </div>

            <div className="hero__stats animate-fadeInUp animate-delay-3">
              <div className="hero__stat">
                <div className="hero__stat-value">98%</div>
                <div className="hero__stat-label">Referral Rate</div>
              </div>
              <div className="hero__stat">
                <div className="hero__stat-value">150+</div>
                <div className="hero__stat-label">Clients Served</div>
              </div>
              <div className="hero__stat">
                <div className="hero__stat-value">5+</div>
                <div className="hero__stat-label">Years of Excellence</div>
              </div>
            </div>
          </div>

          <div className="hero__visual">
            <div className="hero__image-wrapper animate-float">
              <div style={{
                width: '420px',
                height: '420px',
                borderRadius: '30px',
                background: 'linear-gradient(135deg, rgba(46,196,182,0.08), rgba(46,196,182,0.02))',
                border: '1px solid rgba(46,196,182,0.15)',
                backdropFilter: 'blur(10px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '3rem',
              }}>
                <Image
                  src="/images/logo.png"
                  alt="Strata Cloud Accountants"
                  width={350}
                  height={150}
                  style={{ width: '100%', height: 'auto', filter: 'brightness(2)' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY STRATA CLOUD ===== */}
      <section className="section" id="why-strata">
        <div className="container">
          <div className="section-header reveal" style={{ opacity: 0 }}>
            <span className="section-header__badge">Why Choose Us</span>
            <h2 className="section-header__title">Why Strata Cloud?</h2>
            <p className="section-header__subtitle">
              We don&rsquo;t replace humans with software. We use technology to amplify
              clarity and relationship.
            </p>
          </div>

          <div className="differentiator">
            <ul className="differentiator__list reveal" style={{ opacity: 0 }}>
              <li className="differentiator__item">
                <span className="differentiator__check">✓</span>
                <div>
                  <div className="differentiator__item-title">98% Referral Rate</div>
                  <p className="differentiator__item-text">
                    Our clients love us enough to send their peers. That trust is earned
                    through consistent results and genuine care.
                  </p>
                </div>
              </li>
              <li className="differentiator__item">
                <span className="differentiator__check">✓</span>
                <div>
                  <div className="differentiator__item-title">Fast Response Times</div>
                  <p className="differentiator__item-text">
                    No waiting days for answers. We pride ourselves on being responsive
                    and accessible when you need us most.
                  </p>
                </div>
              </li>
              <li className="differentiator__item">
                <span className="differentiator__check">✓</span>
                <div>
                  <div className="differentiator__item-title">Executive-Level Insight</div>
                  <p className="differentiator__item-text">
                    Get CFO-caliber financial strategy without the full-time executive
                    cost. Smart guidance at a fraction of the price.
                  </p>
                </div>
              </li>
              <li className="differentiator__item">
                <span className="differentiator__check">✓</span>
                <div>
                  <div className="differentiator__item-title">Coaching + Accounting</div>
                  <p className="differentiator__item-text">
                    A rare combination. We don&rsquo;t just crunch numbers—we coach you to
                    understand them and make confident decisions.
                  </p>
                </div>
              </li>
            </ul>

            <div className="reveal" style={{ opacity: 0 }}>
              <div style={{
                background: 'var(--gradient-navy)',
                borderRadius: 'var(--radius-lg)',
                padding: '3rem',
                color: 'white',
                position: 'relative',
                overflow: 'hidden',
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-50%',
                  right: '-20%',
                  width: '300px',
                  height: '300px',
                  background: 'radial-gradient(circle, rgba(46,196,182,0.15), transparent 70%)',
                  borderRadius: '50%',
                }} />
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <h3 style={{ color: 'var(--teal)', marginBottom: '1.5rem', fontSize: '1.5rem' }}>
                    Our Philosophy
                  </h3>
                  <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                    &ldquo;Business owners deserve more than compliance. They deserve
                    clarity, responsiveness, and partnership.&rdquo;
                  </p>
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>
                    We provide extraordinary value through world-class service, accurate
                    financial data, and executive-level perspective—empowering you to make
                    confident decisions with clear, data-driven insight.
                  </p>
                  <Link href="/about" className="btn btn--primary" style={{ marginTop: '1.5rem' }}>
                    Learn Our Story →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="section section--dark" id="how-it-works">
        <div className="container">
          <div className="section-header reveal" style={{ opacity: 0 }}>
            <span className="section-header__badge">Our Process</span>
            <h2 className="section-header__title">How It Works</h2>
            <p className="section-header__subtitle">
              A simple, structured approach to financial clarity. We meet you where
              you are and guide you where you want to go.
            </p>
          </div>

          <div className="process reveal" style={{ opacity: 0 }}>
            <div className="process__step">
              <div className="process__number">1</div>
              <h3 className="process__step-title" style={{ color: 'var(--white)' }}>
                Assess Your Finances
              </h3>
              <p className="process__step-text">
                We deep-dive into your current financial state—your books, systems,
                processes, and pain points—to understand exactly where things stand.
              </p>
              <div className="process__connector" />
            </div>

            <div className="process__step">
              <div className="process__number">2</div>
              <h3 className="process__step-title" style={{ color: 'var(--white)' }}>
                Define Your Goals
              </h3>
              <p className="process__step-text">
                We work with you to establish business objectives, financial targets,
                and a long-term growth strategy—giving you a roadmap to profitability.
              </p>
              <div className="process__connector" />
            </div>

            <div className="process__step">
              <div className="process__number">3</div>
              <h3 className="process__step-title" style={{ color: 'var(--white)' }}>
                Build Your Roadmap
              </h3>
              <p className="process__step-text">
                With expertise in accounting, bookkeeping, and CFO services, we provide
                ongoing insights, accurate reporting, and strategic guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES OVERVIEW ===== */}
      <section className="section" id="services-overview">
        <div className="container">
          <div className="section-header reveal" style={{ opacity: 0 }}>
            <span className="section-header__badge">What We Do</span>
            <h2 className="section-header__title">Our Services</h2>
            <p className="section-header__subtitle">
              Comprehensive financial solutions tailored to service-based businesses
              at every stage of growth.
            </p>
          </div>

          <div className="grid grid--3 reveal" style={{ opacity: 0 }}>
            {[
              {
                icon: '📊',
                title: 'Fractional CFO',
                text: 'Executive-level financial strategy and leadership without the full-time cost. Strategic planning, forecasting, and financial decision support.',
              },
              {
                icon: '📒',
                title: 'Accounting & Bookkeeping',
                text: 'Accurate, timely financial data you can trust. Monthly close, reconciliations, payroll, and financial reporting that brings clarity.',
              },
              {
                icon: '🎯',
                title: 'Advisory Services',
                text: 'Proactive guidance that goes beyond the numbers. Business coaching, KPI development, and strategic financial insights.',
              },
              {
                icon: '💰',
                title: 'Cash Flow Management',
                text: 'Take control of your cash flow with forecasting, receivables optimization, and working capital strategies that keep you growing.',
              },
              {
                icon: '📈',
                title: 'Controller Services',
                text: 'Professional oversight of your financial operations. Internal controls, compliance, and financial process improvement.',
              },
              {
                icon: '🔍',
                title: 'Financial Dashboards',
                text: 'Real-time visibility into your business performance. Custom dashboards and reporting that make data actionable and clear.',
              },
            ].map((service, i) => (
              <div className="card" key={i}>
                <div className="card__icon">{service.icon}</div>
                <h3 className="card__title">{service.title}</h3>
                <p className="card__text">{service.text}</p>
                <Link
                  href="/services"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    marginTop: '1rem',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    fontFamily: 'var(--font-heading)',
                    color: 'var(--teal)',
                  }}
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SOFTWARE PARTNERS ===== */}
      <section className="section section--light" id="partners">
        <div className="container">
          <div className="section-header reveal" style={{ opacity: 0 }}>
            <span className="section-header__badge">Premium Partners</span>
            <h2 className="section-header__title">We Work With Your Software</h2>
            <p className="section-header__subtitle">
              Seamless integration with the platforms you already use and trust.
            </p>
          </div>

          <div className="partners reveal" style={{ opacity: 0, display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap', alignItems: 'center' }}>
            {['QuickBooks', 'Bill.com', 'Expensify', 'Ramp', 'BuilderTrend', 'Restaurant365'].map((partner, i) => (
              <div
                key={i}
                style={{
                  padding: '1.25rem 2rem',
                  background: 'var(--white)',
                  borderRadius: 'var(--radius-md)',
                  boxShadow: 'var(--shadow-sm)',
                  border: '1px solid var(--gray-100)',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 600,
                  fontSize: '1rem',
                  color: 'var(--gray-400)',
                  transition: 'all 0.3s ease',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = 'var(--teal)';
                  e.target.style.borderColor = 'rgba(46,196,182,0.3)';
                  e.target.style.transform = 'translateY(-3px)';
                  e.target.style.boxShadow = 'var(--shadow-md)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = 'var(--gray-400)';
                  e.target.style.borderColor = 'var(--gray-100)';
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'var(--shadow-sm)';
                }}
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS / SOCIAL PROOF ===== */}
      <section className="section" id="testimonials">
        <div className="container">
          <div className="section-header reveal" style={{ opacity: 0 }}>
            <span className="section-header__badge">Client Stories</span>
            <h2 className="section-header__title">Trusted by Business Owners</h2>
            <p className="section-header__subtitle">
              Don&rsquo;t just take our word for it. Here&rsquo;s what our clients have to say about
              working with Strata Cloud.
            </p>
          </div>

          <div className="grid grid--2 reveal" style={{ opacity: 0 }}>
            <div className="testimonial">
              <p className="testimonial__text">
                Strata Cloud transformed our financial operations. We went from dreading
                month-end to actually looking forward to our financial reviews. Their
                team truly cares about our success.
              </p>
              <div className="testimonial__author">Sarah M.</div>
              <div className="testimonial__company">Service-Based Business Owner</div>
            </div>
            <div className="testimonial">
              <p className="testimonial__text">
                Having a fractional CFO from Strata Cloud gave us the executive-level
                insight we needed without the executive-level price tag. Game changer
                for our growth trajectory.
              </p>
              <div className="testimonial__author">James R.</div>
              <div className="testimonial__company">Construction Company CEO</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONNECT CTA ===== */}
      <section className="section section--dark" id="connect-cta" style={{ paddingBottom: '6rem' }}>
        <div className="container">
          <div style={{
            textAlign: 'center',
            maxWidth: '700px',
            margin: '0 auto',
          }}
          className="reveal"
          >
            <span className="section-header__badge" style={{ opacity: 0.9 }}>Get Started</span>
            <h2 style={{ color: 'var(--white)', marginBottom: '1.5rem' }}>
              Connect with an Expert
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.15rem', lineHeight: 1.8, marginBottom: '2rem' }}>
              Having accurate, timely, understandable and actionable financial data can
              be a weight off your shoulders. Tell us about your business and an expert
              will reach out to connect with you.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn btn--primary btn--lg" id="cta-book-call">
                📞 Book a Clarity Call
              </Link>
              <Link href="/resources" className="btn btn--secondary btn--lg" id="cta-resources">
                Browse Resources →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BLOG PREVIEW ===== */}
      <section className="section" id="blog-preview">
        <div className="container">
          <div className="section-header reveal" style={{ opacity: 0 }}>
            <span className="section-header__badge">From Our Blog</span>
            <h2 className="section-header__title">News &amp; Articles</h2>
            <p className="section-header__subtitle">
              Tips and insights to help you better navigate your business finances.
            </p>
          </div>

          <div className="grid grid--3 reveal" style={{ opacity: 0 }}>
            {[
              {
                title: 'Is a Fractional CFO Worth It?',
                date: 'May 28, 2026',
                excerpt: 'Discover how a fractional CFO can deliver executive-level financial strategy at a fraction of the cost of a full-time hire.',
              },
              {
                title: 'What Do CFO Services Include?',
                date: 'May 28, 2026',
                excerpt: 'A comprehensive look at the range of services a fractional CFO provides and how they can transform your business finances.',
              },
              {
                title: 'What Services Does a Fractional CFO Provide?',
                date: 'May 28, 2026',
                excerpt: 'From financial forecasting to strategic planning, learn about the full scope of fractional CFO services available to your business.',
              },
            ].map((post, i) => (
              <div className="card" key={i}>
                <div style={{
                  height: '180px',
                  background: `linear-gradient(135deg, var(--navy) 0%, hsl(${210 + i * 15}, 50%, ${20 + i * 5}%) 100%)`,
                  borderRadius: 'var(--radius-md)',
                  marginBottom: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--teal)',
                  fontSize: '3rem',
                }}>
                  📄
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--teal)', fontWeight: 600, marginBottom: '0.5rem' }}>
                  {post.date}
                </div>
                <h3 className="card__title" style={{ fontSize: '1.15rem' }}>{post.title}</h3>
                <p className="card__text">{post.excerpt}</p>
                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginTop: '0.5rem',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  fontFamily: 'var(--font-heading)',
                  color: 'var(--teal)',
                  cursor: 'pointer',
                }}>
                  Read More →
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
