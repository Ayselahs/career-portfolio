import Image from "next/image";
import HeroSection from "@/components/hero";
import Header from "@/components/footer";
import SelectedWorkSection from "@/components/selectedwork";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <SelectedWorkSection />
    </main>
  );
}
