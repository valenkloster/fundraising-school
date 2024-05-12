import LinkedInSignIn from '@/components/auth/linkedin-sign-in';
import Logo from '@/components/ui/logo';

export default function Page() {
  return (
    <>
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
    </>
  );
}
