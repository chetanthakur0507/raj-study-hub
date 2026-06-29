import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import FloatingButtons from '@/components/FloatingButtons';
import CustomCursor from '@/components/CustomCursor';
import { SITE } from '@/lib/constants';

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} | Premium Study Library in Dhakia`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: ['study library', 'RAJ STUDY HUB', 'Dhakia', 'reading room', 'competitive exam'],
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
    shortcut: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-[family-name:var(--font-inter)]">
        <CustomCursor />
        {children}
        <FloatingButtons />
      </body>
    </html>
  );
}
