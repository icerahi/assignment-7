import { Footer } from "@/components/shared/Footer";
import { Header } from "@/components/shared/Header";
import { ReactNode } from "react";

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen pt-24 pb-8 px-4">
      <Header />
      <div className="flex-grow">{children}</div>
      <Footer />
    </main>
  );
}
