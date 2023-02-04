import React, { FC, PropsWithChildren, PropsWithoutRef } from "react";
import styled from "styled-components";
interface CardProps {
  color?: string;
  fontSize?: number;
}

const StyledCard = styled.div<CardProps>`
  margin: 10px 0;
  color: ${(props) => props.color || "black"};
  font-size:${props=>props.fontSize}em;

`;

const Card: FC<PropsWithChildren<CardProps>> = ({
  children,
  color,
  fontSize,
}) => {
  return (
    <StyledCard fontSize={fontSize} color={color}>
      {children}
    </StyledCard>
  );
};

export default Card;
