import Account from "./Account";
import Menu from "./Menu";
import Search from "./Search";

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  width: 100%;
  height: 64px;
  border-bottom: 1px solid rgb(0, 0, 0, 0.05);
  box-sizing: border-box;
  padding: 8px;
`;

const Header = (props: any) => {
  return (
    <Container>
      <Menu onToogleMenu={props.onToogleMenu} />
      <Search />
      <Account login={props.login} logoutHandler={props.logoutHandler} />
    </Container>
  );
};

export default Header;
