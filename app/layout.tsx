export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>this is the layour for all pages
        {children}
      </body>
    </html>
  );
}
