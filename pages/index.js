import styled from "styled-components";
import Image from "next/image";
import Footer from '../components/Footer'

const HomePage = styled.div`
  z-index: 0;
  postion: relative;
  min-height: 100vh;
  align-items: center;
  display: flex;
  flex-direction: column;
  width: ;
`;

const Question = styled.p`
  color: white;
  text-align: center;

font-size: 60px;
font-style: normal;
font-weight: 400;
line-height: 68px;
letter-spacing: 0px;
text-align: center;

`;
const ImageWrapper = styled.div`
  background-color: black;
`;

const Index = () => {
  return (
    <HomePage>
      <ImageWrapper>
        <Image src="/images/welcoming.png" width={1440} height={789}></Image>
        <Question>Do you identify as a:</Question>
      </ImageWrapper>
      <Footer></Footer>
    </HomePage>
  );
};

export default Index;
