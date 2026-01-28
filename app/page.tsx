import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { HowItWorks } from "@/components/how-it-works";
import { BeforeAfter } from "@/components/before-after";
import { WhyUse } from "@/components/why-use";
import { AppShowcase } from "@/components/app-showcase";
import { SystemDetails } from "@/components/system-details";
import { FinancialControl } from "@/components/financial-control";
import { Warranty } from "@/components/warranty";
import { Professionalism } from "@/components/professionalism";
import { FAQ } from "@/components/faq";
import { RealFocus } from "@/components/real-focus";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <HowItWorks />
        <BeforeAfter />
        <WhyUse />
        <AppShowcase />
        <SystemDetails />
        <FinancialControl />
        <Warranty />
        <Professionalism />
        <FAQ />
        <RealFocus />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
