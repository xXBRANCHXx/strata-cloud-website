import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, CheckCircle2, Phone, PlayCircle } from 'lucide-react';
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
            <h1>{item.title}</h1>
            <p className="lead">{item.problem}</p>
            <div className="hero__actions">
              <Link href="/contact" className="btn btn--primary"><Phone size={18} /> Book a Clarity Call</Link>
              <Link href="/services" className="btn btn--secondary">Explore Services</Link>
            </div>
          </div>
          <div className="hero__panel reveal">
            <span className="icon"><Icon /></span>
            <h2 style={{ marginTop: 'var(--space-5)' }}>The consequence</h2>
            <p className="lead" style={{ marginTop: 'var(--space-4)' }}>{item.consequences}</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="section-head reveal">
            <span className="eyebrow">Symptoms</span>
            <h2>What this usually looks like inside the business.</h2>
          </div>
          <ul className="list-clean">
            {item.symptoms.map((symptom) => (
              <li className="check-item reveal" key={symptom}>
                <CheckCircle2 />
                <span>{symptom}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container grid grid--2">
          <article className="card reveal">
            <span className="eyebrow">Case study</span>
            <h2>A practical path to clarity.</h2>
            <p>{item.caseStudy}</p>
          </article>
          <article className="card reveal">
            <span className="icon"><PlayCircle /></span>
            <span className="eyebrow">Short video</span>
            <h2>What we would walk through.</h2>
            <p>{item.video}</p>
          </article>
        </div>
      </section>

      <section className="section section--purple cta">
        <div className="container">
          <div className="section-head center reveal">
            <span className="eyebrow">Next step</span>
            <h2>Let’s turn {item.title.toLowerCase()} into a clear plan.</h2>
            <p>Book a Clarity Call and we will identify what should happen first.</p>
          </div>
          <Link href="/contact" className="btn btn--secondary">
            Book a Clarity Call <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
