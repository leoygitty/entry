import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* CallRail Dynamic Number Insertion */}
        <Script
          id="callrail"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var cr = document.createElement("script");
                cr.type = "text/javascript";
                cr.async = true;
                cr.src = "//cdn.callrail.com/companies/554986649/e2933efaed1eccbd3c90/12/swap.js";
                var s = document.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(cr, s);
              })();
            `,
          }}
        />
      </head>

      <body className={`${inter.className} bg-background`}>
        <Header />
        {children}
        <Footer />

        {/* Calendly global widget */}
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
