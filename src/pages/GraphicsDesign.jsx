import DesignLink from "../features/Designs/DesignLink";
import GraphicDesignDesign from "../features/Designs/GraphicDesignDesign";
import Hero from "../features/Designs/Hero";

function GraphicsDesign() {
  return (
    <div>
      <Hero
        heading="Graphic design"
        parag=" 
            We deliver eye-catching branding materials that are tailored to meet your business objectives."
      />

      <GraphicDesignDesign />

      <DesignLink
        bgimg={[
          "/assets/home/desktop/image-app-design.jpg",
          "/assets/home/desktop/image-web-design-large.jpg",
        ]}
        header={["App Design", "Web Design"]}
        path={["/appdesign", "/webDesign"]}
      />
    </div>
  );
}

export default GraphicsDesign;
