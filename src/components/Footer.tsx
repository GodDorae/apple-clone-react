import styled from "styled-components";

const FooterElem = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 7rem;
  background-color: darkorange;
  color: white;
`;

function Footer() {
  return <FooterElem>2022.7 Dohyun Lee</FooterElem>;
}

export default Footer;
