import { useInview } from "../../hooks/useInview";
import Headings from "../../ui/Headings";
import { StyledHero } from "../../ui/Hero";
import StyledParagraph from "../../ui/StyledParagraph";
import { BigFlex, SmallFlex } from "./AboutFlex";

function AboutHero() {
  const { ref, style } = useInview();
  return (
    <StyledHero
      className="flex lg:flex-row flex-col-reverse bg-peach-600 text-white-200"
      ref={ref}
      style={style}
    >
      <BigFlex className=" py-8 px-20 lg:p-12 gap-8 justify-center  items-center lg:items-start">
        <Headings as="h2">About us</Headings>
        <StyledParagraph>
          Founded in 2010, we are a creative agency that produces lasting
          results for our clients. We’ve partnered with many startups,
          corporations, and nonprofits alike to craft designs that make real
          impact. We’re always looking forward to creating brands, products, and
          digital experiences that connect with our clients' audiences.
        </StyledParagraph>
      </BigFlex>

      <SmallFlex img="/assets/about/desktop/image-about-hero.jpg" />
    </StyledHero>
  );
}

export default AboutHero;
