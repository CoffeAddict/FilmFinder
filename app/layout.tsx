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
      <body className='bg-slate-800'>
        <Header/>
          {children}
        <Footer/>
      </body>
    </html>
  );
}
