import styled from "styled-components";
import Headings from "../../ui/Headings";
import StyledParagraph from "../../ui/StyledParagraph";
import { useInview } from "../../hooks/useInview";

const StyledDetails = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  gap: 8rem;
  margin-bottom: 8rem;
`;
const Article = styled.article`
  display: flex;
  align-items: center;
  /* flex-direction: ; */
  justify-content: space-between;
  /* flex-direction: column; */
  gap: 4rem;
`;

function ProjectDet() {
  const { ref, style } = useInview();

  return (
    <StyledDetails
      className="flex-col px-4 lg:flex-row"
      ref={ref}
      style={style}
    >
      <Article className="flex-col md:flex-row lg:flex-col">
        <img
          src="/assets/home/desktop/illustration-passionate.svg"
          alt="passionate"
          className="w-40"
        />
        <div>
          <Headings
            as="h3"
            className="uppercase lg:text-center md:text-start text-center"
          >
            Passionate
          </Headings>
          <StyledParagraph className="lg:text-center md:text-start text-center my-8">
            Each project starts with an in-depth brand research to ensure we
            only create products that serve a purpose. We merge art, design, and
            technology into exciting new solutions.
          </StyledParagraph>
        </div>
      </Article>

      <Article className="flex-col md:flex-row lg:flex-col">
        <img
          src="assets/home/desktop/illustration-resourceful.svg"
          alt="resourceful"
          className="w-40"
        />
        <div>
          <Headings
            as="h3"
            className="uppercase  text-center md:text-start lg:text-center"
          >
            Resourceful
          </Headings>
          <StyledParagraph className="lg:text-center md:text-start text-center my-8">
            Everything that we do has a strategic purpose. We use an agile
            approach in all of our projects and value customer collaboration. It
            guarantees superior results that fulfill our clients’ needs.
          </StyledParagraph>
        </div>
      </Article>

      <Article className="flex-col md:flex-row lg:flex-col">
        <img
          src="assets/home/desktop/illustration-friendly.svg"
          alt="friendly"
          className="w-40"
        />
        <div>
          <Headings
            as="h3"
            className="uppercase lg:text-center md:text-start text-center"
          >
            Friendly
          </Headings>
          <StyledParagraph className="lg:text-center md:text-start text-center my-8">
            We are a group of enthusiastic folks who know how to put people
            first. Our success depends on our customers, and we strive to give
            them the best experience a company can provide.
          </StyledParagraph>
        </div>
      </Article>
    </StyledDetails>
  );
}

export default ProjectDet;
