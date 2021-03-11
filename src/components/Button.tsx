import React from "react";
import styled from "styled-components";

const Container = styled.button`
  background-color: black;
  color: white;
`;

interface Props {
  content: string;
}

const Button = ({ content }: Props): JSX.Element => {
  return <Container>{content}</Container>;
};

export default Button;
