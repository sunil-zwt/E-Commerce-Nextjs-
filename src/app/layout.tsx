import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import 'bootstrap/dist/css/bootstrap.css';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Showmates',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <Head>
        <Link
          href='https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap'
          rel='stylesheet'
        />
        <Link rel='preconnect' href='https://fonts.gstatic.com/' />
        <Link
          href='https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&amp;display=swap'
          rel='stylesheet'
        />
        <Link
          href='https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@100;200;300;400;500;600;700;800&amp;display=swap'
          rel='stylesheet'
        />
        <Link
          href='https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&family=Inter:wght@100..900&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
