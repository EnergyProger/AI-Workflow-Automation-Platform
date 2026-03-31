import { authGuard } from "@/lib/auth-utils";
import { caller } from "@/trpc/server";
import { LogoutButton } from "./logout";

const Page = async () => {
  await authGuard();

  const data = await caller.getUsers();

  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center">
      Protected server component
      {JSON.stringify(data)}
      <LogoutButton />
    </div>
  );
};

export default Page;
