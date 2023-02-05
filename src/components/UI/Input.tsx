import React from "react";
import styled from "styled-components";
const StyledInput = styled.div`
  display: flex;

  input {
    height: 36px;
    border: none;
    outline: none;
    font: inherit;
    text-align: left;
    width: 100%;
    padding: 0 0.4em;
    font-size: 0.88em;

  }
`;
const Input = React.forwardRef((props: any, ref: any) => {
  return (
    <StyledInput>
      <input
        ref={ref}
        onChange={props.searchHandler}
        placeholder="Добавьте одного или нескольких пользователей"
      />
    </StyledInput>
  );
});

export default Input;
