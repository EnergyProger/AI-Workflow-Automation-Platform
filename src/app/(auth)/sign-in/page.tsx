import { SignInForm } from "@/features/auth/sign-in";
import { guestGuard } from "@/lib/auth-utils";

const Page = async () => {
  await guestGuard();

  return (
    <div className="flex min-h-svh items-center justify-center p-6">
      <div className="w-full max-w-lg">
        <SignInForm />
      </div>
    </div>
  );
};

export default Page;
