import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

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
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
