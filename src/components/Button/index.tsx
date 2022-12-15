import React from 'next';
import * as S from './styled';
import type * as Stitches from '@stitches/react';

interface ButtonProps extends Stitches.VariantProps<typeof S.ButtonElement> {
  children?: React.ReactNode;
}

export const Button = ({ children, ...props }: ButtonProps) => {
  return <S.ButtonElement {...props}>{children}</S.ButtonElement>;
};
