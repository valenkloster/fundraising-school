import '@/styles/style.css';
import { DM_Sans } from 'next/font/google';

const dm_sans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Fundraising School - Be a great deal for investors and raise money like a pro',
  description:
    'Fuel your LATAM startup at Fundraising School. Master fundraising with expert-led courses on pitch decks and venture capital. Join to accelerate growth, achieve goals, and network with founders. Unleash fundraising expertise for success!',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${dm_sans.className} bg-white tracking-tight text-gray-900 antialiased`}>
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:text-clip">
          {children}
        </div>
      </body>
    </html>
  );
}
