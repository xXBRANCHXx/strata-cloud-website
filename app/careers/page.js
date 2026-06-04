'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ArrowRight, CheckCircle2, XCircle } from 'lucide-react';
import { careersThemes } from '../data/site';

export default function CareersPage() {
  const [mode, setMode] = useState('thrive');

  const roles = [
    'Senior Client Advisor / Fractional CFO',
    'Senior Accountant',
    'Advisory Operations Specialist',
  ];

  return (
    <>
      <section className="hero hero--compact">
        <div className="container">
          <div className="section-head center reveal">
            <span className="eyebrow">Careers</span>
            <h1>Build a career where clarity and humanity coexist.</h1>
            <p>
              Join a fractional accounting firm that values trust, accountability,
              autonomy, and real client impact.
            </p>
            <div className="hero__actions" style={{ justifyContent: 'center' }}>
              <Link href="#open-roles" className="btn btn--primary">View Open Roles</Link>
              <Link href="#fit-check" className="btn btn--secondary">Is Strata Cloud Right for You?</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head center reveal">
            <span className="eyebrow">The Strata Cloud difference</span>
            <h2>Meaningful work with enough structure to do it well.</h2>
          </div>
          <div className="grid grid--5 grid--4">
            {careersThemes.map((theme) => {
              const Icon = theme.icon;
              return (
                <article className="card reveal" key={theme.title}>
                  <span className="icon"><Icon /></span>
                  <h3>{theme.title}</h3>
                  <p>{theme.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">What makes us different</span>
            <h2>Different from traditional firms by design.</h2>
          </div>
          <div className="table-wrap reveal">
            <table>
              <thead>
                <tr>
                  <th>Typical Accounting Firm</th>
                  <th>Strata Cloud</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Task-focused', 'Relationship-first advisory'],
                  ['Transactional', 'Coaching-driven'],
                  ['Hierarchical', 'Trust-based autonomy'],
                  ['Back-office', 'Executive table presence'],
                ].map(([typical, strata]) => (
                  <tr key={typical}>
                    <td>{typical}</td>
                    <td>{strata}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="fit-check" className="section">
        <div className="container">
          <div className="section-head center reveal">
            <span className="eyebrow">Fit check</span>
            <h2>Decide whether the way we work matches how you do your best work.</h2>
          </div>
          <div className="panel reveal" style={{ padding: 'var(--space-8)' }}>
            <div className="hero__actions" style={{ marginBottom: 'var(--space-8)' }}>
              <button className={`btn ${mode === 'thrive' ? 'btn--primary' : 'btn--secondary'}`} onClick={() => setMode('thrive')}>
                You will thrive here if
              </button>
              <button className={`btn ${mode === 'struggle' ? 'btn--primary' : 'btn--secondary'}`} onClick={() => setMode('struggle')}>
                You may struggle here if
              </button>
            </div>
            <ul className="list-clean">
              {(mode === 'thrive'
                ? ['You value transparency', 'You enjoy teaching clients', 'You take ownership', 'You like autonomy']
                : ['You prefer heavy micromanagement', 'You avoid accountability', 'You want purely transactional work', 'You dislike direct feedback']
              ).map((item) => (
                <li className="check-item" key={item}>
                  {mode === 'thrive' ? <CheckCircle2 /> : <XCircle />}
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section--lavender">
        <div className="container split">
          <div className="stack reveal">
            <span className="eyebrow">Growth philosophy</span>
            <h2>Growth means expanded responsibility and advisory confidence.</h2>
            <p className="lead">
              Team growth at Strata Cloud is not just a title ladder. It is exposure to
              executive conversations, stronger advisory judgment, clearer ownership,
              and the confidence to help owners understand what their numbers mean.
            </p>
          </div>
          <div className="grid">
            {['Executive conversation exposure', 'Advisory skill development', 'Client-facing confidence'].map((item) => (
              <article className="card reveal" key={item}>
                <CheckCircle2 size={22} color="var(--purple-700)" />
                <h3>{item}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="open-roles" className="section">
        <div className="container">
          <div className="section-head center reveal">
            <span className="eyebrow">Open roles</span>
            <h2>Simple, frictionless application flow.</h2>
            <p>
              Open roles, culture alignment, and a short application start through
              the contact form so the talent pipeline is easy to manage.
            </p>
          </div>
          <div className="grid grid--3">
            {roles.map((role) => (
              <article className="card reveal" key={role}>
                <h3>{role}</h3>
                <p>Remote role for a client-focused finance professional who wants meaningful advisory impact.</p>
                <Link href="/contact?subject=Careers" className="link-arrow">
                  Apply now <ArrowRight size={17} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
