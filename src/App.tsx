import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LogIn from "./components/login/LogIn";
import Application from "./components/Application/Application";
import GlobalStyles from "./styles/global";
import store from "./store";
import { Provider } from "react-redux";

function App() {
  const [isMenuActive, setIsMenuActive] = useState(true);
  const [isLogIn, setIsLogIn] = useState(false);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setIsLogIn(true);
    }
  }, []);

  const toogleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };
  const isLogInHandler = (handler: boolean) => {
    setIsLogIn(handler);
    localStorage.setItem("auth",'true');
  };
  const loginInputHandler = (handler: string) => {
    setLogin(handler);
  };
  const passwordInputHandler = (handler: string) => {
    setPassword(handler);
  };

  return (
    <Provider store={store}>
      <Routes>
        {!isLogIn ? (
          <Route
            path="/auth"
            element={
              <>
                <LogIn
                  onIsLogInHandler={isLogInHandler}
                  onLoginInputHandler={loginInputHandler}
                  login={login}
                  onPasswordInputHandler={passwordInputHandler}
                  password={password}
                />
              </>
            }
          />
        ) : (
          <Route
            path="/app"
            element={
              <Application
                isLogin={isLogIn}
                toogleMenu={toogleMenu}
                login={login}
                isLogInHandler={isLogInHandler}
                isMenuActive={isMenuActive}
              />
            }
          />
        )}

        <Route
          path="*"
          element={<Navigate to={isLogIn ? "/app" : "/auth"} />}
        />
      </Routes>
      <GlobalStyles />
    </Provider>
  );
}

export default App;
