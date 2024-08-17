import CityContainer from "@/components/CityContainer";
import Download from "@/components/Download";
import ExploreSection from "@/components/ExploreSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PropertySection from "@/components/PropertySection";
import SearchSection from "@/components/SearchSection";

export default function Home() {
  return (
    <div className="">
      <Header />
      <SearchSection />
      <ExploreSection />
      <PropertySection />
      <Footer />
    </div>
  );
}
