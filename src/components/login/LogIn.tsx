
import { useState, useRef } from "react";
import React from "react";

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 448px;
  color: #5f6368;
  font-size: 14px;
  line-height: 1.4286;
  font-family: roboto, "Noto Sans Myanmar UI", arial, sans-serif;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const LoginWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  height: 500px;
  box-sizing: border-box;
  padding: 48px 40px 36px;
  direction: ltr;
  font-size: 14px;
  border-radius: 8px;
  border: 1px solid #dadce0;
  margin: 0 auto;
  line-height: 1.4286;
`;
const Content = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;
const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Enter = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  color: #202124;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.1px;
  line-height: 1.5;
  padding: 16px 0 0;
`;
const EnterText = styled.span`
  font-family: "Google Sans", "Noto Sans Myanmar UI", arial, sans-serif;
  font-size: 24px;
  font-weight: 400;
  line-height: 1.3333;
`;
const BtnLogout = styled.button`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  border-radius: 16px;
  background: #fff;
  border: 1px solid #dadce0;
  color: #3c4043;
  cursor: pointer;
  display: inline-flex;
  font-family: "Google Sans", "Noto Sans Myanmar UI", arial, sans-serif;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.25px;
  max-width: 100%;
  text-align: center;
  margin: 10px 0 0 0;
  padding: 0 5px 0 7px;
`;
const Login = styled.div`
  padding: 5px;
`;
const ContainerWrapper = styled.div`
  padding: 24px 0 0;
`;
const ContainerWrapperWrapper = styled.div<{ height?: string }>`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  height: ${(props) => props.height || "180px"};
`;
const ContainerWrapperContent = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;
const InptContainerWrapperContent = styled.input`
  height: 54px;
  border-radius: 4px;
  border: 1px solid #dadce0;
  padding: 0 10px;
  box-sizing: border-box;
  position: relative;
  z-index: 2;
  outline: none;
  &:focus {
    border: 2px solid #1a73e8;
  }
  &:focus::placeholder {
    z-index: 1;
    opacity: 0.9;
    color: #1a73e8;
    position: absolute;
    font-size: 0.9em;
    top: -2px;
    left: 5px;
  }
`;
const InputWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 15px;
  color: #202124;
  font-size: 14px;
  line-height: 1.4286;
  height: 44px;
`;
const InptInputWrapper = styled.input`
  margin: 0 20px 0 0;
  height: 16px;
  width: 16px;
  cursor: pointer;  
`;
const LblInputWrapper = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const ContentFooter = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  margin-top: 26px;
  height: 48px;
`;
const ContentFooterText = styled.div`
  font-family: "Google Sans", Roboto, Arial, sans-serif;
  font-size: 0.875rem;
  letter-spacing: 0.0107142857em;
  font-weight: 500;
  text-transform: none;
  color: #1a73e8;
  cursor: pointer;
`;
const BtnNext = styled.button`
  font-family: "Google Sans", Roboto, Arial, sans-serif;
  font-size: 0.875rem;
  letter-spacing: 0.0107142857em;
  font-weight: 500;
  text-transform: none;
  height: 36px;
  width: 92px;
  border: 0;
  background: #1a73e8;
  border-radius: 5px;
  color: white;
  padding: 4px 0;
  cursor: pointer;
`;
const Footer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  height: 24px;
  padding: 24px 0 0;
  font-size: 12px;
  line-height: 1.4;
  box-sizing: inherit;
`;
const Language = styled.div`
  height: 100%;
  cursor: pointer;
`;
const UlFooter = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  margin: 0;
  gap: 32px;
`;
const LiFooter = styled.div`
  padding: 6px 0;
  border-radius: 2px;
  color: #757575;
  display: inline-block;
  font-size: 12px;
  line-height: 1.4;
  cursor: pointer;
  font-weight: 500;
`;
const BtnForgotMail = styled.button`
  border-radius: 4px;
  color: #1a73e8;
  display: inline-block;
  font-weight: 500;
  letter-spacing: 0.25px;
  outline: 0;
  position: relative;
  background-color: transparent;
  cursor: pointer;
  font-size: inherit;
  padding: 0;
  text-align: left;
  border: 0;
  padding: 9px 0 3px;
  font-weight: 500;
`;
const ContainerWrapperText = styled.span`
  color: #5f6368;
  font-size: 14px;
  line-height: 1.4286;
`;
const Details = styled.a`
  text-decoration: none;
  color: #1a73e8;
  font-weight: 500;
  letter-spacing: 0.25px;
  outline: 0;
  position: relative;
  background-color: transparent;
  cursor: pointer;
  font-size: inherit;Не избегать проблем ...

  padding: 0;
`;
const ImgEnter = styled.img`
  border-radius: 50%;
`;

const greetingText: string = "Добро пожаловать!";
const showPasswordText: string = "Показать пароль";
const changeWayText: string = "Выбрать другой способ";
const nextText: string = "Далее";
const languageText: string = "Русский";
const referenceText: string = "Справка";
const privacyText: string = "Конфидециальность";
const conditionsText: string = "Условия";

const enterArticleText: string = "Вход";
const enterText: string = "Используйте аккаунт Google";
const forgotMailText: string = "Забыли адрес электронной почты?";
const alienComputerText: string =
  "Работаете на чужом компьютере? Включите гостевой режим.";
const moreDetailsText: string = "Подробнее";
const createAccountText: string = "Создать аккаунт";


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
  