import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";
import SplashScreen from "@/components/SplashScreen/SplashScreen";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "IHPL - India Housing Projects Limited",
  description: "Building the Future of India. Premium residential and commercial real estate.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} ${playfair.variable}`}>
      <body>
        <SplashScreen />
        {children}
      </body>
    </html>
  );
}
