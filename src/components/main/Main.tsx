import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 64px);
  box-sizing: border-box;
  display: flex;
  flex-flow: column;
`;
const Image = styled.div`
  width: 160px;
  height: 160px;
  background-image: url(//ssl.gstatic.com/dynamite/images/new_chat_room_1x.png);
  -webkit-background-size: cover;
  background-size: cover;
  height: 160px;
  width: 160px;
  border: none;
  box-shadow: none;
`;
const Text = styled.h1`
  -webkit-font-smoothing: antialiased;
  font-family: "Google Sans", Roboto, RobotoDraft, Helvetica, Arial, sans-serif;
  font-size: 1.375rem;
  color: #202124;
  font-weight: 400;
  margin-block-end: 8px;
  margin-block-start: 8px;
`;
const selectChatText: string = "Выберите чат.";

const Main = () => {
  return (
    <React.Fragment>
      <Container>
        <Image />
        <Text>{selectChatText}</Text>
      </Container>
    </React.Fragment>
  );
};

export default Main;
