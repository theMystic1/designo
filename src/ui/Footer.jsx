import styled from "styled-components";
import { StyledHero } from "./Hero";
import Headings from "./Headings";
import StyledParagraph from "./StyledParagraph";
import StyledButton from "./StyledButton";
import { FooterNav } from "./Nav";
import { IoLogoFacebook } from "react-icons/io";
import { FaPinterest, FaTwitter, FaYoutube } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 0.8rem;
  height: 68rem;
  /* bottom: 0; */
  left: 0;
  right: 0;
  position: relative;
  margin-top: 60rem;

  background-color: #1d1c1e;

  @media (min-width: 768px) {
    margin-top: 40rem;
  }

  @media (min-width: 1024px) {
    margin-top: 30rem;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 40px;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Ul = styled.ul`
  color: #f1f3f5;
`;

const LogoList = styled.ul`
  background-color: transparent;

  & svg {
    color: #e7816b;
  }
`;

function Footer() {
  return (
    <StyledFooter className="mt-40 sm:px-10 md:px-20   absolute">
      <StyledHero className="flex bg-peach-600 absolute lg:top-[-200px] sm:top-[-100px] md:top-[-250px] top-[-250px] w-[80%] p-8 md:p-24 flex-col  justify-between items-center text-white-0   lg:flex-row">
        <div className="w-full lg:w-1/2 ">
          <Headings
            as="h2"
            className="mb-10 text-lg lg:text-3xl text-center lg:teaxt-start"
          >
            Let’s talk about your project
          </Headings>
          <StyledParagraph className="text-center lg:text-start my-8 lg:my-0 ">
            Ready to take it to the next level? Contact us today and find out
            how our expertise can help your business grow.
          </StyledParagraph>
        </div>

        <div>
          <StyledButton> Get in touch</StyledButton>
        </div>
      </StyledHero>
      <div className="w-full relative  top-[140px]  text-white-0 pb-10">
        <FooterNav className=" flex-col md:flex-row justify-between border-b border-b-white-200 pb-8" />
        <Info className="grid-cols-1 items-center justify-center md:grid-cols-3 mt-20">
          <Ul className="flex flex-col md:items-start items-center">
            <li className="font-bold">Designo Central Office</li>
            <li>3886 Wellington Street</li>
            <li>Toronto, Ontario M9C 3J5</li>
          </Ul>
          <Ul className="flex flex-col md:items-start items-center">
            <li className="font-bold">Contact Us (Central Office)</li>
            <li className="font-bold"> P : +1 253-863-8967</li>
            <li className="font-bold"> M : contact@designo.co</li>
          </Ul>
          {/*
           */}
          <Ul className="flex items-center gap-4 md:items-end md:justify-end">
            <LogoList>
              <IoLogoFacebook />
            </LogoList>
            <LogoList>
              <FaYoutube />
            </LogoList>
            <LogoList>
              <FaTwitter />
            </LogoList>
            <LogoList>
              <FaPinterest />
            </LogoList>
            <LogoList>
              <SiInstagram />
            </LogoList>
          </Ul>
        </Info>
      </div>
    </StyledFooter>
  );
}

export default Footer;
