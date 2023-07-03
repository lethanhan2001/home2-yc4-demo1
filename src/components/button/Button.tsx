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
  letter-spacing: 1.8px;
  border: none;
  outline: none;
  font-family: "Poppins", sans-serif;
`;

interface ChildButton {
  children: React.ReactNode;
}

const Button = ({ children }: ChildButton) => {
  return <Buttons>{children}</Buttons>;
};

export default Button;
