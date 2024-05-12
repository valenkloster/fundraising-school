import Slider from '@/components/auth/slider';
import Logo from '@/components/ui/logo';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="h-screen w-full grid-cols-authLayout sm:grid ">
      <section className="mx-8 flex h-screen w-full flex-col items-center justify-evenly gap-9 py-6 sm:justify-between">
        <nav className="hidden w-full sm:block">
          <div className="block w-32 ">
            <Logo />
          </div>
        </nav>
        {children}
        <p className="hidden max-w-xs text-center text-sm font-normal text-neutral-500 sm:block">
          By signing up, you agree with the <br />
          Terms of Use & Privacy Policy
        </p>
      </section>
      <Slider />
    </main>
  );
}
