import React from 'next';
import * as S from './styled';

interface RadioGroupProps
  extends React.ComponentProps<typeof S.RadioGroupElement> {
  label?: string;
  children: React.ReactNode;
}

export const RadioGroup = ({ label, children }: RadioGroupProps) => {
  return (
    <S.RadioGroupElement>
      <legend>{label}</legend>
      <div>{children}</div>
    </S.RadioGroupElement>
  );
};
