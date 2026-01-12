import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { Saira_Extra_Condensed, Mulish } from 'next/font/google';
import '../globals.css';

const saira = Saira_Extra_Condensed({
  weight: ['500', '700'],
  subsets: ['latin'],
  variable: '--font-saira',
});

const muli = Mulish({
  weight: ['400', '800'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-muli',
});

export const metadata: Metadata = {
  title: 'Resume of Tzuhan Hsu',
  description: 'Professional software engineer and digital art hobbyist',
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages({ locale });

  return (
    <html lang={locale} className="scroll-smooth">
      <body className={`${saira.variable} ${muli.variable} font-sans`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
