import { useEffect } from "react";
import styled from "styled-components";
import { useTypeSelector } from "../../hooks/useTypeSelector";
import { useDispatch } from "react-redux";
import { asyncSetUserAction } from "../../store/reducers/action-creators/user";
const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  font: 13px/27px Roboto, Arial, sans-serif;
  width: 100%;
`;

const FormWrapper = styled.div`
  padding: 0 30px 0 10px;
  height: 48px;
  width: 100%;
`;

const Form = styled.form`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  background: #f1f3f4;
  border: 1px solid transparent;
  border-radius: 8px;
  max-width: 720px;
  min-width: 320px;
  width: 100%;
  height: 48px;
  position: relative;
  margin-top: 0;
  color: black;
  box-sizing: border-box;
`;
const Input = styled.input`
  cursor: text;
  height: 30px;
  border: none;
  padding: 0px;
  margin: 0px;
  width: 80%;
  background: none;
  font-size: 16px;
  outline: none;
  &::placeholder {
    letter-spacing: 1px;
    font-size: 14px;
    word-spacing: normal;
  }
`;
const Button = styled.button`
  height: 70%;
  width: 56px;
  padding: 0 5px;
  box-sizing: border-box;
  border: none;
  opacity: 0.6;
  cursor: pointer;
`;
const Bar = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  height: 44px;
`;
const Status = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  font-family: "Google Sans", Roboto, RobotoDraft, Helvetica, Arial, sans-serif;
  font-size: 0.875rem;
  letter-spacing: 0.25px;
  background: none;
  box-sizing: border-box;
  color: #5f6368;
  cursor: pointer;
  font-weight: 500;
  height: 36px;
  min-width: 80px;
  width: 120px;
  padding: 0 8px;
  margin: 0 12px 0;
  border: 1px solid #dadce0;
  border-radius: 18px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`;
const Content = styled.div`
  width: 44px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.6;
`;
const Circle = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: green;
  margin: 0 4px;
`;
const Text = styled.div`
  margin-left: 4px;
  line-height: 0;
`;
const Open = styled.div`
  display: flex;
  align-items: center;
  opacity: 0.6;
`;

const Search = () => {
  const { users, error, loading } = useTypeSelector((state) => state.user);

  return (
    <Container>
      
      <FormWrapper>
        <Form onSubmit={(e) => e.preventDefault()}>
          <Button>
            <svg
              focusable="false"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20.49,19l-5.73-5.73C15.53,12.2,16,10.91,16,9.5C16,5.91,13.09,3,9.5,3S3,5.91,3,9.5C3,13.09,5.91,16,9.5,16 c1.41,0,2.7-0.47,3.77-1.24L19,20.49L20.49,19z M5,9.5C5,7.01,7.01,5,9.5,5S14,7.01,14,9.5S11.99,14,9.5,14S5,11.99,5,9.5z"></path>
              <path d="M0,0h24v24H0V0z" fill="none"></path>
            </svg>
          </Button>
          <Input placeholder="Поиск людей, чат-групп и сообщений" />
        </Form>
      </FormWrapper>

      <Bar>
        <Status>
          <Wrapper>
            <Circle></Circle>
            <Text>Онлайн</Text>
          </Wrapper>

          <Open>
            <svg width="24px" height="24px" viewBox="0 0 24 24">
              <path d="M7 10l5 5 5-5z"></path>
              <path d="M0 0h24v24H0z" fill="none"></path>
            </svg>
          </Open>
        </Status>

        <Content>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            fill="#000000"
            focusable="false"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"></path>
          </svg>
        </Content>
        <Content>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M13.85 22.25h-3.7c-.74 0-1.36-.54-1.45-1.27l-.27-1.89c-.27-.14-.53-.29-.79-.46l-1.8.72c-.7.26-1.47-.03-1.81-.65L2.2 15.53c-.35-.66-.2-1.44.36-1.88l1.53-1.19c-.01-.15-.02-.3-.02-.46 0-.15.01-.31.02-.46l-1.52-1.19c-.59-.45-.74-1.26-.37-1.88l1.85-3.19c.34-.62 1.11-.9 1.79-.63l1.81.73c.26-.17.52-.32.78-.46l.27-1.91c.09-.7.71-1.25 1.44-1.25h3.7c.74 0 1.36.54 1.45 1.27l.27 1.89c.27.14.53.29.79.46l1.8-.72c.71-.26 1.48.03 1.82.65l1.84 3.18c.36.66.2 1.44-.36 1.88l-1.52 1.19c.01.15.02.3.02.46s-.01.31-.02.46l1.52 1.19c.56.45.72 1.23.37 1.86l-1.86 3.22c-.34.62-1.11.9-1.8.63l-1.8-.72c-.26.17-.52.32-.78.46l-.27 1.91c-.1.68-.72 1.22-1.46 1.22zm-3.23-2h2.76l.37-2.55.53-.22c.44-.18.88-.44 1.34-.78l.45-.34 2.38.96 1.38-2.4-2.03-1.58.07-.56c.03-.26.06-.51.06-.78s-.03-.53-.06-.78l-.07-.56 2.03-1.58-1.39-2.4-2.39.96-.45-.35c-.42-.32-.87-.58-1.33-.77l-.52-.22-.37-2.55h-2.76l-.37 2.55-.53.21c-.44.19-.88.44-1.34.79l-.45.33-2.38-.95-1.39 2.39 2.03 1.58-.07.56a7 7 0 0 0-.06.79c0 .26.02.53.06.78l.07.56-2.03 1.58 1.38 2.4 2.39-.96.45.35c.43.33.86.58 1.33.77l.53.22.38 2.55z"></path>
            <circle cx="12" cy="12" r="3.5"></circle>
          </svg>
        </Content>
      </Bar>
    </Container>
  );
};
export default Search;
