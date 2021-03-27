import styled from "styled-components";
import UnstyledLink from "../components/styled/UnstyledLink";
import Link from "next/link";
import Image from "next/image";

const Container = styled.div`
  height: 424px;
  background-color: #0084ff;
  background-image: url("public/svgs/footer.svg");
  width: 1440px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 10px;
`;

const TopHalf = styled.div`
  display: flex;
  color: white;
  justify-content: space-around; ;
`;

const BottomHalf = styled.div`
padding: 0
margin: 0;
display:flex;
padding-left: 45px;

`;

const Header = styled.h2`
color: white
  padding: 10px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const ListItem = styled(UnstyledLink)`
  font-family: "Space Mono", monospace;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: 0px;
  text-align: left;
  padding: 10px;
  padding-left: 0px;
`;

const FooterLink = styled(UnstyledLink)`

  font-family: "Space Mono", monospace;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0px;
  /* text-align: left; */
`;

const Footer = () => {
  return (
    <Container>
      <TopHalf>
        {/* <Image src="/svgs/footer.svg" height={424} width={1440}></Image> */}
        <Column>
          <Header>Marketplace</Header>
          <Link href="/">
            <ListItem>Our Coffees</ListItem>
          </Link>
          <Link href="/">
            <ListItem>Coffee Club</ListItem>
          </Link>
          <Link href="/">
            <ListItem>Taste Explorer</ListItem>
          </Link>
          <Link href="/">
            <ListItem>Featured Coffee</ListItem>
          </Link>
        </Column>
        <Column>
          <Header>Far More</Header>
          <Link href="/">
            <ListItem>About Us</ListItem>
          </Link>
          <Link href="/">
            <ListItem>News</ListItem>
          </Link>
          <Link href="/">
            <ListItem>Your Club Profile</ListItem>
          </Link>
          <Link href="/">
            <ListItem>Subscription Gift</ListItem>
          </Link>
          <Link href="/">
            <ListItem>Contact Us</ListItem>
          </Link>
        </Column>
        <Column>
          <Header>Join Us</Header>
          <p>Sign up to our emails to get news and special offers.</p>
          <form name="mail-list" method="POST" action="/">
          <input type="hidden" name="form-name" value="contact" />
          <button>Sign up</button>
          
<input type="text"/>

          </form>
        </Column>
      </TopHalf>
      <BottomHalf>
        <Link href="/">
          <FooterLink>Privacy /  &nbsp;</FooterLink>
        </Link>
        <Link href="/">
          <FooterLink>Terms of Supply /  &nbsp;</FooterLink>
        </Link>
        <Link href="/">
          <FooterLink>Terms & Conditions </FooterLink>
        </Link>
      </BottomHalf>
    </Container>
  );
};

export default Footer;
