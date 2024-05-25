import Slider from '@/components/auth/slider';
import Logo from '@/components/ui/logo';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="h-screen w-full max-w-full grid-cols-authLayout lg:grid ">
      <section className="flex h-screen w-full flex-col items-center gap-2 lg:px-8 lg:py-6">
        <nav className="hidden w-full lg:block">
          <div className="hidden w-32 lg:block ">
            <Logo />
          </div>
        </nav>
        {children}
        <p className="hidden max-w-xs text-center text-sm font-normal text-neutral-500 lg:block">
          By signing up, you agree with the <br />
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="border-b border-neutral-500"
            href={'/data_sharing'}
          >
            Terms of Use
          </a>{' '}
          &{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="border-b border-neutral-500"
            href={'/data_sharing'}
          >
            Privacy Policy
          </a>
        </p>
      </section>
      <Slider />
    </main>
  );
}
