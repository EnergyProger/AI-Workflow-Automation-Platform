import { AuthLayout } from "@/features/auth/auth-layout";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return <AuthLayout>{children}</AuthLayout>;
};

export default Layout;
