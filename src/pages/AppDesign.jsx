import AppDesignDesigns from "../features/Designs/AppDesignDesigns";
import DesignLink from "../features/Designs/DesignLink";
import Hero from "../features/Designs/Hero";

function AppDesign() {
  return (
    <div>
      <Hero
        heading="App design"
        parag=" 
  Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.
"
      />

      <AppDesignDesigns />

      <DesignLink
        bgimg={[
          "/assets/home/desktop/image-web-design-large.jpg",
          "/assets/home/desktop/image-graphic-design.jpg",
        ]}
        header={["Web Design", "Graphic Design"]}
        path={["/webDesign", "/graphicsDesign"]}
      />
    </div>
  );
}

export default AppDesign;
