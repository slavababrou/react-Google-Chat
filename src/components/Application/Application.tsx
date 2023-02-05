import Header from "../header/Header";
import Main from "../main/Main";
import Navigation from "../navigation/Navigation";
import TabList from "../tabList/TabList";
import styled from "styled-components";

const Flex = styled.div<{ flow?: string }>`
  display: flex;
  flex-flow: ${(props) => props.flow || "row"} nowrap;
`;

const Application = (props: any) => {
  return (
    <Flex flow='column'>
      <Header
        onToogleMenu={props.toogleMenu}
        login={props.login}
        logout={() => {
          props.isLogInHandler(false);
        }}
      />
      <Flex>
        <Navigation isMenuActive={props.isMenuActive} />
        <Main />
        <TabList />
      </Flex>
    </Flex>
  );
};

export default Application;
