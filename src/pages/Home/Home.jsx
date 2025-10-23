import { useLoaderData } from "react-router";
import MeetOurVetExperts from "../../components/MeetOurVetExperts/MeetOurVetExperts";
import PopularServices from "../../components/PopularServices/PopularServices";
import WinterCareTips from "../../components/WinterCareTips/WinterCareTips";
import WinterHeroSlider from "../../components/WinterHeroSlider/WinterHeroSlider";
import Services from "../Services/Services";

const Home = () => {
  const services = useLoaderData();
  return (
    <div className="max-w-7xl mx-auto">
      <WinterHeroSlider></WinterHeroSlider>
      <Services></Services>
      <WinterCareTips></WinterCareTips>
      <PopularServices services={services}></PopularServices>
      <MeetOurVetExperts></MeetOurVetExperts>
    </div>
  );
};

export default Home;
