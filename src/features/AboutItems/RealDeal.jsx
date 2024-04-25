import { useInview } from "../../hooks/useInview";
import Headings from "../../ui/Headings";
import { StyledHero } from "../../ui/Hero";
import StyledParagraph from "../../ui/StyledParagraph";
import { BigFlex, SmallFlex } from "./AboutFlex";

function RealDeal() {
  const { ref, style } = useInview();

  return (
    <StyledHero
      className="flex lex lg:flex-row flex-col-reverse bg-peach-200 bg-opacity-50  mt-20"
      ref={ref}
      style={style}
    >
      <BigFlex className=" py-8 px-20 lg:p-12 gap-8 justify-center  items-center lg:items-start">
        <Headings as="h2" className="text-peach-600  font-bold">
          The real deal
        </Headings>
        <StyledParagraph className="flex flex-col gap-10">
          <span>
            As strategic partners in our clients’ businesses, we are ready to
            take on any challenge as our own. Solving real problems require
            empathy and collaboration, and we strive to bring a fresh
            perspective to every opportunity. We make design and technology more
            accessible and give you tools to measure success.
          </span>
          <span className="mt-10">
            We are visual storytellers in appealing and captivating ways. By
            combining business and marketing strategies, we inspire audiences to
            take action and drive real results.
          </span>
        </StyledParagraph>
      </BigFlex>
      <SmallFlex
        img="/assets/about/desktop/image-real-deal.jpg"
        className="py-10 h-[500px]"
      />
    </StyledHero>
  );
}

export default RealDeal;
