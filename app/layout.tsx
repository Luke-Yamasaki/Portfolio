import type { Metadata } from 'next';
import '@/styles/global.css';
import VisitedProvider from '@/context';

export const metadata: Metadata = {
  title: { default: "Luke Yamasaki's Portfolio Website", template: '%s | Luke Yamasaki' },
  description: "Luke Yamasaki's portfolio website using Next.js",
  openGraph: { title: "Luke Yamasaki's Portfolio Website" },
  twitter: { card: 'summary_large_image' },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/low6llp.css" />
      </head>
      <body>
        <VisitedProvider>{children}</VisitedProvider>
      </body>
    </html>
  );
}
