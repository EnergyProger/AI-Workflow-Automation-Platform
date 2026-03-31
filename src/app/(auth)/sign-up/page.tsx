import { SignUpForm } from "@/features/auth/sign-up";
import { guestGuard } from "@/lib/auth-utils";

const Page = async () => {
  await guestGuard();

  return (
    <div className="flex min-h-svh items-center justify-center p-6">
      <div className="w-full max-w-lg">
        <SignUpForm />
      </div>
    </div>
  );
};

export default Page;
