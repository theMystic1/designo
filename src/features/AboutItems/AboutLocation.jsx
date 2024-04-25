import styled from "styled-components";
import Headings from "../../ui/Headings";
import StyledButton from "../../ui/StyledButton";
import { useInview } from "../../hooks/useInview";

const Details = styled.div`
  background-image: url("/assets/shared/desktop/bg-pattern-three-circles.svg");
`;

function DetailsDetails({ location }) {
  const { ref, style } = useInview();

  const { name, img } = location;
  return (
    <div
      className="flex flex-col items-center justify-center gap-8"
      ref={ref}
      style={style}
    >
      <Details className="">
        <img src={img} alt={name} />
      </Details>
      <Headings as="h3" className="uppercase ">
        {name}
      </Headings>
      <StyledButton type="secondary" className="uppercase">
        see location
      </StyledButton>
    </div>
  );
}

function AboutLocation() {
  const locations = [
    {
      img: "/assets/shared/desktop/illustration-canada.svg",
      name: "canada",
      url: "",
    },
    {
      img: "/assets/shared/desktop/illustration-australia.svg",
      name: "australia",
      url: "",
    },
    {
      img: "/assets/shared/desktop/illustration-united-kingdom.svg",
      name: "united kingdom",
      url: "",
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 mb-[250px]">
      {locations.map((location) => (
        <DetailsDetails key={location.name} location={location} />
      ))}
    </div>
  );
}

export default AboutLocation;
