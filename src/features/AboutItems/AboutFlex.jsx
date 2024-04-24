import styled, { css } from "styled-components";

export const BigFlex = styled.div`
  display: flex;
  flex-direction: column;
  /* height: 50%; */
  width: 100%;
  min-height: 50rem;
  /* 
   */

  @media (min-width: 1024px) {
    width: 60%;
  }

  ${(props) =>
    props.type === "regular" &&
    css`
      border-top-left-radius: 1rem;
      border-bottom-left-radius: 1rem;
    `}

  ${(props) =>
    props.type === "reverse" &&
    css`
      border-top-right-radius: 1rem;
      border-bottom-right-radius: 1rem;

      /* @media (min-width: 1024px) {
        width: 60%;
      } */
    `}

    ${(props) =>
    props.type === "location" &&
    css`
      border-radius: 1rem;
      min-height: 40rem;
      /* flex-direction: row; */
    `}
`;

export const SmallFlex = styled.div`
  background-image: url(${(props) => props.img});
  background-position: center;
  width: 100%;
  /* height: 50%; */

  min-height: 50rem;

  @media (min-width: 1024px) {
    width: 40%;
    min-height: 40rem;
    /* height: 100%; */
  }

  ${(props) =>
    props.type === "reverse" &&
    css`
      border-top-left-radius: 1rem;
      border-bottom-left-radius: 1rem;
    `}

  ${(props) =>
    props.type === "regular" &&
    css`
      border-top-right-radius: 1rem;
      border-bottom-right-radius: 1rem;
    `}

      ${(props) =>
    props.type === "location" &&
    css`
      border-radius: 1rem;
      min-height: 40rem;
    `}
`;

BigFlex.defaultProps = {
  type: "regular",
};

SmallFlex.defaultProps = {
  type: "regular",
};
