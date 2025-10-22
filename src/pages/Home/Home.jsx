import MeetOurVetExperts from "../../components/MeetOurVetExperts/MeetOurVetExperts";
import WinterCareTips from "../../components/WinterCareTips/WinterCareTips";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Services></Services>
      <WinterCareTips></WinterCareTips>
      <MeetOurVetExperts></MeetOurVetExperts>
    </div>
  );
};

export default Home;
