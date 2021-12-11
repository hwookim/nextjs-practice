import React, { ButtonHTMLAttributes } from 'react';
import styled from '@emotion/styled';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  content: string;
}

export default function Button({
  content,
  ...props
}: ButtonProps): JSX.Element {
  return <Container {...props}>{content}</Container>;
}

const Container = styled.button``;
