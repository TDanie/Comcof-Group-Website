import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { CartProvider } from "@/components/CartProvider";
import { ShopNav, ShopFooter } from "@/components/ShopChrome";
import "./globals.css";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});

const sans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "800"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://comcofgroup.com"),
  title: { default: "Comcof Shop | Comcof Group", template: "%s | Comcof Shop" },
  description:
    "The consumer coffee channel of Comcof Group: Ugandan coffee, gifts, subscriptions, and corporate supply, built with the same discipline as our trade.",
  openGraph: {
    siteName: "Comcof Shop",
    images: ["https://comcofgroup.com/og.png"],
    type: "website",
  },
  icons: {
    icon: "https://comcofgroup.com/favicon.svg",
    apple: "https://comcofgroup.com/favicon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <CartProvider>
          <ShopNav />
          <main id="main">{children}</main>
          <ShopFooter />
        </CartProvider>
      </body>
    </html>
  );
}
