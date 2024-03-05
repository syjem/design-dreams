import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import { Header } from '@/components/shared/header';
import { cn } from '@/lib/utils';

const outfit = Outfit({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Badj Creations',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        layout: {
          socialButtonsPlacement: 'bottom',
          termsPageUrl: 'https://clerk.com/terms',
          logoImageUrl: '/logo.svg',
        },
      }}>
      <html lang="en">
        <body
          className={cn(
            'relative h-full font-sans antialiased',
            outfit.className
          )}>
          <main className="relative flex flex-col min-h-screen">
            <Header />
            <div className="flex-grow flex-1">{children}</div>
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
