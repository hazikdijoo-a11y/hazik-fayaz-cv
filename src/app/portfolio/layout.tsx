import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { PortfolioNav } from "@/components/portfolio/PortfolioNav";
import { PortfolioFooter } from "@/components/portfolio/PortfolioFooter";
import { MobileBar } from "@/components/portfolio/MobileBar";

export default function PortfolioLayout({ children }: LayoutProps<"/portfolio">) {
  return (
    <>
      <ScrollReveal />
      <PortfolioNav />
      {children}
      <PortfolioFooter />
      <MobileBar />
    </>
  );
}
