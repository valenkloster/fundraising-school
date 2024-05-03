import LinkedInSignIn from '@/components/auth/linkedin-sign-in';
import Logo from '@/components/ui/logo';

export default function Page() {
  return (
    <section className="mx-8 flex h-screen w-full flex-col items-center justify-evenly gap-9 py-6 sm:justify-between">
      <nav className="hidden w-full sm:block">
        <div className="block w-32 ">
          <Logo />
        </div>
      </nav>
      <div className="flex flex-col items-center gap-12">
        <div className="block w-64 sm:hidden">
          <Logo />
        </div>
        <h3 className="h3 mb-4 mt-8 max-w-xs text-center text-neutral-900">
          Elevate your fundraising skills
        </h3>
        <p className="text-sm font-normal text-neutral-500 sm:hidden">Sign up now</p>

        <LinkedInSignIn className="hidden sm:flex" />
      </div>
      <LinkedInSignIn className="flex sm:hidden" />

      <p className="hidden max-w-xs text-center text-sm font-normal text-neutral-500 sm:block">
        By signing up, you agree with the <br />
        Terms of Use & Privacy Policy
      </p>
    </section>
  );
}
