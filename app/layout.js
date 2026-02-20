


// src/app/layout.js
import { Inter, Playfair_Display, Poppins } from 'next/font/google';
// Remove localFont import
import './globals.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import { Providers } from './providers';
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
});

// Clash ki jagah Poppins use karo (similar vibe)
const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

export const metadata = {
  title: 'ZENO - Premium Software Development House in Karachi',
  description: 'Crafting digital excellence for modern enterprises. Based in Karachi, serving globally.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${poppins.variable}`}>
      <body className="font-sans bg-white text-primary">
        <Providers>
        <Header />
        {children}
        <Footer />
        </Providers>
      </body>
    </html>
  );
}