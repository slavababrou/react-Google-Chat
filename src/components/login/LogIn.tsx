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
  font-size: inherit;
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
  const loginRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [isLoginEntered, setIsLoginEntered] = useState(false);

  const setLogin = () => {
    if (!loginRef.current?.value.trim()) return;
    props.onLoginInputHandler(loginRef.current?.value.trim());
    setIsLoginEntered(true);
    loginRef.current.value = "";
  };
  const setPassword = () => {
    if (!passwordRef.current?.value.trim()) return;
    props.onPasswordInputHandler(passwordRef.current?.value.trim());
    passwordRef.current.value = "";
    props.onIsLogInHandler(true);
  };
  const isLoginEnteredHandler = () => {
    setIsLoginEntered(false);
  };

  return (
    <React.Fragment>
      {isLoginEntered && (
        <Container>
          <LoginWrapper>
            <Content>
              <Logo>
                <svg
                  viewBox='0 0 75 24'
                  width='75'
                  height='24'
                  xmlns='http://www.w3.org/2000/svg'
                  aria-hidden='true'
                >
                  <g id='qaEJec'>
                    <path
                      fill='#ea4335'
                      d='M67.954 16.303c-1.33 0-2.278-.608-2.886-1.804l7.967-3.3-.27-.68c-.495-1.33-2.008-3.79-5.102-3.79-3.068 0-5.622 2.41-5.622 5.96 0 3.34 2.53 5.96 5.92 5.96 2.73 0 4.31-1.67 4.97-2.64l-2.03-1.35c-.673.98-1.6 1.64-2.93 1.64zm-.203-7.27c1.04 0 1.92.52 2.21 1.264l-5.32 2.21c-.06-2.3 1.79-3.474 3.12-3.474z'
                    ></path>
                  </g>
                  <g id='YGlOvc'>
                    <path
                      fill='#34a853'
                      d='M58.193.67h2.564v17.44h-2.564z'
                    ></path>
                  </g>
                  <g id='BWfIk'>
                    <path
                      fill='#4285f4'
                      d='M54.152 8.066h-.088c-.588-.697-1.716-1.33-3.136-1.33-2.98 0-5.71 2.614-5.71 5.98 0 3.338 2.73 5.933 5.71 5.933 1.42 0 2.548-.64 3.136-1.36h.088v.86c0 2.28-1.217 3.5-3.183 3.5-1.61 0-2.6-1.15-3-2.12l-2.28.94c.65 1.58 2.39 3.52 5.28 3.52 3.06 0 5.66-1.807 5.66-6.206V7.21h-2.48v.858zm-3.006 8.237c-1.804 0-3.318-1.513-3.318-3.588 0-2.1 1.514-3.635 3.318-3.635 1.784 0 3.183 1.534 3.183 3.635 0 2.075-1.4 3.588-3.19 3.588z'
                    ></path>
                  </g>
                  <g id='e6m3fd'>
                    <path
                      fill='#fbbc05'
                      d='M38.17 6.735c-3.28 0-5.953 2.506-5.953 5.96 0 3.432 2.673 5.96 5.954 5.96 3.29 0 5.96-2.528 5.96-5.96 0-3.46-2.67-5.96-5.95-5.96zm0 9.568c-1.798 0-3.348-1.487-3.348-3.61 0-2.14 1.55-3.608 3.35-3.608s3.348 1.467 3.348 3.61c0 2.116-1.55 3.608-3.35 3.608z'
                    ></path>
                  </g>
                  <g id='vbkDmc'>
                    <path
                      fill='#ea4335'
                      d='M25.17 6.71c-3.28 0-5.954 2.505-5.954 5.958 0 3.433 2.673 5.96 5.954 5.96 3.282 0 5.955-2.527 5.955-5.96 0-3.453-2.673-5.96-5.955-5.96zm0 9.567c-1.8 0-3.35-1.487-3.35-3.61 0-2.14 1.55-3.608 3.35-3.608s3.35 1.46 3.35 3.6c0 2.12-1.55 3.61-3.35 3.61z'
                    ></path>
                  </g>
                  <g id='idEJde'>
                    <path
                      fill='#4285f4'
                      d='M14.11 14.182c.722-.723 1.205-1.78 1.387-3.334H9.423V8.373h8.518c.09.452.16 1.07.16 1.664 0 1.903-.52 4.26-2.19 5.934-1.63 1.7-3.71 2.61-6.48 2.61-5.12 0-9.42-4.17-9.42-9.29C0 4.17 4.31 0 9.43 0c2.83 0 4.843 1.108 6.362 2.56L14 4.347c-1.087-1.02-2.56-1.81-4.577-1.81-3.74 0-6.662 3.01-6.662 6.75s2.93 6.75 6.67 6.75c2.43 0 3.81-.972 4.69-1.856z'
                    ></path>
                  </g>
                </svg>
              </Logo>
              <Enter>
                <EnterText>{greetingText}</EnterText>
                <BtnLogout onClick={isLoginEnteredHandler}>
                  <ImgEnter
                    src='https://lh3.googleusercontent.com/a/AEdFTp6rcIvtO1leC0lhwRoJFmLrAfa5-juDQZxwjdmILA=s128-c'
                    alt=''
                    height='20px'
                    width='20px'
                  />
                  <Login>{props.login}</Login>
                  <svg
                    aria-hidden='true'
                    fill='currentColor'
                    focusable='false'
                    width='24px'
                    height='24px'
                    viewBox='0 0 24 24'
                    xmlns='https://www.w3.org/2000/svg'
                  >
                    <polygon points='12,16.41 5.29,9.71 6.71,8.29 12,13.59 17.29,8.29 18.71,9.71'></polygon>
                  </svg>
                </BtnLogout>
              </Enter>

              <ContainerWrapper>
                <ContainerWrapperWrapper height={"100px"}>
                  <ContainerWrapperContent>
                    <InptContainerWrapperContent
                      placeholder='Введите пароль'
                      ref={passwordRef}
                    ></InptContainerWrapperContent>
                    <InputWrapper>
                      <LblInputWrapper>
                        <InptInputWrapper type='checkbox' />
                        {showPasswordText}
                      </LblInputWrapper>
                    </InputWrapper>
                  </ContainerWrapperContent>
                </ContainerWrapperWrapper>

                <ContentFooter>
                  <ContentFooterText>{changeWayText}</ContentFooterText>
                  <BtnNext onClick={setPassword}>{nextText}</BtnNext>
                </ContentFooter>
              </ContainerWrapper>
            </Content>
          </LoginWrapper>

          <Footer>
            <Language>{languageText}</Language>
            <UlFooter>
              <LiFooter>{referenceText}</LiFooter>
              <LiFooter>{privacyText}</LiFooter>
              <LiFooter>{conditionsText}</LiFooter>
            </UlFooter>
          </Footer>
        </Container>
      )}
      {!isLoginEntered && (
        <Container>
          <LoginWrapper>
            <Content>
              <Logo>
                <svg
                  viewBox='0 0 75 24'
                  width='75'
                  height='24'
                  xmlns='http://www.w3.org/2000/svg'
                  aria-hidden='true'
                >
                  <g id='qaEJec'>
                    <path
                      fill='#ea4335'
                      d='M67.954 16.303c-1.33 0-2.278-.608-2.886-1.804l7.967-3.3-.27-.68c-.495-1.33-2.008-3.79-5.102-3.79-3.068 0-5.622 2.41-5.622 5.96 0 3.34 2.53 5.96 5.92 5.96 2.73 0 4.31-1.67 4.97-2.64l-2.03-1.35c-.673.98-1.6 1.64-2.93 1.64zm-.203-7.27c1.04 0 1.92.52 2.21 1.264l-5.32 2.21c-.06-2.3 1.79-3.474 3.12-3.474z'
                    ></path>
                  </g>
                  <g id='YGlOvc'>
                    <path
                      fill='#34a853'
                      d='M58.193.67h2.564v17.44h-2.564z'
                    ></path>
                  </g>
                  <g id='BWfIk'>
                    <path
                      fill='#4285f4'
                      d='M54.152 8.066h-.088c-.588-.697-1.716-1.33-3.136-1.33-2.98 0-5.71 2.614-5.71 5.98 0 3.338 2.73 5.933 5.71 5.933 1.42 0 2.548-.64 3.136-1.36h.088v.86c0 2.28-1.217 3.5-3.183 3.5-1.61 0-2.6-1.15-3-2.12l-2.28.94c.65 1.58 2.39 3.52 5.28 3.52 3.06 0 5.66-1.807 5.66-6.206V7.21h-2.48v.858zm-3.006 8.237c-1.804 0-3.318-1.513-3.318-3.588 0-2.1 1.514-3.635 3.318-3.635 1.784 0 3.183 1.534 3.183 3.635 0 2.075-1.4 3.588-3.19 3.588z'
                    ></path>
                  </g>
                  <g id='e6m3fd'>
                    <path
                      fill='#fbbc05'
                      d='M38.17 6.735c-3.28 0-5.953 2.506-5.953 5.96 0 3.432 2.673 5.96 5.954 5.96 3.29 0 5.96-2.528 5.96-5.96 0-3.46-2.67-5.96-5.95-5.96zm0 9.568c-1.798 0-3.348-1.487-3.348-3.61 0-2.14 1.55-3.608 3.35-3.608s3.348 1.467 3.348 3.61c0 2.116-1.55 3.608-3.35 3.608z'
                    ></path>
                  </g>
                  <g id='vbkDmc'>
                    <path
                      fill='#ea4335'
                      d='M25.17 6.71c-3.28 0-5.954 2.505-5.954 5.958 0 3.433 2.673 5.96 5.954 5.96 3.282 0 5.955-2.527 5.955-5.96 0-3.453-2.673-5.96-5.955-5.96zm0 9.567c-1.8 0-3.35-1.487-3.35-3.61 0-2.14 1.55-3.608 3.35-3.608s3.35 1.46 3.35 3.6c0 2.12-1.55 3.61-3.35 3.61z'
                    ></path>
                  </g>
                  <g id='idEJde'>
                    <path
                      fill='#4285f4'
                      d='M14.11 14.182c.722-.723 1.205-1.78 1.387-3.334H9.423V8.373h8.518c.09.452.16 1.07.16 1.664 0 1.903-.52 4.26-2.19 5.934-1.63 1.7-3.71 2.61-6.48 2.61-5.12 0-9.42-4.17-9.42-9.29C0 4.17 4.31 0 9.43 0c2.83 0 4.843 1.108 6.362 2.56L14 4.347c-1.087-1.02-2.56-1.81-4.577-1.81-3.74 0-6.662 3.01-6.662 6.75s2.93 6.75 6.67 6.75c2.43 0 3.81-.972 4.69-1.856z'
                    ></path>
                  </g>
                </svg>
              </Logo>
              <Enter>
                <EnterText>{enterArticleText}</EnterText>
                <div>{enterText}</div>
              </Enter>

              <ContainerWrapper>
                <ContainerWrapperWrapper>
                  <ContainerWrapperContent>
                    <InptContainerWrapperContent
                      placeholder='Телефон или адрес эл. почты'
                      ref={loginRef}
                    ></InptContainerWrapperContent>
                    <BtnForgotMail>{forgotMailText}</BtnForgotMail>
                  </ContainerWrapperContent>
                  <ContainerWrapperText>
                    {alienComputerText}
                    <Details>{moreDetailsText}</Details>
                  </ContainerWrapperText>
                </ContainerWrapperWrapper>

                <ContentFooter>
                  <ContentFooterText>{createAccountText}</ContentFooterText>
                  <BtnNext onClick={setLogin}>{nextText}</BtnNext>
                </ContentFooter>
              </ContainerWrapper>
            </Content>
          </LoginWrapper>

          <Footer>
            <Language>{languageText}</Language>
            <UlFooter>
              <LiFooter>{referenceText}</LiFooter>
              <LiFooter>{privacyText}</LiFooter>
              <LiFooter>{conditionsText}</LiFooter>
            </UlFooter>
          </Footer>
        </Container>
      )}
    </React.Fragment>
  );
};

export default LogIn;
