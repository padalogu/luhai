import { Inter, Montserrat } from "next/font/google";
import Script from "next/script";
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
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-16709333097"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16709333097');
          `}
        </Script>
        <div className="bg-brand-navy text-slate-200 font-sans antialiased selection:bg-brand-teal selection:text-white min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}

