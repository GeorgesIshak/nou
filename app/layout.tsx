import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "Nou Architecture",
  description: "Portfolio of our projects",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-dmSans antialiased bg-white text-white">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
