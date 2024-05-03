import Slider from '@/components/auth/slider';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="w-full grid-cols-authLayout sm:grid ">
      {children}
      <Slider />
    </main>
  );
}
