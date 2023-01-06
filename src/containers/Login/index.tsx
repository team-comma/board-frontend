/* eslint-disable react/prop-types */
import React from 'next';
import { Auth, AuthLayout } from 'src/components/layouts';
import { Input, Button } from 'src/components';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import { injectStyle } from 'react-toastify/dist/inject-style';
import { useRouter } from 'next/router';
import { APIErrorResponse, instance } from 'src/api';
import { useCookies } from 'react-cookie';
import * as S from './styled';

interface LoginFormTypes {
  id: string;
  password: string;
}

export const LoginContainer = () => {
  const [, setCookie] = useCookies(['Login_cookies']);

  const expireDate = new Date();
  expireDate.setMinutes(expireDate.getMinutes() + 10);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormTypes>();

  const router = useRouter();

  if (typeof window !== 'undefined') {
    injectStyle();
  }

  const onSubmit = async (props: LoginFormTypes) => {
    const { id, password } = props;
    try {
      const useLogin = await instance.post('/login/', {
        username: id,
        password: password,
      });
      toast.success('로그인 성공!', {
        position: toast.POSITION.TOP_RIGHT,
        theme: 'light',
        autoClose: 2000,
      });
      setCookie(
        'Login_cookies',
        {
          refresh: useLogin.data.result.refresh,
        },
        {
          path: '/',
          expires: expireDate,
          secure: true,
        }
      );
      router.push('/');
    } catch (error: APIErrorResponse | unknown) {
      console.log(error);
      toast.error('로그인 실패!', {
        position: toast.POSITION.TOP_RIGHT,
        theme: 'light',
        autoClose: 3000,
      });
    }
  };

  return (
    <AuthLayout>
      <Auth.Header>
        <Auth.Title>대시판 로그인</Auth.Title>
        <Auth.Description>
          한세사이버보안고등학교 • 게시판 프로젝트
        </Auth.Description>
      </Auth.Header>
      <ToastContainer />
      <Auth.Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          label="아이디"
          error={errors.id?.message}
          {...register('id', {
            required: '올바른 아이디 또는 비밀번호를 입력해주세요.',
            minLength: {
              value: 8,
              message: '아이디는 8글자 이상이여야 합니다.',
            },
          })}
        />
        <Input
          type="password"
          label="비밀번호"
          error={errors.password?.message}
          {...register('password', {
            required: '올바른 아이디 또는 비밀번호를 입력해주세요.',
            minLength: {
              value: 8,
              message: '비밀번호는 8자 이상이여야 합니다.',
            },
          })}
        />
        <Auth.Bottom flex="true" spaceBetween="true">
          <Auth.Link href="/auth/register">회원가입/계정찾기</Auth.Link>
          <Button
            width="x16"
            height="x11"
            bgColor="mint"
            color="white"
            fontWeight="bold"
            border="none"
            borderRadius="x2"
            onClick={handleSubmit(onSubmit)}
          >
            로그인
          </Button>
        </Auth.Bottom>
      </Auth.Form>
    </AuthLayout>
  );
};

export default LoginContainer;
