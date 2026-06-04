import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="footer" id="site-footer">
      <div className="container container--wide">
        <div className="footer__grid">
          {/* Brand Column */}
          <div className="footer__brand">
            <Image
              src="/images/logo.png"
              alt="Strata Cloud Accountants"
              width={180}
              height={45}
              style={{ height: '50px', width: 'auto', filter: 'brightness(1.5)' }}
            />
            <p className="footer__tagline">
              Financial Clarity. Human Connection. Empowering service-based businesses
              with fractional accounting and advisory services they can trust.
            </p>
            <div className="footer__social">
              <a href="https://www.linkedin.com/company/stratacloudaccountants" className="footer__social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                in
              </a>
              <a href="https://www.facebook.com/stratacloudaccountants" className="footer__social-link" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                f
              </a>
              <a href="https://www.instagram.com/stratacloudaccountants" className="footer__social-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                IG
              </a>
              <a href="https://www.youtube.com/@stratacloudaccountants" className="footer__social-link" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                ▶
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer__heading">Company</h4>
            <ul className="footer__links">
              <li><Link href="/about" className="footer__link">About Us</Link></li>
              <li><Link href="/services" className="footer__link">Services</Link></li>
              <li><Link href="/careers" className="footer__link">Careers</Link></li>
              <li><Link href="/podcast" className="footer__link">Podcast</Link></li>
              <li><Link href="/resources" className="footer__link">Resources</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="footer__heading">Services</h4>
            <ul className="footer__links">
              <li><Link href="/services#fractional-cfo" className="footer__link">Fractional CFO</Link></li>
              <li><Link href="/services#accounting" className="footer__link">Accounting</Link></li>
              <li><Link href="/services#bookkeeping" className="footer__link">Bookkeeping</Link></li>
              <li><Link href="/services#advisory" className="footer__link">Advisory</Link></li>
              <li><Link href="/services#controller" className="footer__link">Controller Services</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="footer__heading">Contact</h4>
            <div className="footer__contact-item">
              <span className="footer__contact-icon">📍</span>
              <span>6001 W Parmer Lane, STE 370 Box 1016,<br />Austin, Texas 78727</span>
            </div>
            <div className="footer__contact-item">
              <span className="footer__contact-icon">📞</span>
              <a href="tel:6302746057" className="footer__link">(630) 274-6057</a>
            </div>
            <div className="footer__contact-item">
              <span className="footer__contact-icon">✉️</span>
              <a href="mailto:info@stratacloudaccountants.com" className="footer__link">info@stratacloudaccountants.com</a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; {new Date().getFullYear()} Strata Cloud Accountants. All rights reserved.</p>
          <p>
            <Link href="/privacy" className="footer__link" style={{ marginRight: '1rem' }}>Privacy Policy</Link>
            <Link href="/terms" className="footer__link">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
