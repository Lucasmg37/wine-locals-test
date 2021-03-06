import React, { InputHTMLAttributes, ReactElement, useState } from 'react';

import { Container } from './styles';

interface DefaultInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  prePend?: ReactElement;
  error?: string | false;
}

const DefaultInput: React.FC<DefaultInputProps> = ({
  label,
  prePend,
  error,
  ...rest
}: DefaultInputProps) => {
  const [hasFocus, setHasFocus] = useState(false);

  return (
    <Container hasFocus={hasFocus} htmlFor={label}>
      {label}
      <div>
        {!!prePend && prePend}{' '}
        <input
          {...rest}
          onFocus={() => setHasFocus(true)}
          onBlur={() => setHasFocus(false)}
          id={label}
        />
      </div>
      {error && <small aria-errormessage={label}>{error}</small>}
    </Container>
  );
};

export default DefaultInput;
