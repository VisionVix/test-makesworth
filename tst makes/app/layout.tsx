import type { Metadata } from 'next';
import { Outfit, DM_Serif_Display, Orbitron, Share_Tech_Mono } from 'next/font/google';
import './globals.css';

const outfit = Outfit({ subsets: ['latin'], variable: '--font-body' });
const dmSerif = DM_Serif_Display({ weight: '400', subsets: ['latin'], variable: '--font-display' });
const orbitron = Orbitron({ subsets: ['latin'], variable: '--font-orbitron' });
const shareTech = Share_Tech_Mono({ weight: '400', subsets: ['latin'], variable: '--font-mono' });

export const metadata: Metadata = {
  title: 'Makesworth Accountants — Keep More. Grow Faster. Worry Less.',
  description: 'Chartered Accountants in Harrow & Milton Keynes helping you build a more profitable business.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${outfit.variable} ${dmSerif.variable} ${orbitron.variable} ${shareTech.variable}`}>
      <body>{children}</body>
    </html>
  );
}