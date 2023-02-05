import React, { FC } from "react";
import styled from "styled-components";

interface BorderLineProps {
    margin?: string;
    padding?: string;
}

const StyledLine = styled.div<BorderLineProps>`
  border-bottom: 0.1px solid #7b7b7b;
  margin:${props=>props.margin||'0'};
  padding:${props=>props.padding||'0'};
`;

const BorderLine: FC<BorderLineProps> = props => {
  return <StyledLine {...props}></StyledLine>;
};

export default BorderLine;
