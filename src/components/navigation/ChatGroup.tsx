import NavigationContent from "../UI/NavigationContent";
import IconNavigation from "./IconNavigation";
import styled from "styled-components";

const Icon = styled.div`
  width: 20px;
  height: 20px;
  background-image: url("//ssl.gstatic.com/ui/v1/icons/mail/rfr/chat_room_20_green_1x.png");
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
const BtnAdd = styled(Btn)`
  position: relative;
  background: none;
  background-image: url(//ssl.gstatic.com/ui/v1/icons/mail/rfr/chat_plus_20_green_1x.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: 20px;
  opacity: 1;
  margin: 3px;
`;
let chatGroupText: string = "Чат-группы";

const ChatGroup = (props: any) => {
  if (props.isMenuActive)
    return (
      <IconNavigation>
        <Icon />
      </IconNavigation>
    );

  return (
    <NavigationContent>
      <Container>
        <BtnOpen />
        <span>{chatGroupText}</span>
      </Container>
      <BtnAdd />
    </NavigationContent>
  );
};

export default ChatGroup;
