import React from 'next';
import * as S from './styled';

interface RadioGroupProps extends React.ComponentProps<typeof S.RadioElement> {
  children: React.ReactNode;
}

export const Radio = ({ children }: RadioGroupProps) => {
  return (
    <S.RadioElement>
      <input type="radio" />
      {children}
    </S.RadioElement>
  );
};
