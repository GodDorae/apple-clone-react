import { Fragment } from "react";
import styled from "styled-components";

const Nav = styled.nav`
  padding: 0 1rem;
  position: absolute;
  left: 0;
  width: 100%;
  z-index: 10;
`;

const GlobalNav = styled(Nav)`
  top: 0;
  height: 44px;
`;

const LocalNav = styled(Nav)`
  top: 44px;
  height: 52px;
  border-bottom: 1px solid #ddd;
`;

const Links = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
`;

const GlobalLinks = styled(Links)`
  justify-content: space-between;
`;

const LocalLinks = styled(Links)`
  & > a {
    font-size: 0.8rem;
    margin-left: 2rem;
  }

  & > a:first-child {
    margin-left: 0;
    margin-right: auto;
    font-size: 1.2rem;
    font-weight: bold;
  }
`;

function Navigation() {
  return (
    <Fragment>
      <GlobalNav>
        <GlobalLinks>
          <a href="#">Rooms</a>
          <a href="#">Ideas</a>
          <a href="#">Stores</a>
          <a href="#">Contact</a>
        </GlobalLinks>
      </GlobalNav>
      <LocalNav>
        <LocalLinks>
          <a href="#">Airmug Pro</a>
          <a href="#">개요</a>
          <a href="#">제품사양</a>
          <a href="#">구입하기</a>
        </LocalLinks>
      </LocalNav>
    </Fragment>
  );
}

export default Navigation;
