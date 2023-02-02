import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LogIn from "./components/login/LogIn";
import Application from "./components/Application/Application";
import GlobalStyles from "./styles/global";

function App() {
  const [isMenuActive, setIsMenuActive] = useState(true);
  const [isLogIn, setIsLogIn] = useState(false);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const toogleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };
  const isLogInHandler = (handler: boolean) => {
    setIsLogIn(handler);
  };
  const loginInputHandler = (handler: string) => {
    setLogin(handler);
  };
  const passwordInputHandler = (handler: string) => {
    setPassword(handler);
  };

  return (
    <>
      <Routes>
        {!isLogIn ? (
          <Route
            path='/auth'
            element={
              <>
                <LogIn
                  isLogInHandler={isLogInHandler}
                  loginInputHandler={loginInputHandler}
                  login={login}
                  passwordInputHandler={passwordInputHandler}
                  password={password}
                />
              </>
            }
          />
        ) : (
          <Route
            path='/app'
            element={
              <Application
                toogleMenu={toogleMenu}
                login={login}
                isLogInHandler={isLogInHandler}
                isMenuActive={isMenuActive}
              />
            }
          />
        )}

        <Route
          path='*'
          element={<Navigate to={isLogIn ? "/app" : "/auth"} />}
        />
      </Routes>
      <GlobalStyles />
    </>
  );
}

export default App;
