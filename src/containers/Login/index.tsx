import React from 'next';
import type { NextPage } from 'next';
import { AuthLayout } from 'src/components/layout';
import * as S from './styled';

const LoginPage: NextPage = () => {
  return (
    <AuthLayout>
      <S.HeaderDiv display="flex" flexDirection="column">
        <S.LoginTitle title="x6" fontWeight="bold">
          대시판 로그인
        </S.LoginTitle>
        <S.LoginDescription description="x4" margin="x0">
          한세사이버보안고등학교 • 게시판 프로젝트
        </S.LoginDescription>
      </S.HeaderDiv>
      <S.LoginForm paddingTop="x6" display="flex" flexDirection="column">
        <label htmlFor="email">아이디</label>
        <input type="email" id="email" />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" />
        <button type="submit">로그인</button>
      </S.LoginForm>
    </AuthLayout>
  );
};

export default LoginPage;
