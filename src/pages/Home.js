import VisaCategories from "../components/Visa/VisaCategories";
import ChooseUs from "../components/ChooseUs";
import TeamMembers from "../components/TeamMembers";

function Home() {
  return (
    <div className="overflow-hidden">
      <VisaCategories />
      <ChooseUs />
      <TeamMembers />
    </div>
  );
}

export default Home;
