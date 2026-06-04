import Link from 'next/link';
import { ArrowRight, Building2, CheckCircle2 } from 'lucide-react';
import { industries } from '../data/site';

export const metadata = {
  title: 'Industries Served',
  description: 'Financial services for professional services, health and wellness, construction, and growing service businesses.',
};

export default function IndustriesPage() {
  return (
    <>
      <section className="hero hero--compact">
        <div className="container">
          <div className="section-head center reveal">
            <span className="eyebrow">Industries served</span>
            <h1>Built for your business, not a generic accounting template.</h1>
            <p>
              Strata Cloud supports service-based businesses with bookkeeping,
              controller, forecasting, and fractional CFO guidance shaped around how
              their operations actually work.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid--3">
            {industries.map((industry) => (
              <article className="card reveal" key={industry}>
                <span className="icon"><Building2 /></span>
                <h3>{industry}</h3>
                <p>
                  Clear reporting, cash visibility, and advisory support tailored to
                  the operating realities of {industry.toLowerCase()}.
                </p>
                <Link href="/contact" className="link-arrow">
                  Connect with an expert <ArrowRight size={17} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container split">
          <div className="section-head reveal">
            <span className="eyebrow">How we help</span>
            <h2>World-class financial services with a practical operating lens.</h2>
            <p>
              Whether you need cleanup, forecasting, payroll support, or executive
              perspective, the goal is the same: better data and better decisions.
            </p>
          </div>
          <ul className="list-clean">
            {['Maintain organized financial records', 'Support growth decisions', 'Improve profitability visibility', 'Reduce financial stress'].map((item) => (
              <li className="check-item reveal" key={item}>
                <CheckCircle2 />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
