import BuyHomeSection from "./BuyHomeSection";
import CityContainer from "./CityContainer";
import Download from "./Download";

export default function PropertySection() {
  return (
    <div className="w-[1044px] m-auto relative">
      <BuyHomeSection />
      <CityContainer />
      <Download />
    </div>
  );
}
