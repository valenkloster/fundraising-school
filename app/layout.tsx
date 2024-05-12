import '@/styles/style.css';
import { dm_sans } from '@/app/fonts';

export const metadata = {
  title: 'Fundraising School - Be a great deal for investors and raise money like a pro',
  description:
    'Fuel your LATAM startup at Fundraising School. Master fundraising with expert-led courses on pitch decks and venture capital. Join to accelerate growth, achieve goals, and network with founders. Unleash fundraising expertise for success!',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dm_sans.variable}`}>
      <body className="bg-white font-sans tracking-tight text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
