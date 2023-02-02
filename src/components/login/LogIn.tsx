import { useState } from "react";
import SetPassword from "./SetPassword";
import SetLogin from "./SetLogin";

const LogIn = (props: any) => {
  const [isLoginEntered, setIsLoginEntered] = useState(false);

  const isLoginEnteredHandler = (handler: boolean) =>
    setIsLoginEntered(handler);

  return isLoginEntered ? (
    <SetPassword
      isLogInHandler={props.isLogInHandler}
      isLoginEnteredHandler={isLoginEnteredHandler}
      passwordInputHandler={props.passwordInputHandler}
      login={props.login}
    />
  ) : (
    <SetLogin
      isLoginEnteredHandler={isLoginEnteredHandler}
      loginInputHandler={props.loginInputHandler}
    />
  );
};

export default LogIn;
