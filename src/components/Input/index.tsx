import React from 'next';
import type * as Stitches from '@stitches/react';
import * as S from './styled';

interface InputProps extends Stitches.VariantProps<typeof S.InputElements> {
  label?: string;
}

export const Input = ({ label, ...props }: InputProps) => {
  return (
    <>
      <S.InputLabel>{label && <div>{label}</div>}</S.InputLabel>
      <S.InputElements {...props} />
    </>
  );
};
