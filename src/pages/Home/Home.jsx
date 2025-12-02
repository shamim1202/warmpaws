import { useLoaderData } from "react-router";
import MeetOurVetExperts from "../../components/MeetOurVetExperts/MeetOurVetExperts";
import PopularServices from "../../components/PopularServices/PopularServices";
import WinterCareTips from "../../components/WinterCareTips/WinterCareTips";
import WinterHeroSlider from "../../components/WinterHeroSlider/WinterHeroSlider";
import WinterQuiz from "../../components/WinterQuiz/WinterQuiz";
import { usePageTitle } from "../../hooks/usePageTitle";
import Services from "../Services/Services";
import TopPets from "../../components/TopPets/TopPets";
import FeaturedService from "../../components/FeaturedService/FeaturedService";

const Home = () => {
  usePageTitle("Home");

  const services = useLoaderData();
  return (
    <div>
      <WinterHeroSlider></WinterHeroSlider>
      {/* <Services></Services> */}
      <FeaturedService></FeaturedService>
      <WinterCareTips></WinterCareTips>
      {/* <PopularServices services={services}></PopularServices> */}
      <TopPets></TopPets>
      <WinterQuiz></WinterQuiz>
      <MeetOurVetExperts></MeetOurVetExperts>
    </div>
  );
};

export default Home;
