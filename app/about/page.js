import Link from 'next/link';
import { ArrowRight, CheckCircle2, Share2 } from 'lucide-react';
import { team, values } from '../data/site';

export const metadata = {
  title: 'About Us',
  description: 'The story, mission, vision, values, and team behind Strata Cloud Accountants.',
};

export default function AboutPage() {
  return (
    <>
      <section className="hero hero--compact">
        <div className="container">
          <div className="section-head center reveal">
            <span className="eyebrow">About Strata Cloud</span>
            <h1>Business owners deserve more than compliance.</h1>
            <p>
              Strata Cloud exists because owners deserve clarity, responsiveness,
              and a true financial partnership that combines coaching with accounting.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="stack reveal">
            <span className="eyebrow">Our story</span>
            <h2>Built by finance leaders who wanted accounting to feel more useful.</h2>
            <p className="lead">
              Strata Cloud Accountants started with friends and a shared dream:
              help small and medium-sized business owners make better financial decisions.
              The team’s remote-first model blends world-class service, accurate data,
              and executive-level perspective.
            </p>
            <p>
              Our relationship-first philosophy is why client trust matters so much.
              A 98% referral rate reflects more than technical work; it reflects
              consistency, care, and business owners feeling understood.
            </p>
          </div>
          <div className="grid grid--2">
            <article className="metric reveal"><strong>98%</strong><span>Referral rate</span></article>
            <article className="metric reveal"><strong>2019</strong><span>Founded</span></article>
            <article className="metric reveal"><strong>Remote</strong><span>First team</span></article>
            <article className="metric reveal"><strong>SMB</strong><span>Owner focused</span></article>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container grid grid--2">
          <article className="card reveal">
            <span className="eyebrow">Mission</span>
            <h2>Extraordinary value through accurate data and executive perspective.</h2>
            <p>
              Provide extraordinary value through world-class service, accurate
              financial data, and executive-level perspective.
            </p>
          </article>
          <article className="card reveal">
            <span className="eyebrow">Vision</span>
            <h2>Confident decisions with clear, data-driven insight.</h2>
            <p>
              Empower business owners to make confident decisions with clear,
              data-driven insight and greater financial transparency.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head center reveal">
            <span className="eyebrow">Core values</span>
            <h2>The behaviors behind the brand.</h2>
          </div>
          <div className="grid grid--3">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <article className="card reveal" key={value.title}>
                  <span className="icon"><Icon /></span>
                  <h3>{value.title}</h3>
                  <p>{value.text}</p>
                  <ul className="list-clean">
                    {value.examples.map((example) => (
                      <li className="check-item" key={example}>
                        <CheckCircle2 />
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section--lavender">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Meet the team</span>
            <h2>Professional, warm, and built around client impact.</h2>
            <p>
              The public source site identifies a remote-first team across the U.S.,
              the Philippines, and Latin America. This page keeps the focus on current
              leadership and team authority without inventing individual biographies.
            </p>
          </div>
          <div className="grid grid--4">
            {team.map((member) => (
              <article className="card reveal" key={member.name}>
                <span className="eyebrow">{member.role}</span>
                <h3>{member.name}</h3>
                <p>{member.note}</p>
                <a href={member.linkedin} className="link-arrow" target="_blank" rel="noreferrer">
                  LinkedIn <Share2 size={17} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--purple cta">
        <div className="container">
          <div className="section-head center reveal">
            <span className="eyebrow">Relationship-first advisory</span>
            <h2>Ready for a financial partner who stays close to the business?</h2>
          </div>
          <Link href="/contact" className="btn btn--secondary">
            Book a Clarity Call <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
