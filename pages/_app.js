import { Normalize } from "styled-normalize";
import styled from "styled-components";
import Nav from "../components/Nav";
import "./_app.css"
import Footer from '../components/Footer'

const Container = styled.div`
  font-size: 23px;
  font-weight: 400;
  background-color: #000000;
`;

function MyApp({ Component, pageProps }) {
  return (
    <Container>
      <Normalize /> <Nav></Nav>
      <Component {...pageProps} />
  
    </Container>
  );
}

export default MyApp;
