'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Phone, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { navLinks } from '../data/site';

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('menu-open', open);
    return () => document.body.classList.remove('menu-open');
  }, [open]);

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <Link href="/" className="navbar__logo" aria-label="Strata Cloud Accountants home">
          <Image src="/images/logo.png" alt="Strata Cloud Accountants" width={190} height={81} priority />
        </Link>

        <nav aria-label="Primary navigation">
          <ul className={`navbar__links ${open ? 'active' : ''}`}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`navbar__link ${pathname === link.href ? 'navbar__link--active' : ''}`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/contact" className="navbar__link" onClick={() => setOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <div className="navbar__actions">
          <Link href="/contact" className="btn btn--primary">
            <Phone size={17} aria-hidden="true" />
            Book a Clarity Call
          </Link>
          <button
            type="button"
            className="navbar__toggle"
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </div>
    </header>
  );
}
