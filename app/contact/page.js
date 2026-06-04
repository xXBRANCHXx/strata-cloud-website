'use client';

import { useState, useEffect, useRef, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function ContactFormContent() {
  const searchParams = useSearchParams();
  const observerRef = useRef(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: 'General Inquiry',
    message: '',
  });

  useEffect(() => {
    const subjectParam = searchParams.get('subject');
    if (subjectParam) {
      setFormData((prev) => ({ ...prev, subject: subjectParam }));
    }
  }, [searchParams]);

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been received. We will reach out shortly.`);
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      subject: 'General Inquiry',
      message: '',
    });
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'start' }}>
      {/* Left Column: Contact details */}
      <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <div>
          <h2 style={{ fontSize: '2.25rem', fontFamily: 'var(--font-heading)', color: 'var(--navy)', fontWeight: 800, marginBottom: '1.25rem' }}>
            Connect with an Expert
          </h2>
          <p style={{ color: 'var(--gray-600)', fontSize: '1.05rem', lineHeight: '1.7', margin: 0 }}>
            Have a question about our fractional CFO packages, custom KPI dashboards, or cleanup services? Or looking to join our growing, remote-first team? Reach out and we\'ll get back to you within one business day.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', borderTop: '1px solid var(--gray-200)', paddingTop: '2rem' }}>
          {/* Office Address */}
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
            <span style={{ fontSize: '1.75rem' }}>📍</span>
            <div>
              <h4 style={{ margin: '0 0 0.25rem', color: 'var(--navy)', fontWeight: 700, fontSize: '1.05rem' }}>Office Address</h4>
              <p style={{ margin: 0, color: 'var(--gray-600)', fontSize: '0.95rem', lineHeight: 1.4 }}>
                6001 W Parmer Lane<br />
                STE 370 Box 1016<br />
                Austin, Texas 78727
              </p>
            </div>
          </div>

          {/* Phone */}
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
            <span style={{ fontSize: '1.75rem' }}>📞</span>
            <div>
              <h4 style={{ margin: '0 0 0.25rem', color: 'var(--navy)', fontWeight: 700, fontSize: '1.05rem' }}>Call or Text</h4>
              <p style={{ margin: 0, color: 'var(--gray-600)', fontSize: '0.95rem' }}>
                <a href="tel:6302746057" style={{ color: 'var(--navy-light)', textDecoration: 'none', fontWeight: 600 }}>
                  (630) 274-6057
                </a>
              </p>
            </div>
          </div>

          {/* Email */}
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
            <span style={{ fontSize: '1.75rem' }}>✉️</span>
            <div>
              <h4 style={{ margin: '0 0 0.25rem', color: 'var(--navy)', fontWeight: 700, fontSize: '1.05rem' }}>Email</h4>
              <p style={{ margin: 0, color: 'var(--gray-600)', fontSize: '0.95rem' }}>
                <a href="mailto:info@stratacloudaccountants.com" style={{ color: 'var(--teal)', fontWeight: 600 }}>
                  info@stratacloudaccountants.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Contact form */}
      <div className="reveal">
        <form onSubmit={handleSubmit} className="contact-form" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div className="form__group">
              <label htmlFor="name" className="form__label">Your Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="form__input"
                placeholder="Kim"
              />
            </div>
            <div className="form__group">
              <label htmlFor="email" className="form__label">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="form__input"
                placeholder="kim@example.com"
              />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div className="form__group">
              <label htmlFor="phone" className="form__label">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="form__input"
                placeholder="(630) 274-6057"
              />
            </div>
            <div className="form__group">
              <label htmlFor="company" className="form__label">Company Name</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="form__input"
                placeholder="Strata Cloud Inc."
              />
            </div>
          </div>

          <div className="form__group">
            <label htmlFor="subject" className="form__label">How Can We Help? *</label>
            <select
              id="subject"
              name="subject"
              required
              value={formData.subject}
              onChange={handleChange}
              className="form__input"
              style={{ background: 'var(--gray-50)', cursor: 'pointer' }}
            >
              <option value="General Inquiry">General Inquiry / Message</option>
              <option value="Fractional CFO & Advisory">Fractional CFO & Advisory Services</option>
              <option value="Accounting & Cleanups">Accounting & Ledger Cleanups</option>
              <option value="Bookkeeping">Monthly Reconciliations & Bookkeeping</option>
              <option value="Careers">Careers / Join the Team</option>
            </select>
          </div>

          <div className="form__group">
            <label htmlFor="message" className="form__label">Message / Details *</label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="form__textarea"
              placeholder="Tell us a bit about your business, current tools, and what you are looking to solve..."
            />
          </div>

          <button type="submit" className="btn btn--primary" style={{ width: '100%', padding: '1rem' }} id="contact-submit-btn">
            ✉️ Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default function ContactPage() {
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
              Get in Touch
            </span>
            <h1 className="animate-fadeInUp" style={{ fontSize: '3.5rem', lineHeight: 1.1 }}>
              Let\'s Start a <span>Conversation</span>
            </h1>
            <p className="hero__subtitle animate-fadeInUp animate-delay-1" style={{ margin: '1.5rem auto 0', fontSize: '1.25rem', color: 'rgba(255,255,255,0.8)' }}>
              Ready to replace financial uncertainty with a clear roadmap? Reach out today.
            </p>
          </div>
        </div>
      </section>

      {/* ===== CONTACT FORM SECTION ===== */}
      <section className="section" style={{ background: 'var(--white)', color: 'var(--navy)', padding: '6rem 0' }}>
        <div className="container">
          <Suspense fallback={<div style={{ textAlign: 'center', padding: '3rem', color: 'var(--navy)' }}>Loading Form...</div>}>
            <ContactFormContent />
          </Suspense>
        </div>
      </section>

      {/* ===== MAP ILLUSTRATION SECTION ===== */}
      <section className="section" style={{ background: 'var(--off-white)', padding: '6rem 0', borderTop: '1px solid var(--gray-200)' }}>
        <div className="container">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-heading)', color: 'var(--navy)', fontWeight: 800 }}>
              Based in Austin, Texas. Serving Clients Nationally.
            </h2>
            <p style={{ color: 'var(--gray-500)', fontSize: '1.1rem', marginTop: '0.5rem' }}>
              We operate fully remote, with our headquarters centered in the vibrant tech corridor of Austin.
            </p>
          </div>

          {/* Styled Mock Map Illustration */}
          <div className="reveal" style={{
            height: '350px',
            background: 'linear-gradient(135deg, #1B2A4A 0%, #0F1B33 100%)',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--gray-200)',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: 'var(--shadow-md)'
          }}>
            {/* Grid Pattern */}
            <div style={{
              position: 'absolute',
              top: 0, left: 0, right: 0, bottom: 0,
              backgroundImage: 'radial-gradient(rgba(46, 196, 182, 0.15) 1px, transparent 1px)',
              backgroundSize: '24px 24px',
              opacity: 0.8
            }} />

            {/* Glowing Rings (Pulse effect mockup) */}
            <div style={{
              position: 'absolute',
              width: '200px', height: '200px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(46,196,182,0.1) 0%, transparent 70%)',
              animation: 'pulse 4s infinite'
            }} />

            {/* Center Map pin */}
            <div style={{
              position: 'relative',
              zIndex: 2,
              textAlign: 'center',
              color: 'var(--white)'
            }}>
              <span style={{ fontSize: '3rem', display: 'block', animation: 'bounce 2s infinite' }}>📍</span>
              <h3 style={{ margin: '1rem 0 0.25rem', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.25rem' }}>Strata Cloud HQ</h3>
              <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--teal)', fontWeight: 600 }}>Austin, TX (USA)</p>
            </div>
            
            <style jsx>{`
              @keyframes bounce {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-10px); }
              }
            `}</style>
          </div>
        </div>
      </section>
    </>
  );
}
