import { Header, Hero, WhyUs } from "@/components/landing/HeaderHero";
import { Calculator } from "@/components/landing/Calculator";
import {
  Products,
  Production,
  Gallery,
  CallbackForm,
  FAQ,
  Contacts,
  Footer,
} from "@/components/landing/Sections";

export default function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <WhyUs />
      <Calculator />
      <Products />
      <Production />
      <Gallery />
      <CallbackForm />
      <FAQ />
      <Contacts />
      <Footer />
    </div>
  );
}
