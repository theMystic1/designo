import { useInview } from "../../hooks/useInview";
import Headings from "../../ui/Headings";
import { StyledHero } from "../../ui/Hero";
import StyledParagraph from "../../ui/StyledParagraph";
import { BigFlex, SmallFlex } from "./AboutFlex";

function AboutTalent() {
  const { ref, style } = useInview();

  return (
    <StyledHero
      className="flex  lg:flex-row-reverse flex-col-reverse bg-peach-200 bg-opacity-50 sm:mt-[250px] my-[200px]"
      ref={ref}
      style={style}
    >
      <BigFlex
        className=" py-12 px-20 lg:p-12 gap-8 justify-center items-center lg:items-start"
        type="reverse"
      >
        <Headings as="h2" className="text-peach-600  font-bold">
          World-class talent
        </Headings>
        <StyledParagraph className="flex flex-col gap-8 ">
          <span>
            We are a crew of strategists, problem-solvers, and technologists.
            Every design is thoughtfully crafted from concept to launch,
            ensuring success in its given market. We are constantly updating our
            skills in a myriad of platforms.
          </span>
          <span className="mt-10">
            Our team is multi-disciplinary and we are not merely interested in
            form — content and meaning are just as important. We give great
            importance to craftsmanship, service, and prompt delivery. Clients
            have always been impressed with our high-quality outcomes that
            encapsulates their brand’s story and mission.
          </span>
        </StyledParagraph>
      </BigFlex>
      <SmallFlex
        type="reverse"
        img="/assets/about/desktop/image-world-class-talent.jpg"
        // className="py-10 lg:h-[500px]"
      />
    </StyledHero>
  );
}

export default AboutTalent;
