import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import PageHero from "@/components/layout/PageHero";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Contact Us | Radiora International",
  description: "Contact Radiora International in Lahore, Pakistan: (+92) 420-0000000, sales@radiora.example.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main id="main" className="relative">
        <PageHero
          eyebrow="Contact us"
          title="Get in"
          highlight="touch"
          subtitle="Tell us about your requirements and our team in Lahore will get back to you."
        />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
