import Headings from "../../ui/Headings";
import HeroSec from "../../ui/Hero";
import StyledButton from "../../ui/StyledButton";
import StyledParagraph from "../../ui/StyledParagraph";

function HeroSection() {
  return (
    <HeroSec className="flex flex-col lg:flex-row  justify-center items-center lg:justify-between md:px-20 lg:px-8 py-16 sm:items-center relative z-50">
      <div className="lg:w-1/2 w-full flex flex-col lg:items-start lg:justify-start items-center justify-center relative mt-28">
        <Headings className="text-white-0  text-center lg:text-start font-bold mb-10">
          Award-winning custom designs and digital branding solutions
        </Headings>
        <StyledParagraph className="text-white-0 lg:px-0 px-8 text-center lg:text-start mb-10">
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </StyledParagraph>
        <StyledButton>Learn more</StyledButton>
      </div>
      <div className="lg:w-1/2 z-10 relative bottom-0 mt-8">
        <img
          src="/assets/home/desktop/image-hero-phone-2.png "
          alt="phone"
          className="lg:h-full h-[400px] "
        />
      </div>
    </HeroSec>
  );
}

export default HeroSection;
