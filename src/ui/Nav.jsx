import { Link, NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.8rem;
  /* height: 8rem; */

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

  ${(props) =>
    props.type === "nav" &&
    css`
      display: none;

      @media (min-width: 640px) {
        display: flex;
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

const StyledList = styled.li`
  list-style: none;
  text-transform: uppercase;
`;

function Nav() {
  return (
    <StyledNav className="top-0 left-0 right-0 sm:px-10  md:px-20 lg:px-40 xl:px-80 mb-20 h-20">
      <NavLink to="/">
        <Logo>
          <img
            src="/assets/shared/desktop/logo-dark.png"
            alt=""
            className="w-40"
          />
          {/* <p className="tracking-widest font-bold uppercase text-3xl">
            Designo
          </p> */}
        </Logo>
      </NavLink>
      <Ul>
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
