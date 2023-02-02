import { useState } from "react";
import User from "./User";

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;

  height: 48px;
  width: 96px;
`;

const Svg = styled.div`
  width: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.5;
`;
const Img = styled.div`
  width: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  img {
    border-radius: 50%;
    cursor: pointer;
  }
`;

const Account = (props: any) => {
  let [isUserOpen, setIsUserOpen] = useState(false);

  const isUserOpenHandler = () => setIsUserOpen(!isUserOpen);

  return (
    <Container>
      <Svg>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24px'
          height='24px'
          viewBox='0 0 24 24'
          fill='#000000'
          focusable='false'
        >
          <path fill='none' d='M0 0h24v24H0z'></path>
          <path d='M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z'></path>
        </svg>
      </Svg>
      <Img>
        <img
          onClick={isUserOpenHandler}
          alt='ava'
          src='https://lh3.googleusercontent.com/ogw/AOh-ky3VCpUP6swHXwA-fT6qtPbYaAp74UndpxKmWlm3DA=s32-c-mo'
        />
      </Img>
      {isUserOpen && <User login={props.login} logout={props.logout} />}
    </Container>
  );
};
export default Account;
