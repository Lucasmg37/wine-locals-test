import React, { TextareaHTMLAttributes } from 'react';

import { Container } from './styles';

interface DefaultInputProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

const TextArea: React.FC<DefaultInputProps> = ({
  label,
  ...rest
}: DefaultInputProps) => (
  <Container htmlFor={label}>
    {label}
    <div>
      <textarea {...rest} />
    </div>
  </Container>
);

export default TextArea;
