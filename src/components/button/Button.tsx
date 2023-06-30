import React from "react";
import styled from "@emotion/styled";

const Buttons = styled.button`
  width: 160px;
  height: 58.36px;
  border-radius: 50px;
  background-color: #ff64ae;
  color: white;
  font-size: 16px;
  font-weight: 600;
  border: none;
  outline: none;
`;

interface ChildButton {
  children: React.ReactNode;
}

const Button = ({ children }: ChildButton) => {
  return <Buttons>{children}</Buttons>;
};

export default Button;
