import React, { TextareaHTMLAttributes, useState } from 'react';

import { Container } from './styles';

interface DefaultInputProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

const TextArea: React.FC<DefaultInputProps> = ({
  label,
  ...rest
}: DefaultInputProps) => {
  const [words, setWords] = useState(0);
  const [hasFocus, setHasFocus] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    if (rest.maxLength) {
      setWords(e.target.value.length);
    }

    if (rest.onChange) {
      rest.onChange(e);
    }
  };

  return (
    <Container hasFocus={hasFocus} htmlFor={label}>
      <span>
        {label}
        {rest.maxLength && (
          <span>
            {words}/{rest.maxLength}
          </span>
        )}
      </span>
      <div>
        <textarea
          {...rest}
          onChange={handleChange}
          onFocus={() => setHasFocus(true)}
          onBlur={() => setHasFocus(false)}
        />
      </div>
    </Container>
  );
};

export default TextArea;
