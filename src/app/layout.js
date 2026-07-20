import { Open_Sans } from "next/font/google";
import "./globals.css";
import SplashScreen from "@/components/SplashScreen/SplashScreen";

const openSans = Open_Sans({
  variable: "--font-opensans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "IHPL - India Housing Projects Limited",
  description: "Building the Future of India. Premium residential and commercial real estate.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${openSans.variable}`}>
      <body>
        <SplashScreen />
        {children}
      </body>
    </html>
  );
}
