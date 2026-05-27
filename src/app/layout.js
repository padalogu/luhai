import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata = {
  title: "Luhai | Servicios Aduanales",
  description: "Luhai Servicios Aduanales",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${inter.variable} ${montserrat.variable} scroll-smooth`}>
      <body className="bg-brand-navy text-slate-200 font-sans antialiased selection:bg-brand-teal selection:text-white">
        {children}
      </body>
    </html>
  );
}
