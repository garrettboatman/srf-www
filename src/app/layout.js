import { Nunito_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';

const nunito = Nunito_Sans({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunito.className}>{children}</body>
    </html>
  );
}
