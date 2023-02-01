import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  padding: 0 30px 0 0;
  height: 48px;
  min-width: 302px;
  box-sizing: border-box;
`;
const Burger = styled.div`
  width: 48px;
  height: 48px;
  padding: 12px;
  margin: 0 4px;
  box-sizing: border-box;
  opacity: 0.6;
  cursor: pointer;
`;
const Img = styled.div`
  display: flex;
  img {
    margin: 0 0 4px;
    cursor: pointer;
    &:focus {
      outline: none;
    }
  }
`;

const Menu = (props: any) => {
  return (
    <Container>
      <Burger onClick={props.onToogleMenu}>
        <svg focusable='false' viewBox='0 0 24 24'>
          <path d='M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z'></path>
        </svg>
      </Burger>
      <Img>
        <img
          alt='logo'
          src='https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_chat_default_1x.png'
        ></img>
      </Img>
    </Container>
  );
};
export default Menu;
