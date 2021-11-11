import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type DefaultButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const DefaultButton: React.FC<DefaultButtonProps> = ({
  children,
  ...rest
}: DefaultButtonProps) => <Container {...rest}>{children}</Container>;

export default DefaultButton;
