import Link from 'next/link';
import { ArrowRight, HelpCircle } from 'lucide-react';

export const metadata = {
  title: 'FAQ',
  description: 'Answers to common questions about fractional CFO, controller, bookkeeping, and advisory services.',
};

const faqs = [
  {
    question: 'How do I start working with a Fractional CFO from Strata Cloud?',
    answer:
      'Start by contacting Strata Cloud through the website. We review your current financial operations, goals, and pain points, then recommend the right level of support.',
  },
  {
    question: 'When should I hire a controller?',
    answer:
      'A controller is useful when you are growing, need reliable month-end close, want stronger reporting, are considering debt or major decisions, or need confidence that cash and financial controls are stable.',
  },
  {
    question: 'What is bookkeeping?',
    answer:
      'Bookkeeping is the regular recording and organization of financial transactions. Good bookkeeping supports budgeting, taxes, reporting, and owner peace of mind.',
  },
  {
    question: 'How does fractional CFO service differ from traditional CFO services?',
    answer:
      'Fractional CFO support gives you executive-level strategy and financial perspective without hiring a full-time CFO. It is designed around the cadence and scope your business needs.',
  },
  {
    question: 'How does Strata Cloud charge for services?',
    answer:
      'Strata Cloud uses clear monthly service packages based on scope, complexity, and the level of bookkeeping, controller, and advisory support required.',
  },
];

export default function FaqPage() {
  return (
    <>
      <section className="hero hero--compact">
        <div className="container">
          <div className="section-head center reveal">
            <span className="eyebrow">FAQ</span>
            <h1>Common questions, clear answers.</h1>
            <p>Quick guidance on when to use bookkeeping, controller, and fractional CFO support.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid">
            {faqs.map((faq) => (
              <article className="card reveal" key={faq.question}>
                <span className="icon"><HelpCircle /></span>
                <h2>{faq.question}</h2>
                <p>{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: { '@type': 'Answer', text: faq.answer },
            })),
          }),
        }}
      />

      <section className="section section--purple cta">
        <div className="container">
          <div className="section-head center reveal">
            <span className="eyebrow">Still deciding?</span>
            <h2>Talk through your current financial setup.</h2>
          </div>
          <Link href="/contact" className="btn btn--secondary">
            Book a Clarity Call <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
