import React from 'react';
import * as S from './styled';

interface InputProps extends React.ComponentProps<typeof S.InputElements> {
  label?: string;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ error, label, ...props }: InputProps, ref) => (
    <>
      <>
        <S.InputLabel>{label && <div>{label}</div>}</S.InputLabel>
        <S.InputElements {...props} ref={ref} />
      </>
      <S.ErrorMessage>{error}</S.ErrorMessage>
    </>
  )
);

Input.displayName = 'Input';
