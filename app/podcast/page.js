import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Headphones, Music2, PlayCircle, Radio, Video } from 'lucide-react';
import { podcastEpisodes } from '../data/site';

export const metadata = {
  title: 'The Financial Clarity Podcast',
  description: 'Weekly insights for service-based business owners ready to lead with data, not guesswork.',
};

export default function PodcastPage() {
  return (
    <>
      <section className="hero hero--compact">
        <div className="container">
          <div className="section-head center reveal">
            <span className="eyebrow">Podcast</span>
            <h1>The Financial Clarity Podcast</h1>
            <p>
              Weekly insights for service-based business owners ready to lead with
              data, not guesswork.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <div className="grid grid--3">
            {[
              ['Spotify', Music2],
              ['Apple Podcasts', Headphones],
              ['YouTube', Video],
            ].map(([label, Icon]) => (
              <a href={label === 'YouTube' ? 'https://www.youtube.com/@stratacloudaccountants' : '#episodes'} className="card reveal" key={label}>
                <span className="icon"><Icon /></span>
                <h3>{label}</h3>
                <p>Listen, subscribe, and follow new weekly financial clarity episodes.</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="episodes" className="section">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Recent episodes</span>
            <h2>Podcast sessions built for practical owner decisions.</h2>
          </div>
          <div className="grid grid--3">
            {podcastEpisodes.map((title, index) => (
              <article className="card reveal" key={title}>
                <span className="icon"><PlayCircle /></span>
                <span className="eyebrow">Episode {index + 1}</span>
                <h3>{title}</h3>
                <p>
                  Key takeaways, show notes, transcript-ready summaries, and a clear
                  advisory CTA for owners who want to apply the episode to their business.
                </p>
                <div className="image-frame image-frame--thumb">
                  <Image
                    src={index % 2 === 0 ? '/images/financial-advisory-meeting.jpg' : '/images/accounting-workspace.jpg'}
                    alt={`${title} podcast episode artwork`}
                    width={1600}
                    height={1068}
                  />
                  <span className="play-chip"><Radio size={22} /> Episode preview</span>
                </div>
                <Link href="/contact" className="link-arrow">
                  Book a Clarity Call <ArrowRight size={17} />
                </Link>
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
            '@type': 'PodcastSeries',
            name: 'The Financial Clarity Podcast',
            description: 'Weekly insights for service-based business owners ready to lead with data, not guesswork.',
            publisher: { '@type': 'Organization', name: 'Strata Cloud Accountants' },
          }),
        }}
      />

      <section className="section section--purple cta">
        <div className="container">
          <div className="section-head center reveal">
            <span className="eyebrow">Apply the insight</span>
            <h2>Turn a useful episode into your next financial decision.</h2>
            <p>Schedule a Clarity Call to review your margins, cash forecast, or reporting cadence.</p>
          </div>
          <Link href="/contact" className="btn btn--secondary">Book a Clarity Call</Link>
        </div>
      </section>
    </>
  );
}
