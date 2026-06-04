import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, CheckCircle2, Phone, PlayCircle, ShieldCheck } from 'lucide-react';
import { painPoints } from '../../data/site';

export function generateStaticParams() {
  return painPoints.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const item = painPoints.find((point) => point.slug === slug);
  return {
    title: item ? `${item.title} Solution` : 'Solutions',
    description: item?.problem,
  };
}

export default async function PainPointPage({ params }) {
  const { slug } = await params;
  const item = painPoints.find((point) => point.slug === slug);
  if (!item) notFound();
  const Icon = item.icon;

  return (
    <>
      <section className="hero hero--compact">
        <div className="container split">
          <div className="stack reveal">
            <span className="eyebrow">Solution landing page</span>
            <h1>Fix {item.title.toLowerCase()} before it makes another decision harder.</h1>
            <p className="lead">{item.problem} {item.consequences}</p>
            <div className="hero__actions">
              <Link href="/contact" className="btn btn--primary"><Phone size={18} /> Book a Clarity Call</Link>
              <Link href="#proof" className="btn btn--secondary">See the Plan</Link>
            </div>
          </div>
          <div className="hero__panel reveal">
            <span className="icon"><Icon /></span>
            <h2 className="panel-title" style={{ marginTop: 'var(--space-5)' }}>{item.outcome}</h2>
            <div className="conversion-strip" style={{ marginTop: 'var(--space-6)' }}>
              <div><strong>30 min</strong><span>First clarity call</span></div>
              <div><strong>3 steps</strong><span>Review, roadmap, rhythm</span></div>
              <div><strong>98%</strong><span>Referral rate</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="dummy-image scroll-drift reveal" data-label={`${item.title} dashboard placeholder`}>
            <span className="dummy-image__shape" />
            <span className="dummy-image__shape" />
            <span className="dummy-image__shape" />
          </div>
          <div className="stack reveal">
            <span className="eyebrow">What is really happening</span>
            <h2>This is not just an accounting problem. It is a decision problem.</h2>
            <p className="lead">{item.offer}</p>
            <ul className="list-clean">
              {item.symptoms.map((symptom) => (
                <li className="check-item" key={symptom}>
                  <CheckCircle2 />
                  <span>{symptom}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="proof" className="section section--soft">
        <div className="container">
          <div className="section-head center reveal">
            <span className="eyebrow">What you get</span>
            <h2>A focused path from uncertainty to a working financial rhythm.</h2>
            <p>
              Strata Cloud does not hand you more noise. We organize the numbers,
              clarify the tradeoffs, and help you decide what happens next.
            </p>
          </div>
          <div className="grid grid--3">
            {item.proof.map((proof) => (
              <article className="card reveal" key={proof}>
                <span className="icon"><ShieldCheck /></span>
                <h3>{proof}</h3>
                <p>Built for the owner who needs cleaner decisions, not another spreadsheet to ignore.</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid grid--2">
          <article className="card reveal">
            <span className="eyebrow">Case context</span>
            <h2>A practical path to clarity.</h2>
            <p>{item.caseStudy}</p>
            <Link href="/contact" className="link-arrow">
              Talk through your version <ArrowRight size={17} />
            </Link>
          </article>
          <article className="card reveal">
            <span className="icon"><PlayCircle /></span>
            <span className="eyebrow">Short video module</span>
            <h2>What we would walk through.</h2>
            <p>{item.video}</p>
            <div className="dummy-image" data-label="Video thumbnail placeholder" style={{ minHeight: '220px', marginTop: 'var(--space-4)' }}>
              <span className="dummy-image__shape" />
              <span className="dummy-image__shape" />
              <span className="dummy-image__shape" />
            </div>
          </article>
        </div>
      </section>

      <section className="section section--lavender">
        <div className="container split">
          <div className="section-head reveal">
            <span className="eyebrow">How the call works</span>
            <h2>No pressure. Just a sharper view of what is going on.</h2>
            <p>
              The first call is built to understand your current systems, where the
              financial friction is showing up, and whether Strata Cloud is the right
              partner to fix it.
            </p>
          </div>
          <div className="grid steps">
            {['Map the current issue', 'Identify the financial root cause', 'Recommend the right service path'].map((step) => (
              <article className="card step reveal" key={step}>
                <h3>{step}</h3>
                <p>Clear, practical, and focused on the business decision you need to make next.</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head center reveal">
            <span className="eyebrow">Common concerns</span>
            <h2>Questions owners usually ask before fixing {item.title.toLowerCase()}.</h2>
          </div>
          <div className="grid grid--2">
            {item.objections.map(([question, answer]) => (
              <article className="card reveal" key={question}>
                <h3>{question}</h3>
                <p>{answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--purple cta">
        <div className="container">
          <div className="section-head center reveal">
            <span className="eyebrow">Next step</span>
            <h2>Let’s turn {item.title.toLowerCase()} into a clear plan.</h2>
            <p>Book a Clarity Call and leave with a cleaner view of what should happen first.</p>
          </div>
          <Link href="/contact" className="btn btn--secondary">
            Book a Clarity Call <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
