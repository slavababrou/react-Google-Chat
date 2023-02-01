import { useState } from "react";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Navigation from "./components/navigation/Navigation";
import TabList from "./components/tabList/TabList";
import LogIn from "./components/login/LogIn";

import styled from "styled-components";
import GlobalStyles from "./styles/global";

const Flex = styled.div<{ flow?: string }>`
  display: flex;
  flex-flow: ${(props) => props.flow || "row"} nowrap;
`;

function App() {
  const [isMenuActive, setIsMenuActive] = useState(true);
  const [isLogIn, setIsLogIn] = useState(false);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  function toogleMenu() {
    setIsMenuActive(!isMenuActive);
  }
  function isLogInHandler(handler: boolean) {
    setIsLogIn(handler);
  }
  function loginInputHandler(handler: string) {
    setLogin(handler);
  }
  function passwordInputHandler(handler: string) {
    setPassword(handler);
  }

  if (!isLogIn)
    return (
      <>
        <LogIn
          onIsLogInHandler={isLogInHandler}
          onLoginInputHandler={loginInputHandler}
          login={login}
          onPasswordInputHandler={passwordInputHandler}
          password={password}
        />
        <GlobalStyles />
      </>
    );

  return (
    <Flex flow='column'>
      <Header
        onToogleMenu={toogleMenu}
        login={login}
        logoutHandler={isLogInHandler}
      />
      <Flex>
        <Navigation isMenuActive={isMenuActive} />
        <Main />
        <TabList />
      </Flex>
      <GlobalStyles />
    </Flex>
  );
}

export default App;
