import styled from "styled-components";
import Link from "next/link";
import UnstyledLink from "../components/styled/UnstyledLink";
import Image from "next/image";

const NavBar = styled.div`
  width: 100%;
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  height: 218px;
  padding-bottom: 20px;
`;

const NavItem = styled.div`
  margin: 10px;
  background-color: black;

  &:hover {
    cursor: pointer;
  }
`;

const NavWrapperOuter = styled.div`
  /* background-color: red; */
  width: 768px;
  width: 80%;
  width: 1440px;
  justify-content: space-between;
  margin-bottom: 50px;
`;

const NavInnerRight = styled.div`
  display: flex;
  justify-content: space-around;
  width: 70%;
`;
const NavTop = styled.div`
  font-family: Impact;
  font-size: 23px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 2px;
  text-align: left;

  display: flex;
  justify-content: flex-end;
  padding-bottom: 30px;
  padding-right: 30px;
`;

const NavBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
`;

const TextLink = styled(UnstyledLink)`
  padding: 20px;
  transition: color 0.35s, background-color 0.35s;
  &:hover {
    background-color: white;
    color: black;
  }
`;

const Nav = () => {
  return (
    <NavBar>
      <NavWrapperOuter>
        <NavTop>
          <NavItem>login</NavItem>
          <NavItem>cart</NavItem>
        </NavTop>
        <NavBottom>
          <Link href="/">
            <UnstyledLink style={{ paddingLeft: "60px" }}>
              <Image src="/images/farmore.png" width={80} height={80}></Image>{" "}
            </UnstyledLink>
          </Link>
          <NavInnerRight>
            <Link href="/our-coffees">
              <TextLink> OUR COFFEES</TextLink>
            </Link>
            <Link href="/coffee-trader">
              <TextLink>COFFEE TRADER</TextLink>
            </Link>
            <Link href="/coffee-club">
              <TextLink>COFFEE CLUB</TextLink>
            </Link>
            <Link href="/about">
              <TextLink>ABOUT US</TextLink>
            </Link>
            <Link href="/contact">
              <TextLink>CONTACT</TextLink>
            </Link>
          </NavInnerRight>
        </NavBottom>
      </NavWrapperOuter>
    </NavBar>
  );
};

export default Nav;
