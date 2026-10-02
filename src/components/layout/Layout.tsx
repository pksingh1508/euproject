import { ReactNode } from "react";
import clsx from "clsx";
import { Navbar } from "@/components/layout/Navbar";
import Footer from "./Footer";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
import { BackToTop } from "@/components/common/BackToTop";

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

export function Layout({ children, className }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col overflow-x-clip">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:rounded-full focus:bg-primary focus:px-5 focus:py-2.5 focus:text-sm focus:font-medium focus:text-primary-foreground focus:shadow-elevated"
      >
        Skip to content
      </a>
      <ScrollProgress />
      <Navbar />
      <main id="main-content" className={clsx(className)}>
        {children}
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default Layout;
