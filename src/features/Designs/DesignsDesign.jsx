import styled from "styled-components";

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 4rem;
  }

  /* @media (min-width: 1600px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 4rem;
  } */
`;

export default StyledGrid;
