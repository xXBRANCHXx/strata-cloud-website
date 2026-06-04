import Link from 'next/link';
import { ArrowRight, CheckCircle2, Phone } from 'lucide-react';
import { painPoints, services } from '../data/site';

export const metadata = {
  title: 'Services',
  description: 'Bookkeeping, controller, fractional CFO, and advisory services for service-based businesses.',
};

export default function ServicesPage() {
  return (
    <>
      <section className="hero hero--compact">
        <div className="container">
          <div className="section-head center reveal">
            <span className="eyebrow">Services</span>
            <h1>Financial services that turn numbers into growth decisions.</h1>
            <p>
              From cleanup and bookkeeping to controller oversight and fractional CFO
              strategy, Strata Cloud builds the financial operating system your
              service business needs.
            </p>
            <div className="hero__actions" style={{ justifyContent: 'center' }}>
              <Link href="/contact" className="btn btn--primary"><Phone size={18} /> Book a Clarity Call</Link>
              <Link href="#services" className="btn btn--secondary">Compare Services</Link>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section">
        <div className="container">
          <div className="grid">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article className="panel split reveal" id={service.id} key={service.id} style={{ padding: 'var(--space-10)' }}>
                  <div className="stack">
                    <span className="icon"><Icon /></span>
                    <span className="eyebrow">{service.shortTitle}</span>
                    <h2>{service.title}</h2>
                    <p className="lead">{service.details}</p>
                    <Link href={service.href} className="btn btn--primary">
                      Explore {service.shortTitle} <ArrowRight size={18} />
                    </Link>
                  </div>
                  <ul className="list-clean">
                    {service.bullets.map((bullet) => (
                      <li className="check-item" key={bullet}>
                        <CheckCircle2 />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <div className="section-head center reveal">
            <span className="eyebrow">Pain-point landing pages</span>
            <h2>Choose the challenge you need solved first.</h2>
          </div>
          <div className="grid grid--3">
            {painPoints.map((item) => {
              const Icon = item.icon;
              return (
                <article className="card reveal" key={item.slug}>
                  <span className="icon"><Icon /></span>
                  <h3>{item.title}</h3>
                  <p>{item.problem}</p>
                  <Link href={`/solutions/${item.slug}`} className="link-arrow">
                    View landing page <ArrowRight size={17} />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section--purple cta">
        <div className="container">
          <div className="section-head center reveal">
            <span className="eyebrow">Clear next step</span>
            <h2>Not sure which service level fits?</h2>
            <p>Book a Clarity Call and we will map the right support level to your current stage.</p>
          </div>
          <Link href="/contact" className="btn btn--secondary">Book a Clarity Call</Link>
        </div>
      </section>
    </>
  );
}
