import { Link, NavLink, useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.8rem;
  height: 8rem;

  /* position: fixed; */
  position: relative;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

const Ul = styled.ul`
  display: flex;
  align-items: center;
  gap: 4rem;
  z-index: 1000;

  ${(props) =>
    props.type === "nav" &&
    css`
      /* display: none; */
      position: absolute;
      flex-direction: column;
      align-items: start;
      padding: 4rem 3rem;
      gap: 2rem;
      font-size: 3rem;
      left: 0;
      right: 0;
      top: 8rem;
      height: 30rem;
      background-color: #1d1c1e;
      color: #fff;
      transition: all 600ms;
      /* transform: translateY(-1000px); */
      @media (min-width: 640px) {
        display: flex;
        position: static;
        align-items: center;
        gap: 4rem;
        font-size: 2rem;
        background-color: transparent;
        color: #1d1c1e;
        padding: 0;
        flex-direction: row;
      }
    `}

  ${(props) =>
    props.type === "footer" &&
    css`
      @media (min-width: 640px) {
        gap: 2rem;
      }
    `}
`;

const Button = styled.button`
  display: flex;
  background-color: transparent;

  @media (min-width: 640px) {
    display: none;
  }
`;

const StyledList = styled.li`
  list-style: none;
  text-transform: uppercase;
  cursor: pointer;
`;

function Nav({ isOpen, setIsOpen }) {
  const navigate = useNavigate();
  function handleClick(path) {
    navigate(path);
    setIsOpen(false);
  }

  return (
    <StyledNav className="top-0 left-0 right-0 px-10  md:px-20 lg:px-40 xl:px-80 mb-20 h-20">
      <NavLink to="/">
        <Logo>
          <img
            src="/assets/shared/desktop/logo-dark.png"
            alt=""
            className="w-52"
          />
          {/* <p className="tracking-widest font-bold uppercase text-3xl">
            Designo
          </p> */}
        </Logo>
      </NavLink>
      <Ul
        className={`${
          isOpen ? "translate-y-0 flex" : "translate-y-[-1000px] hidden"
        } sm:translate-y-0`}
      >
        <StyledList onClick={() => handleClick("/about")}>
          our company
        </StyledList>

        <StyledList onClick={() => handleClick("/locations")}>
          locations
        </StyledList>

        <StyledList onClick={() => handleClick("/contacts")}>
          contact
        </StyledList>
      </Ul>

      <Button onClick={() => setIsOpen((iso) => !iso)}>
        <img
          src={
            isOpen
              ? "/assets/shared/mobile/icon-close.svg"
              : "/assets/shared/mobile/icon-hamburger.svg"
          }
          alt=""
        />
      </Button>
    </StyledNav>
  );
}

export function FooterNav({ className }) {
  return (
    <StyledNav className={className}>
      <Logo>
        <img
          src="/assets/shared/desktop/logo-light.png"
          alt=""
          className="w-40"
        />
      </Logo>
      <Ul type="footer" className="flex-col md:flex-row">
        <StyledList>
          <Link to="/about">our company</Link>
        </StyledList>

        <StyledList>
          <Link to="/locations">locations</Link>
        </StyledList>

        <StyledList>
          <Link to="/contacts">contact</Link>
        </StyledList>
      </Ul>
    </StyledNav>
  );
}

// sm:px-10  md:px-20 lg:px-40 xl:px-80 mb-20

Ul.defaultProps = {
  type: "nav",
};

export default Nav;
