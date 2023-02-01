import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  gap: 10px;
  border-left: 1px solid rgb(0, 0, 0, 0.05);
  box-sizing: border-box;
`;
const Wrapper = styled.div`
  height: 56px;
  width: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Item = styled.div<{ url: string }>`
  width: 40px;
  height: 40px;
  background-color: transparent;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 20px 20px;
  border-radius: 50%;
  cursor: pointer;
  background-image: url(${(props) => props.url});
`;

const TabList = () => {
  return (
    <Container>
      <Wrapper>
        <Item
          url={
            "https://www.gstatic.com/companion/icon_assets/calendar_2020q4_2x.png"
          }
        />
      </Wrapper>
      <Wrapper>
        <Item
          url={
            "https://www.gstatic.com/companion/icon_assets/keep_2020q4v3_2x.png"
          }
        />
      </Wrapper>
      <Wrapper>
        <Item
          url={
            "https://www.gstatic.com/companion/icon_assets/tasks_2021_2x.png"
          }
        />
      </Wrapper>
      <Wrapper>
        <Item
          url={
            "https://www.gstatic.com/companion/icon_assets/contacts_2022_2x.png"
          }
        />
      </Wrapper>
    </Container>
  );
};

export default TabList;
