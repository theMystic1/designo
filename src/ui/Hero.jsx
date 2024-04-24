import styled from "styled-components";

export const StyledHero = styled.div`
  background-image: url("/assets/home/desktop/bg-pattern-hero-home.svg");
  /* width: 100%; */
  max-height: 80rem;
  /* max-width: 100rem; */
  @media (min-width: 640px) {
    border-radius: 1rem;
  }
  /* padding: 4rem 4rem 0 4rem; */
  /* margin-top: 8rem; */
`;

function HeroSec({ children, className = "" }) {
  return (
    <StyledHero
      className={`bg-peach-600 ${className} mt-20 pt-10 pb-0 px10 w-full`}
    >
      {children}
    </StyledHero>
  );
}

export default HeroSec;
