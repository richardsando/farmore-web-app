import styled from "styled-components";

const UnstyledLink = styled.a`
  text-decoration: none;
  color: inherit;
  transition: color 0.15s;
  font-family: Impact;
  font-size: 23px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 2px;
  text-align: left;

  &:hover {
    cursor: pointer;
  }
`;

export default UnstyledLink;
