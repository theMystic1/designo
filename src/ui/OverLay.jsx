import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  top: 8rem;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #161315;
  opacity: 0.7;
  backdrop-filter: blur(4px);
  z-index: 500;
  transition: all 0.5s;
`;

export default Overlay;
