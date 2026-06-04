import Image from 'next/image';
import Link from 'next/link';
import { Camera, Mail, MapPin, Phone, PlayCircle, Share2 } from 'lucide-react';
import { company, painPoints, services } from '../data/site';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container-wide">
        <div className="footer__grid">
          <div className="footer__brand">
            <Image src="/images/logo.png" alt="Strata Cloud Accountants" width={190} height={81} />
            <h3>{company.tagline}</h3>
            <p>
              Fractional accounting and advisory for service-based businesses ready to
              move from messy books and gut decisions to confident, data-driven growth.
            </p>
            <div className="footer__social">
              <a href={company.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer">
                <Share2 size={18} />
              </a>
              <a href={company.facebook} aria-label="Facebook" target="_blank" rel="noreferrer">
                <Share2 size={18} />
              </a>
              <a href={company.instagram} aria-label="Instagram" target="_blank" rel="noreferrer">
                <Camera size={18} />
              </a>
              <a href={company.youtube} aria-label="YouTube" target="_blank" rel="noreferrer">
                <PlayCircle size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4>Company</h4>
            <ul className="footer__links">
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/industries-served">Industries Served</Link></li>
              <li><Link href="/podcast">Podcast</Link></li>
              <li><Link href="/resources">Resources</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
              <li><Link href="/video">Videos</Link></li>
            </ul>
          </div>

          <div>
            <h4>Services</h4>
            <ul className="footer__links">
              {services.slice(0, 3).map((service) => (
                <li key={service.id}>
                  <Link href={service.href}>{service.title}</Link>
                </li>
              ))}
              {painPoints.slice(0, 3).map((item) => (
                <li key={item.slug}>
                  <Link href={`/solutions/${item.slug}`}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Contact</h4>
            <ul className="footer__links">
              <li>
                <a href={company.phoneHref}><Phone size={16} /> {company.phone}</a>
              </li>
              <li>
                <a href={company.emailHref}><Mail size={16} /> {company.email}</a>
              </li>
              <li>
                <span><MapPin size={16} /> {company.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} Strata Cloud Accountants. All rights reserved.</span>
          <span>We simplify the complicated.</span>
        </div>
      </div>
    </footer>
  );
}
