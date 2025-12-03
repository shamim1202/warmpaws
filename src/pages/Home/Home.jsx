import MeetOurVetExperts from "../../components/MeetOurVetExperts/MeetOurVetExperts";
import WinterCareTips from "../../components/WinterCareTips/WinterCareTips";
import WinterHeroSlider from "../../components/WinterHeroSlider/WinterHeroSlider";
import WinterQuiz from "../../components/WinterQuiz/WinterQuiz";
import { usePageTitle } from "../../hooks/usePageTitle";
import TopPets from "../../components/TopPets/TopPets";
import FeaturedService from "../../components/FeaturedService/FeaturedService";

const Home = () => {
  usePageTitle("Home");

  return (
    <div>
      <WinterHeroSlider></WinterHeroSlider>
      <FeaturedService></FeaturedService>
      <WinterCareTips></WinterCareTips>
      <TopPets></TopPets>
      <WinterQuiz></WinterQuiz>
      <MeetOurVetExperts></MeetOurVetExperts>
    </div>
  );
};

export default Home;
