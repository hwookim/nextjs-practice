import React from "react";
import styled from "styled-components";
import MButton from "@material-ui/core/Button";
import { StylesProvider } from "@material-ui/styles";

const Container = styled(MButton)`
  background-color: black;
  color: white;
`;

interface Props {
  content: string;
}

const Button = ({ content }: Props): JSX.Element => {
  return (
    <StylesProvider injectFirst>
      <Container>{content}</Container>
    </StylesProvider>
  );
};

export default Button;
