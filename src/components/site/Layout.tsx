import { type ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Breadcrumbs } from "./Breadcrumbs";

export const Layout = ({ children }: { children: ReactNode }) => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {pathname !== "/" && <Breadcrumbs />}
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};
