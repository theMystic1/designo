import styled, { css } from "styled-components";

const StyledButton = styled.button`
  border-radius: 0.8rem;
  padding: 1.2rem 4rem;
  text-transform: uppercase;
  font-weight: 600;

  ${(props) =>
    props.type === "primary" &&
    css`
      background-color: #ffffff;
      color: #333136;
    `}

  ${(props) =>
    props.type === "secondary" &&
    css`
      background-color: #e7816b;
      color: #ffffff;

      &:hover {
        background-color: #ffad9b;
        transition: all 600ms;
      }
    `}
`;

export default StyledButton;

StyledButton.defaultProps = {
  type: "primary",
};
