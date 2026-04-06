import { SignUpForm } from "@/features/auth/sign-up";
import { guestGuard } from "@/lib/auth-utils";

const Page = async () => {
  await guestGuard();

  return <SignUpForm />;
};

export default Page;
