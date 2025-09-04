
import "./globals.css";

export const metadata = {
  title: "Nou Architecture",
  description: "Nou Architecture is a creative architecture and design studio based in Cyprus, showcasing innovative projects and inspiring spaces.",
};


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
