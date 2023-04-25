"use client";

import ScreenLoading from "@/components/animation/screen-loading";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ScreenLoading>
      <Header />
      <main>{children}</main>
      <Footer />
    </ScreenLoading>
  );
}
