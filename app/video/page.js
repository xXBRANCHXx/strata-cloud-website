import Link from 'next/link';
import { ArrowRight, Camera, PlayCircle, Video } from 'lucide-react';

export const metadata = {
  title: 'Videos',
  description: 'Financial tips, expert perspectives, social videos, and client stories from Strata Cloud Accountants.',
};

const videos = [
  'What reports should be included monthly?',
  'Why working capital matters more than profit',
  'How to read a balance sheet without an accounting degree',
  'Scaling smart with strategic finance',
  'The Strata approach to financial clarity',
  'Featured client testimonial: Das Kauferhaus',
];

export default function VideoPage() {
  return (
    <>
      <section className="hero hero--compact">
        <div className="container">
          <div className="section-head center reveal">
            <span className="eyebrow">Videos</span>
            <h1>Learn and get inspired.</h1>
            <p>
              From podcasts to instructional videos, explore practical financial
              guidance for business owners.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid--3">
            {videos.map((title) => (
              <article className="card reveal" key={title}>
                <span className="icon"><PlayCircle /></span>
                <h3>{title}</h3>
                <p>
                  A short Strata Cloud video resource focused on useful, plain-language
                  financial clarity.
                </p>
                <Link href="/contact" className="link-arrow">
                  Discuss this topic <ArrowRight size={17} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container split">
          <div className="stack reveal">
            <span className="icon"><Video /></span>
            <span className="eyebrow">Social shorts</span>
            <h2>Tips, tricks, and expert perspectives.</h2>
            <p className="lead">
              Follow Strata Cloud for practical reminders on cash flow, KPIs,
              reporting, and owner decision-making.
            </p>
          </div>
          <a href="https://www.instagram.com/stratacloudaccountants" className="card reveal" target="_blank" rel="noreferrer">
            <span className="icon"><Camera /></span>
            <h3>Follow on Instagram</h3>
            <p>See current short-form financial guidance and team updates.</p>
          </a>
        </div>
      </section>
    </>
  );
}
