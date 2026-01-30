import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { QuickBot } from "@/components/bot/QuickBot";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16 md:pt-20">{children}</main>
      <Footer />
      <QuickBot />
    </div>
  );
}
