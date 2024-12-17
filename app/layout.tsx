import '../styles/global.scss'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>this is the layour for all pages
        {/* Create header component */}
        {children}
        {/* Create footer component */}
      </body>
    </html>
  );
}
