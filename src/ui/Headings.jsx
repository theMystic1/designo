import styled, { css } from "styled-components";

const Headings = styled.h1`
  /* color: #1d1c1e; */

  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 3rem;
      line-height: 3rem;

      @media (min-width: 640px) {
        font-size: 4.8rem;
        line-height: 4.8rem;
      }
      /* 

      @media (min-width: 640px) {
        font-size: 3.2rem;
        line-height: 2.8rem;
      }

      @media (min-width: 1200px) {
        font-size: 4.8rem;
        line-height: 4.8rem;
      } */
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2.8rem;
      line-height: 2.8rem;
      letter-spacing: 0.1rem;

      @media (min-width: 640px) {
        font-size: 2.8rem;
        line-height: 1.8rem;
      }

      @media (min-width: 1200px) {
        font-size: 4rem;
        line-height: 4.8rem;
      }
    `}

    ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 2rem;
      line-height: 2.6rem;
      letter-spacing: 0.4rem;
    `}
`;

export default Headings;

Headings.defaultProps = {
  as: "h1",
};
