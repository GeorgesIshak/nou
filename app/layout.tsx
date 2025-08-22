
import "./globals.css";



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-dmSans antialiased bg-white text-white">
       
        <main>{children}</main>
       
      </body>
    </html>
  );
}
