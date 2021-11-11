import React, { InputHTMLAttributes, ReactElement } from 'react';

import { Container } from './styles';

interface DefaultInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  prePend?: ReactElement;
}

const DefaultInput: React.FC<DefaultInputProps> = ({
  label,
  prePend,
  ...rest
}: DefaultInputProps) => (
  <Container htmlFor={label}>
    {label}
    <div>
      {!!prePend && prePend} <input {...rest} />
    </div>
  </Container>
);

export default DefaultInput;
