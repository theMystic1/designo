import styled from "styled-components";
import Headings from "../../ui/Headings";
import { useNavigate } from "react-router-dom";

export const BackGroundImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 4rem;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url(${(props) => props.bgimage});
  background-size: cover;
  background-position: center;
  border-radius: 1.2rem;
  min-height: 40rem;
  transition: all 600ms;
  padding: 2rem;
  width: 80%;
  /* height: 100%; */
  cursor: pointer;
  &:hover {
    background-image: linear-gradient(
        to bottom,
        rgba(231, 129, 107, 0.5),
        rgba(231, 129, 107, 0.5)
      ),
      url(${(props) => props.bgimage});
  }

  @media (min-width: 640px) {
    width: 100%;
    padding: 8rem;
  }
`;

function LinkBg() {
  const navigate = useNavigate();

  function handleNavigate(path) {
    navigate(path);
  }
  return (
    <div className="flex flex-col lg:flex-row gap-8  my-40 w-full">
      <div
        className=" flex items-center justify-center lg:w-1/2"
        onClick={() => handleNavigate("/webDesign")}
      >
        <BackGroundImage
          bgimage="/assets/home/desktop/image-web-design-large.jpg"
          className="h-full"
        >
          <Headings className="uppercase text-white-0">web design</Headings>
          <Headings as="h3" className="uppercase text-white-0">
            View Projects
          </Headings>
        </BackGroundImage>
      </div>

      <div className="flex items-center flex-col w-full gap-8 lg:w-1/2">
        <BackGroundImage
          bgimage="/assets/home/desktop/image-app-design.jpg"
          onClick={() => handleNavigate("/appdesign")}
        >
          <Headings className=" text-white-0"> App Design</Headings>
          <Headings as="h3" className="uppercase text-white-0">
            View Projects
          </Headings>
        </BackGroundImage>
        <BackGroundImage
          bgimage="/assets/home/desktop/image-graphic-design.jpg"
          onClick={() => handleNavigate("/graphicsDesign")}
        >
          <Headings className="uppercase text-white-0">Graphic Design</Headings>
          <Headings as="h3" className="uppercase text-white-0">
            {" "}
            View Projects
          </Headings>
        </BackGroundImage>
      </div>
    </div>
  );
}

export default LinkBg;
