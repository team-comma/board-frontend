import React from 'next';
import { Auth, AuthLayout } from 'src/components/layouts';
import { Input, Button } from 'src/components';
import { useForm } from 'react-hook-form';
import * as S from './styled';

type LoginFormTypes = {
  username: string;
  password: string;
};

export const LoginContainer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormTypes>();

  const onSubmit = (props: LoginFormTypes) => {
    console.log(props);
  };

  return (
    <AuthLayout>
      <Auth.Header>
        <Auth.Title>대시판 로그인</Auth.Title>
        <Auth.Description>
          한세사이버보안고등학교 • 게시판 프로젝트
        </Auth.Description>
      </Auth.Header>
      <Auth.Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          label="아이디"
          {...register('username', {
            required: '올바른 아이디 또는 비밀번호를 입력해주세요.',
            minLength: {
              value: 8,
              message: '아이디는 8글자 이상이여야 합니다.',
            },
          })}
        />
        <Auth.ErrorMessage>{errors.username?.message}</Auth.ErrorMessage>
        <Input
          type="password"
          label="비밀번호"
          {...register('password', {
            required: '올바른 아이디 또는 비밀번호를 입력해주세요.',
            minLength: {
              value: 8,
              message: '비밀번호는 8자 이상이여야 합니다.',
            },
          })}
        />
        <Auth.ErrorMessage>{errors.password?.message}</Auth.ErrorMessage>
        <Auth.Bottom display="flex" justifyContent="spaceBetween">
          <Auth.Link href="/auth/register">회원가입/계정찾기</Auth.Link>
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
        </Auth.Bottom>
      </Auth.Form>
    </AuthLayout>
  );
};

export default LoginContainer;
