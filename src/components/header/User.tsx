import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-items: center;
  width: 350px;
  height: 420px;
  position: absolute;
  top: 58px;
  left: calc(100% - 370px);
  border-radius: 10px;
  border: 1px solid rgb(197, 197, 197);
  box-shadow: 0 0 10px rgb(208, 208, 208);
  background: white;
  hr {
    display: block;
    width: 100%;
    height: 1px;
    border: none;
    border-top: 1px solid rgb(204, 200, 200);
    margin: 0;
  }
`;
const Account = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  margin: 15px 0;
  position: relative;
  img {
    border-radius: 50%;
    height: 90px;
    width: 90px;
    position: relative;
  }
`;
const UserName = styled.span`
  margin: 20px 0 0 0;
  font-weight: bold;
  font-size: 16px;
  font-family: sans-serif;
`;

const Login = styled.div`
  margin: 5px 0 15px 0;
  color: rgb(131, 131, 131);
  font-family: sans-serif;
`;
const BtnControleAccount = styled.button`
  background: white;
  border: 1px solid rgb(192, 192, 192);
  padding: 10px 15px;
  border-radius: 20px;
  font-family: sans-serif;
  color: rgb(67, 67, 67);
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    background: rgb(250, 250, 250);
  }
`;

const WrapperAddAccount = styled.div`
  display: flex;
  justify-content: center;
  padding: 16px 0;
  box-sizing: border-box;
  cursor: pointer;
  &:hover {
    background: rgb(250, 250, 250);
  }
`;

const BtnAddAcc = styled.button`
  background: none;
  font-family: sans-serif;
  font-weight: bold;
  color: rgb(67, 67, 67);
  border: none;
  cursor: pointer;
  position: relative;
  &::after {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    left: -30px;
    background-image: url("/public/images/user.png");
  }
`;
const ExitWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 16px 0;
`;
const BtnExit = styled(Link)`
  background: white;
  border: 1px solid rgb(192, 192, 192);
  padding: 13px 30px;
  border-radius: 5px;
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  font-weight: bold;
  color: rgb(67, 67, 67);
  cursor: pointer;
  text-decoration: none;
  &:hover {
    background: rgb(250, 250, 250);
  }
`;
const Footer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  word-break: break-all;
`;
const Text = styled.span`
  cursor: pointer;
  color: rgb(64, 64, 64);
  font-family: arial, helvetica, sans-serif;
  font-size: 13px;
  font-weight: 300;
  word-break: break-all;
  padding: 5px;
  border-radius: 5px;
  &:hover {
    background: rgb(245, 245, 245);
  }
`;

const userNameText: string = "User Name";
const controleAccountText: string = "Управление аккаунтом Google";
const logoutText: string = "Выйти";
const policyText: string = "Политика конфидециальности";
const useRuleText: string = "Условия Использования";
const addAccountText: string = "Добавить аккаунт";

const User = (props: any) => {
  return (
    <Container>
      <Account>
        <img
          src='https://lh3.googleusercontent.com/a/AEdFTp6rcIvtO1leC0lhwRoJFmLrAfa5-juDQZxwjdmILA=s128-c'
          alt=''
        />
        <UserName>{userNameText}</UserName>
        <Login>{props.login}</Login>
        <BtnControleAccount>{controleAccountText}</BtnControleAccount>
      </Account>
      <hr />
      <WrapperAddAccount>
        <BtnAddAcc>{addAccountText}</BtnAddAcc>
      </WrapperAddAccount>
      <hr />
      <ExitWrapper>
        <BtnExit to='/auth' onClick={props.logout}>
          {logoutText}
        </BtnExit>
      </ExitWrapper>
      <hr />
      <Footer>
        <Text>{policyText}</Text>
        <Text>{useRuleText}</Text>
      </Footer>
    </Container>
  );
};

export default User;
