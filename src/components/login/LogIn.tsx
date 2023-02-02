import { useState } from "react";
import SetPassword from "./SetPassword";
import SetLogin from "./SetLogin";
import { Routes, Route } from "react-router-dom";

const LogIn = (props: any) => {
  const [isLoginEntered, setIsLoginEntered] = useState(false);

  const isLoginEnteredHandler = (handler: boolean) =>
    setIsLoginEntered(handler);

  return (
    <Routes>
      {isLoginEntered ? (
        <Route
          path=''
          element={
            <SetPassword
              isLogInHandler={props.isLogInHandler}
              isLoginEnteredHandler={isLoginEnteredHandler}
              passwordInputHandler={props.passwordInputHandler}
              login={props.login}
            />
          }
        />
      ) : (
        <Route
          path=''
          element={
            <SetLogin
              isLoginEnteredHandler={isLoginEnteredHandler}
              loginInputHandler={props.loginInputHandler}
            />
          }
        />
      )}
    </Routes>
  );
};

export default LogIn;
