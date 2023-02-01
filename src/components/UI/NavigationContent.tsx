import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  color: #202124;
  padding: 0 16px 0 0;

  font-family: "Google Sans", Roboto, RobotoDraft, Helvetica, Arial, sans-serif;
  font-size: 0.875rem;
  letter-spacing: 0.25px;
  font-weight: 500;
  cursor: row-resize;
  height: 40px;
  min-width: 320px;
  box-sizing: border-box;
`;

const NavigationContent = (props: any) => {
  return <Container>{props.children}</Container>;
};

export default NavigationContent;
