import DesignLink from "../features/Designs/DesignLink";
import Hero from "../features/Designs/Hero";
import WebDesignDesigns from "../features/Designs/WebDesignDesigns";

function WebDesign() {
  return (
    <div>
      <Hero
        heading="Web design"
        parag="We build websites that serve as powerful marketing tools and bring memorable brand experiences."
      />

      <WebDesignDesigns />
      <DesignLink
        bgimg={[
          "/assets/home/desktop/image-app-design.jpg",
          "/assets/home/desktop/image-graphic-design.jpg",
        ]}
        header={["App Design", "Graphic Design"]}
        path={["/appdesign", "/graphicsDesign"]}
      />
    </div>
  );
}

export default WebDesign;
