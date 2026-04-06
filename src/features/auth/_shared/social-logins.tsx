"use client";

import { Button } from "@/components/ui/button";
import { SOCIAL_LOGINS_ICON_SIZE } from "@/lib/constants";
import Image from "next/image";

interface Props {
  isPending: boolean;
}

export const SocialLogins = ({ isPending }: Props) => {
  return (
    <div className="flex flex-col gap-4">
      <Button
        variant="outline"
        type="button"
        className="w-full cursor-pointer"
        disabled={isPending}
      >
        <Image
          src="/github.svg"
          alt="GitHub"
          width={SOCIAL_LOGINS_ICON_SIZE}
          height={SOCIAL_LOGINS_ICON_SIZE}
        />
        Continue with GitHub
      </Button>
      <Button
        variant="outline"
        type="button"
        className="w-full cursor-pointer"
        disabled={isPending}
      >
        <Image
          src="/google.svg"
          alt="Google"
          width={SOCIAL_LOGINS_ICON_SIZE}
          height={SOCIAL_LOGINS_ICON_SIZE}
        />
        Continue with Google
      </Button>
    </div>
  );
};
