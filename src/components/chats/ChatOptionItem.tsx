import React, { FC, PropsWithChildren } from "react";
import styled from "styled-components";
import Card from "../UI/Card";

const ChatOptionContainer = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  padding:5px 0;
  &:hover {
    background: rgb(241, 243, 244);
  }
`;
interface ChatOptionItemProps {
  imgUrl: string;
}

const ChatOptionItem: FC<PropsWithChildren<ChatOptionItemProps>> = ({
  children,
  imgUrl,
}) => {
  return (
    <ChatOptionContainer>
      <img src={imgUrl}></img>
      <Card color=" rgb(60,64,67)" fontSize={0.8}>
        {children}
      </Card>
    </ChatOptionContainer>
  );
};

export default ChatOptionItem;
