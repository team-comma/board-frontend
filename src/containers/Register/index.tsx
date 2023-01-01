/* eslint-disable react/prop-types */
import React from 'next';
import { AuthLayout, Auth, Button, Input } from 'src/components';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import { injectStyle } from 'react-toastify/dist/inject-style';
import * as S from './styled';
import { useRouter } from 'next/router';
import { APIErrorResponse, instance } from 'src/api';

interface RegisterFormTypes {
  id: string;
  password: string;
  confirmPassword: string;
  name: string;
  nickname: string;
}

export const RegisterContainer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<RegisterFormTypes>();

  const router = useRouter();

  if (typeof window !== 'undefined') {
    injectStyle();
  }

  const onSubmit = async (props: RegisterFormTypes) => {
    const { id, password, name, nickname } = props;

    // 이거 되면 react-query 도입 -> 해보면 좋을거 같음
    try {
      await instance.post('/register/', {
        username: id,
        password: password,
        name: name,
        nickname: nickname,
        photo: null,
      });
      setTimeout(() => {
        toast.success('회원가입이 완료되었습니다.', {
          position: toast.POSITION.TOP_RIGHT,
          theme: 'light',
          autoClose: 2000,
        });
      }, 1000);
      router.push('/login');
    } catch (error: APIErrorResponse | unknown) {
      console.log(error);
      toast.error('회원가입에 실패했습니다.', {
        position: toast.POSITION.TOP_RIGHT,
        theme: 'light',
        autoClose: 3000,
      });
    }
  };

  return (
    <AuthLayout>
      <Auth.Header>
        <Auth.Title>대시판 회원가입</Auth.Title>
        <Auth.Description>
          한세사이버보안고등학교 · 게시판 프로젝트
        </Auth.Description>
      </Auth.Header>
      <ToastContainer />
      <Auth.Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="아이디"
          type="text"
          error={errors.id?.message}
          {...register('id', {
            required: '아이디를 입력해주세요.',
            minLength: {
              value: 8,
              message: '아이디는 8글자 이상이여야 합니다.',
            },
            pattern: {
              value: /^[a-zA-Z0-9]*$/,
              message: '아이디는 영문과 숫자만 사용할 수 있습니다.',
            },
          })}
        />
        <Input
          label="비밀번호"
          type="password"
          error={errors.password?.message}
          {...register('password', {
            required: '비밀번호를 입력해주세요.',
            minLength: {
              value: 8,
              message: '비밀번호는 8자 이상이여야 합니다.',
            },
            pattern: {
              value:
                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/,
              message:
                '비밀번호는 영문과 숫자, 특수문자를 조합해서 사용해야합니다.',
            },
          })}
        />
        <Input
          label="비밀번호 확인"
          type="password"
          error={errors.confirmPassword?.message}
          {...register('confirmPassword', {
            required: '비밀번호 확인을 입력해주세요.',
            validate: (value: string) => {
              if (watch('password') != value) {
                return '입력한 비밀번호와 일치하지 않습니다.';
              }
            },
          })}
        />
        <Input
          label="이름"
          type="text"
          error={errors.name?.message}
          {...register('name', {
            required: '이름을 입력해주세요.',
            pattern: {
              value: /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/,
              message: '이름에는 한글만 입력할 수 있습니다.',
            },
          })}
        />
        <Input
          label="닉네임"
          type="text"
          error={errors.nickname?.message}
          {...register('nickname', {
            required: '닉네임을 입력해주세요.',
          })}
        />
      </Auth.Form>
      <Auth.Bottom flex="true" row="true">
        <S.HaveAccount>이미 아이디가 있으신가요?</S.HaveAccount>
        <Auth.Link href="/auth/login" marginTop="x3" marginLeft="x1">
          로그인
        </Auth.Link>
        <Button
          bgColor="mint"
          color="white"
          fontWeight="bold"
          width="x20"
          height="x11"
          borderRadius="x2"
          border="none"
          marginLeft="x37"
          hover="mintHover"
          type="submit"
          onClick={handleSubmit(onSubmit)}
        >
          회원가입
        </Button>
      </Auth.Bottom>
    </AuthLayout>
  );
};
