// // // src/app/layout.js
// // import './globals.css';
// // import Header from './components/layout/Header';
// // import Footer from './components/layout/Footer';
// // export const metadata = {
// //   title: 'ZENO - Software Development House Karachi',
// //   description: 'Enterprise software solutions for modern businesses in Karachi',
// // };

// // export default function RootLayout({ children }) {
// //   return (
// //     <html lang="en">
// //       <body>
// //         <Header />
// //         <main>{children}</main>
// //         <Footer />
// //       </body>
// //     </html>
// //   );
// // }    





// // src/app/layout.js
// import { Inter, Playfair_Display } from 'next/font/google';
// // import localFont from 'next/font/local';
// import './globals.css';
// import Header from './components/layout/Header';
// import Footer from './components/layout/Footer';
// const inter = Inter({ 
//   subsets: ['latin'],
//   variable: '--font-inter',
// });

// const playfair = Playfair_Display({ 
//   subsets: ['latin'],
//   variable: '--font-playfair',
// });

// const clash = localFont({
//   src: '../fonts/ClashDisplay-Variable.woff2',
//   variable: '--font-clash',
//   display: 'swap',
// });

// export const metadata = {
//   title: 'ZENO - Premium Software Development House in Karachi',
//   description: 'Crafting digital excellence for modern enterprises. Based in Karachi, serving globally.',
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en" className={`${inter.variable} ${playfair.variable} ${clash.variable}`}>
//       <body className="font-sans bg-white text-primary">
//         <Header />
//         {children}
//         <Footer />
//       </body>
//     </html>
//   );
// }  





// src/app/layout.js
import { Inter, Playfair_Display, Poppins } from 'next/font/google';
// Remove localFont import
import './globals.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

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
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}