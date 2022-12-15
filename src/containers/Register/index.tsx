import React from 'next';
import { AuthLayout, Button, Input } from 'src/components';
import {
  AuthDescription,
  AuthForm,
  AuthHeader,
  AuthTitle,
  AuthBottom,
  AuthLink,
} from 'src/components/layouts/AuthLayout/styled';
import * as S from './styled';

export const RegisterContainer = () => {
  return (
    <AuthLayout>
      <AuthHeader>
        <AuthTitle>대시판 회원가입</AuthTitle>
        <AuthDescription>
          한세사이버보안고등학교 · 게시판 프로젝트
        </AuthDescription>
      </AuthHeader>
      <AuthForm>
        <Input label="아이디" />
        <Input label="비밀번호" />
        <Input label="비밀번호 확인" />
        <Input label="이름" />
        <Input label="닉네임" />
        <S.FlexDirectionRow>
          <Input label="전화번호" width="x80" marginTop="x2" />
          <Button
            bgColor="white"
            color="mint"
            fontWeight="bold"
            width="x28"
            height="x11"
            borderRadius="x2"
            border="mint"
            marginLeft="x3"
          >
            인증번호 받기
          </Button>
        </S.FlexDirectionRow>
      </AuthForm>
      <AuthBottom display="flex" flexDirection="row">
        <S.HaveAccount>이미 아이디가 있으신가요?</S.HaveAccount>
        <AuthLink href="/auth/login" marginTop="x3" marginLeft="x1">
          로그인
        </AuthLink>
        <Button
          bgColor="mint"
          color="white"
          fontWeight="bold"
          width="x20"
          height="x11"
          borderRadius="x2"
          border="none"
          marginLeft="x37"
        >
          회원가입
        </Button>
      </AuthBottom>
    </AuthLayout>
  );
};
