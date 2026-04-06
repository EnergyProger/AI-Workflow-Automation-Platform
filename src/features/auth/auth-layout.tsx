import { APP_LOGO_ICON_SIZE, APP_NAME } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

interface Props {
  children: React.ReactNode;
}

export const AuthLayout = ({ children }: Props) => {
  return (
    <div className="flex min-h-svh items-center justify-center p-6">
      <div className="w-full max-w-lg">
        <Link
          href="/"
          className="group flex items-center justify-center gap-2 font-medium mb-6"
        >
          <Image
            src="/logo.svg"
            alt="Logo"
            width={APP_LOGO_ICON_SIZE}
            height={APP_LOGO_ICON_SIZE}
            className="transition-transform duration-300 group-hover:scale-110"
          />
          <span className="text-2xl font-bold tracking-tight bg-linear-to-br from-foreground to-foreground/70 bg-clip-text text-transparent group-hover:from-primary group-hover:to-primary/70 transition-all duration-300">
            {APP_NAME}
          </span>
        </Link>
        {children}
      </div>
    </div>
  );
};
