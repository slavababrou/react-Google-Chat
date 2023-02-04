import NavigationContent from "../UI/NavigationContent";
import IconNavigation from "../navigation/IconNavigation";

import styled from "styled-components";
import { useState } from "react";
import AddChatModal from "./AddChatModal";

const Icon = styled.div`
  width: 20px;
  height: 20px;
  background-image: url(//ssl.gstatic.com/ui/v1/icons/mail/rfr/chat_dm_20_green_1x.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: 20px;
`;

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`;
const Btn = styled.button`
  border: 0;
  width: 20px;
  height: 20px;
  cursor: pointer;
`;
const BtnOpen = styled(Btn)`
  background-image: url(https://www.gstatic.com/images/icons/material/system/1x/arrow_right_black_20dp.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: 20px;
  background-color: white;
  margin: 3px;
`;
export const BtnAdd = styled(Btn)`
  position: relative;
  background: none;
  background-image: url(//ssl.gstatic.com/ui/v1/icons/mail/rfr/chat_plus_20_green_1x.png);
  background-position: center;
  background-repeat: no-repeat;

  opacity: 1;
  padding: 15px;

  &:hover {
    background-color: rgba(32, 33, 36, 0.059);
    border-radius: 50%;
  }
`;
let chatText: string = "Чат";

const Chat = (props: any) => {
  const [isOpen, setIsOpen] = useState(false);
  if (props.isMenuActive)
    return (
      <IconNavigation>
        <Icon />
      </IconNavigation>
    );


  const openAddDialogHandler = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
    
  };
  return (
    <NavigationContent>
      <Container>
        <BtnOpen />
        <span>{chatText}</span>
      </Container>
      <BtnAdd onClick={openAddDialogHandler} />
      {isOpen && <AddChatModal setClose={openAddDialogHandler} />}
    </NavigationContent>
  );
};

export default Chat;
