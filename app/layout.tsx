// app/layout.tsx (or your root layout)
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ansar Khan',
  description: 'Portfolio and archive',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-950 text-white min-h-screen`}>
        <header className='sticky top-0 z-50'>
          <Navbar />
        </header>
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}