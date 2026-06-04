import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollMotion from './components/ScrollMotion';

export const metadata = {
  title: {
    default: 'Strata Cloud Accountants | Fractional CFO & Advisory Services',
    template: '%s | Strata Cloud Accountants',
  },
  description:
    'Financial Clarity. Human Connection. Fractional accounting and advisory for service-based businesses ready to move from messy books and gut decisions to confident, data-driven growth.',
  keywords: [
    'fractional CFO',
    'accounting advisory',
    'bookkeeping services',
    'financial clarity',
    'service-based business accounting',
    'fractional accounting firm',
  ],
  openGraph: {
    title: 'Strata Cloud Accountants | Financial Clarity. Human Connection.',
    description:
      'Fractional accounting and advisory for service-based businesses ready to move from messy books to confident, data-driven growth.',
    url: 'https://stratacloudaccountants.com',
    siteName: 'Strata Cloud Accountants',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Strata Cloud Accountants',
    description: 'Financial Clarity. Human Connection.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'AccountingService',
    name: 'Strata Cloud Accountants',
    url: 'https://stratacloudaccountants.com',
    telephone: '(630) 274-6057',
    email: 'info@stratacloudaccountants.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '6001 W Parmer Lane, STE 370 Box 1016',
      addressLocality: 'Austin',
      addressRegion: 'TX',
      postalCode: '78727',
      addressCountry: 'US',
    },
    slogan: 'Financial Clarity. Human Connection.',
    areaServed: 'United States',
    serviceType: ['Bookkeeping Services', 'Controller Services', 'Fractional CFO Services'],
  };

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <ScrollMotion />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
