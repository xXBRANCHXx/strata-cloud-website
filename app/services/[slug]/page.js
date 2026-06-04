import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, CheckCircle2, Phone } from 'lucide-react';
import { services } from '../../data/site';

const slugMap = {
  bookkeeping: 'bookkeeping',
  controller: 'controller',
  cfo: 'fractional-cfo',
};

export function generateStaticParams() {
  return Object.keys(slugMap).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = services.find((item) => item.id === slugMap[slug]);
  return {
    title: service ? service.title : 'Services',
    description: service?.summary,
  };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = services.find((item) => item.id === slugMap[slug]);
  if (!service) notFound();
  const Icon = service.icon;

  return (
    <>
      <section className="hero hero--compact">
        <div className="container split">
          <div className="stack reveal">
            <span className="eyebrow">{service.shortTitle}</span>
            <h1>{service.title}</h1>
            <p className="lead">{service.details}</p>
            <div className="hero__actions">
              <Link href="/contact" className="btn btn--primary"><Phone size={18} /> Book a Clarity Call</Link>
              <Link href="/services" className="btn btn--secondary">All Services</Link>
            </div>
          </div>
          <div className="hero__panel reveal">
            <span className="icon"><Icon /></span>
            <h2 style={{ marginTop: 'var(--space-5)' }}>{service.shortTitle} outcomes</h2>
            <p className="lead" style={{ marginTop: 'var(--space-4)' }}>{service.summary}</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="section-head reveal">
            <span className="eyebrow">What is included</span>
            <h2>Structured support with clear deliverables.</h2>
            <p>
              Every engagement is tailored, but the foundation stays consistent:
              clean data, dependable cadence, and guidance that helps owners act.
            </p>
          </div>
          <ul className="list-clean">
            {service.bullets.map((bullet) => (
              <li className="check-item reveal" key={bullet}>
                <CheckCircle2 />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <div className="grid grid--3">
            {['Problem review', 'Roadmap build', 'Ongoing rhythm'].map((title, index) => (
              <article className="card step reveal" key={title}>
                <h3>{title}</h3>
                <p>
                  {index === 0 &&
                    'We review your current systems, books, reporting cadence, and decision pain points.'}
                  {index === 1 &&
                    'We define the right financial workflow, reporting package, and communication cadence.'}
                  {index === 2 &&
                    'We keep the work moving with recurring close, reporting, and advisory conversations.'}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--purple cta">
        <div className="container">
          <div className="section-head center reveal">
            <span className="eyebrow">Start here</span>
            <h2>Ready to talk through {service.shortTitle.toLowerCase()}?</h2>
            <p>Schedule a Clarity Call and we will identify the cleanest next step.</p>
          </div>
          <Link href="/contact" className="btn btn--secondary">
            Book a Clarity Call <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
