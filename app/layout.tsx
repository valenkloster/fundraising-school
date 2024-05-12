import "./css/style.css";

import { DM_Sans } from "next/font/google";
import Header from "@/components/ui/header";
import { GoogleAnalytics } from "@next/third-parties/google";

const dm_sans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: 'Fundraising School - Be a great deal for investors and raise money like a pro',
  description: 'Fuel your LATAM startup at Fundraising School. Master fundraising with expert-led courses on pitch decks and venture capital. Join to accelerate growth, achieve goals, and network with founders. Unleash fundraising expertise for success!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${dm_sans.className} antialiased bg-white text-gray-900 tracking-tight`}
      >
        <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
          <Header />
          {children}
        </div>
      </body>
      <GoogleAnalytics gaId="G-RGW9DB0X3C" />
    </html>
  );
}
