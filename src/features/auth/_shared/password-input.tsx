"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import { ComponentProps, forwardRef, useState } from "react";

export const PasswordInput = forwardRef<
  HTMLInputElement,
  ComponentProps<typeof Input>
>(({ className, disabled, ...props }, ref) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const Icon = isVisible ? Eye : EyeOff;

  return (
    <div className="relative">
      <Input
        type={isVisible ? "text" : "password"}
        className={["pr-10", className].filter(Boolean).join(" ")}
        disabled={disabled}
        ref={ref}
        {...props}
      />
      <Button
        type="button"
        variant="ghost"
        size="icon"
        onClick={() => setIsVisible((prev) => !prev)}
        className="absolute inset-y-0 right-0 flex items-center px-3 text-muted-foreground hover:text-foreground hover:bg-transparent transition-colors cursor-pointer"
        aria-label={isVisible ? "Hide password" : "Show password"}
        tabIndex={-1}
        disabled={disabled}
      >
        <Icon className="size-4" />
      </Button>
    </div>
  );
});

PasswordInput.displayName = "PasswordInput";
