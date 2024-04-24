import styled from "styled-components";
import Headings from "../../ui/Headings";
import StyledParagraph from "../../ui/StyledParagraph";

const StyledDesign = styled.article`
  background-color: rgba(231, 129, 107, 0.3);
  /* height: 30rem; */
`;

const BgImg = styled.div`
  background-image: url(${(props) => props.img});
  background-position: center;
  background-size: cover;
`;

function Design({ design }) {
  const { img, name, desc } = design;
  return (
    <StyledDesign className="h-[400px] sm:grid sm:grid-cols-2 lg:flex sm:gap-8 sm:mb-10 flex flex-col gap-8 w-full rounded-md sm:h-[300px] lg:h-[400px]">
      <BgImg img={img} className="lg:h-[60%]  h-[60%] rounded-t sm:h-full " />

      <div className="rounded-b flex flex-col items-center justify-center   gap-4 p-4">
        <Headings as="h3" className="uppercase text-peach-600 font-bold">
          {name}
        </Headings>
        <StyledParagraph className="text-center font-normal">
          {desc}
        </StyledParagraph>
      </div>
    </StyledDesign>
  );
}

export default Design;
