'use client';

import { Suspense, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Building2, Mail, MapPin, Phone, Send } from 'lucide-react';
import { company } from '../data/site';

function ContactContent() {
  const searchParams = useSearchParams();
  const initialSubject = searchParams.get('subject') || 'Book a Clarity Call';
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: initialSubject,
    message: '',
  });

  function updateField(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function submit(event) {
    event.preventDefault();
    setSubmitted(true);
    setForm({
      name: '',
      email: '',
      phone: '',
      company: '',
      subject: 'Book a Clarity Call',
      message: '',
    });
  }

  return (
    <div className="split">
      <div className="stack reveal">
        <span className="eyebrow">Connect with an expert</span>
        <h2>Tell us what feels unclear.</h2>
        <p className="lead">
          Share a few details about your business, books, cash flow, advisory needs,
          or career interest. A Strata Cloud expert will follow up shortly.
        </p>
        <div className="contact-list">
          <div className="contact-item">
            <span className="icon"><MapPin /></span>
            <div>
              <h3>Office address</h3>
              <p>{company.address}</p>
            </div>
          </div>
          <div className="contact-item">
            <span className="icon"><Phone /></span>
            <div>
              <h3>Call or text</h3>
              <p><a href={company.phoneHref}>{company.phone}</a></p>
            </div>
          </div>
          <div className="contact-item">
            <span className="icon"><Mail /></span>
            <div>
              <h3>Email</h3>
              <p><a href={company.emailHref}>{company.email}</a></p>
            </div>
          </div>
        </div>
      </div>

      <form className="form reveal" onSubmit={submit}>
        {submitted && (
          <div className="panel" style={{ padding: 'var(--space-4)', background: 'var(--purple-50)' }}>
            <strong>Message received.</strong>
            <p>Thank you. The Strata Cloud team will reach out shortly.</p>
          </div>
        )}
        <div className="form-grid">
          <label>
            Your name
            <input name="name" value={form.name} onChange={updateField} required autoComplete="name" />
          </label>
          <label>
            Email address
            <input name="email" type="email" value={form.email} onChange={updateField} required autoComplete="email" />
          </label>
        </div>
        <div className="form-grid">
          <label>
            Phone
            <input name="phone" type="tel" value={form.phone} onChange={updateField} autoComplete="tel" />
          </label>
          <label>
            Company
            <input name="company" value={form.company} onChange={updateField} autoComplete="organization" />
          </label>
        </div>
        <label>
          How can we help?
          <select name="subject" value={form.subject} onChange={updateField} required>
            <option>Book a Clarity Call</option>
            <option>Fractional CFO Services</option>
            <option>Controller Services</option>
            <option>Bookkeeping Services</option>
            <option>Careers</option>
            <option>Resources</option>
          </select>
        </label>
        <label>
          Message
          <textarea
            name="message"
            value={form.message}
            onChange={updateField}
            required
            placeholder="Tell us about your current financial operations, tools, and what you want to solve."
          />
        </label>
        <button type="submit" className="btn btn--primary">
          <Send size={18} /> Send Message
        </button>
      </form>
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
      <section className="hero hero--compact">
        <div className="container">
          <div className="section-head center reveal">
            <span className="eyebrow">Contact</span>
            <h1>Let’s start a clear financial conversation.</h1>
            <p>Ready to replace financial uncertainty with a stronger roadmap? Reach out today.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Suspense fallback={<div className="panel" style={{ padding: 'var(--space-8)' }}>Loading form...</div>}>
            <ContactContent />
          </Suspense>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <div className="band reveal">
            <div className="split">
              <div className="stack">
                <span className="eyebrow">Remote-first firm</span>
                <h2>Based in Austin, serving clients nationally.</h2>
                <p>
                  Strata Cloud supports businesses virtually with the structure,
                  responsiveness, and relationship focus owners expect from a close advisory team.
                </p>
              </div>
              <div className="card">
                <span className="icon"><Building2 /></span>
                <h3>Strata Cloud HQ</h3>
                <p>Austin, Texas, United States</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
