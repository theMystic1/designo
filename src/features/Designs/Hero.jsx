import Headings from "../../ui/Headings";
import { StyledHero } from "../../ui/Hero";
import StyledParagraph from "../../ui/StyledParagraph";

function Hero({ heading, parag }) {
  return (
    <StyledHero className="bg-peach-600 text-white-0 flex flex-col items-center justify-center py-20 my-20">
      <div className="w-[50%] flex flex-col items-center justify-center  gap-16">
        <Headings>{heading}</Headings>
        <StyledParagraph className="text-center">{parag}</StyledParagraph>
      </div>
    </StyledHero>
  );
}

export default Hero;
