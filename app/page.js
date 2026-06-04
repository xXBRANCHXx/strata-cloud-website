import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, Phone } from 'lucide-react';
import { differentiators, painPoints, processSteps, resourceItems, services } from './data/site';

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container-wide hero__grid">
          <div className="hero__copy reveal">
            <span className="eyebrow">Fractional accounting and advisory</span>
            <h1>
              Financial Clarity.
              <span>Human Connection.</span>
            </h1>
            <p className="lead">
              Fractional accounting and advisory for service-based businesses ready
              to move from messy books and gut decisions to confident, data-driven growth.
            </p>
            <div className="hero__actions">
              <Link href="/contact" className="btn btn--primary">
                <Phone size={18} /> Book a Clarity Call
              </Link>
              <Link href="/services" className="btn btn--secondary">
                Explore Services <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          <div className="hero__panel hero__panel--home reveal">
            <div className="image-frame image-frame--hero scroll-drift">
              <Image
                src="/images/financial-advisory-meeting.jpg"
                alt="Financial advisors reviewing analytics on a laptop during a strategy meeting"
                width={1600}
                height={1068}
                priority
              />
              <div className="image-caption">
                <strong>Decision support</strong>
                <span>Clean reporting, sharper advisory rhythm.</span>
              </div>
            </div>
            <div className="metric-row">
              <div className="metric">
                <strong>98%</strong>
                <span>Referral rate</span>
              </div>
              <div className="metric">
                <strong>3</strong>
                <span>Core service layers</span>
              </div>
              <div className="metric">
                <strong>1</strong>
                <span>Advisory team</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head center reveal">
            <span className="eyebrow">Why Strata Cloud?</span>
            <h2>Human guidance, amplified by clean technology.</h2>
            <p>
              We do not replace humans with software. We use technology to amplify
              clarity and relationship, then pair that data with responsive advisory support.
            </p>
          </div>
          <div className="grid grid--4">
            {differentiators.map((item) => {
              const Icon = item.icon;
              return (
                <article className="card reveal" key={item.title}>
                  <span className="icon"><Icon /></span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Services</span>
            <h2>A complete financial stack for growing service businesses.</h2>
            <p>
              Bookkeeping, controller oversight, fractional CFO insight, and coaching
              work together so your numbers become a leadership tool.
            </p>
          </div>
          <div className="grid grid--4">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article className="card reveal" key={service.id}>
                  <span className="icon"><Icon /></span>
                  <h3>{service.shortTitle}</h3>
                  <p>{service.summary}</p>
                  <Link href={service.href} className="link-arrow">
                    Learn more <ArrowRight size={17} />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="stack reveal">
            <span className="eyebrow">How it works</span>
            <h2>Clear and simple, with an operating rhythm that sticks.</h2>
            <p className="lead">
              We meet you where you are, identify what is creating noise, and install
              the structure needed for consistent reporting and better decisions.
            </p>
            <Link href="/contact" className="btn btn--primary">
              Start the Process <ArrowRight size={18} />
            </Link>
          </div>
          <div className="grid steps">
            {processSteps.map((step) => (
              <article className="card step reveal" key={step.title}>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--lavender">
        <div className="container">
          <div className="section-head center reveal">
            <span className="eyebrow">Pain-point funnels</span>
            <h2>Start with the problem that is slowing you down.</h2>
            <p>
              Each landing page is built around a real owner concern: symptoms,
              consequences, practical case context, and a direct path to a Clarity Call.
            </p>
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
                    View solution <ArrowRight size={17} />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="band reveal">
            <div className="stack">
              <span className="eyebrow">Premium partners</span>
              <h2>We work with your software.</h2>
              <p>
                We build around the platforms you already use: QuickBooks, Bill.com,
                Expensify, Xero, reporting tools, and the operational systems that
                shape your financial workflow.
              </p>
            </div>
          </div>
          <div className="grid grid--2">
            {['QuickBooks', 'Bill.com', 'Expensify', 'Xero', 'Fathom', 'Power BI'].map((tool) => (
              <div className="card reveal" key={tool}>
                <CheckCircle2 size={22} color="var(--purple-700)" />
                <h3>{tool}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Resources</span>
            <h2>Insights to help you lead with data.</h2>
          </div>
          <div className="grid grid--4">
            {resourceItems.map((item) => {
              const Icon = item.icon;
              return (
                <article className="card reveal" key={item.title}>
                  <span className="icon"><Icon /></span>
                  <span className="eyebrow">{item.type}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <Link href={item.href || '/resources'} className="link-arrow">
                    Read more <ArrowRight size={17} />
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
            <span className="eyebrow">Connect with an expert</span>
            <h2>Ready to replace uncertainty with a financial roadmap?</h2>
            <p>
              Tell us where your financial operations feel unclear. We will help you
              identify the right next step.
            </p>
          </div>
          <div className="hero__actions" style={{ justifyContent: 'center' }}>
            <Link href="/contact" className="btn btn--secondary">
              Book a Clarity Call
            </Link>
            <Link href="/services" className="btn btn--ghost">
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
