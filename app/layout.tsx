import '../styles/global.scss'

import Header from './components/Header';
import Footer from './components/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <title>Film Finder</title>
      <meta name="description" content="Film Finder is a Next.js application that interacts with the TMDB API to display Movies data. This app provides users with a responsive, user-friendly interface for browsing movies details and searching by name." />
      <body className='bg-slate-800'>
        <Header/>
          {children}
        <Footer/>
      </body>
    </html>
  );
}
