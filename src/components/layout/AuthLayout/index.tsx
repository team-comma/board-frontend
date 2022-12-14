import React from 'next';
import type * as Stitches from '@stitches/react';
import * as S from './styled';

interface AuthLayout extends Stitches.VariantProps<typeof S.AuthLayout> {
  children?: React.ReactNode;
}

export const AuthLayout = ({ children }: AuthLayout) => {
  return <S.AuthLayout>{children}</S.AuthLayout>;
};
