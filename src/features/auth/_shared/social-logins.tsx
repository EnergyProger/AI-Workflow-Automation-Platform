"use client";

import { Button } from "@/components/ui/button";

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
        Continue with GitHub
      </Button>
      <Button
        variant="outline"
        type="button"
        className="w-full cursor-pointer"
        disabled={isPending}
      >
        Continue with Google
      </Button>
    </div>
  );
};
