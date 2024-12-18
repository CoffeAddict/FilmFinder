import '../styles/global.scss'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>this is the layour for all pages
        {/* TODO: Create header component */}
        {children}
        {/* TODO: Create footer component */}
      </body>
    </html>
  );
}
