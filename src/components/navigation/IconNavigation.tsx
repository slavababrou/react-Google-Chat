import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  margin-left: 16px;
  padding-right: 16px;
`;

const IconNavigation = (props: any) => {
  return <Container>{props.children}</Container>;
};

export default IconNavigation;
