import Chat from "../chats/Chat";
import ChatGroup from "../chats/ChatGroup";
import Meets from "./Meets";

import styled from "styled-components";

const Container = styled.div<{ active: boolean }>`
  display: flex;
  flex-flow: column nowrap;

  height: calc(100vh - 64px);
  max-width: 320px !important;
  width: 30%;
  border-right: 1px solid rgb(0, 0, 0, 0.05);
  box-sizing: border-box;

  color: #333;
  width: ${(props) => (props.active ? "72px" : "30%")};
`;

const Navigation = (props: any) => {
  return (
    <Container active={props.isMenuActive}>
      <Chat isMenuActive={props.isMenuActive} />
      <ChatGroup isMenuActive={props.isMenuActive} />
      <Meets isMenuActive={props.isMenuActive} />
    </Container>
  );
};

export default Navigation;
