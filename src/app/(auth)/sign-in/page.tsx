import { SignInForm } from "@/features/auth/sign-in";
import { guestGuard } from "@/lib/auth-utils";

const Page = async () => {
  await guestGuard();

  return <SignInForm />;
};

export default Page;
