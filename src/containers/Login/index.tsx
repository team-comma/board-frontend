import React from 'next';
import { AuthLayout } from 'src/components/layouts';
import { Input, Button } from 'src/components';
import {
  AuthDescription,
  AuthForm,
  AuthHeader,
  AuthTitle,
  AuthBottom,
  AuthLink,
} from 'src/components/layouts/AuthLayout/styled';
import * as S from './styled';

export const LoginContainer = () => {
  return (
    <AuthLayout>
      <AuthHeader>
        <AuthTitle>대시판 로그인</AuthTitle>
        <AuthDescription>
          한세사이버보안고등학교 • 게시판 프로젝트
        </AuthDescription>
      </AuthHeader>
      <AuthForm>
        <Input label="아이디" />
        <Input label="비밀번호" />
        <AuthBottom display="flex" justifyContent="spaceBetween">
          <AuthLink>회원가입/계정찾기</AuthLink>
          <Button
            width="x16"
            height="x11"
            bgColor="mint"
            color="white"
            fontWeight="bold"
            border="none"
            borderRadius="x2"
          >
            로그인
          </Button>
        </AuthBottom>
      </AuthForm>
    </AuthLayout>
  );
};

export default LoginContainer;
