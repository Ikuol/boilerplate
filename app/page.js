import { Navbar, Footer } from "@/components";
import {
  Hero,
  Phone,
  About,
  Accessibility,
  Integrations,
  PepTalking,
} from "@/sections";

const Page = () => {
  return (
    <div className="bg-primary overflow-hidden">
      <Navbar />
      <Hero />
      <div className="relative">
        <Phone />
      </div>
      <div className="relative">
        <About />
      </div>
      <div className="relative">
        <Accessibility />
      </div>
      <div className="bg-black relative">
        <Integrations />
      </div>
      <div className="relative">
        <PepTalking />
      </div>
      <div className="bg-black relative">
        <Footer />
      </div>
    </div>
  );
};

export default Page;
