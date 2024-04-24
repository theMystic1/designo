import AboutHero from "../features/AboutItems/AboutHero";
import AboutLocation from "../features/AboutItems/AboutLocation";
import AboutTalent from "../features/AboutItems/AboutTalent";
import RealDeal from "../features/AboutItems/RealDeal";

function About() {
  return (
    <div className="mt-[250px]">
      <AboutHero />
      <AboutTalent />
      <AboutLocation />
      <RealDeal />
    </div>
  );
}

export default About;
