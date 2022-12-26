import React from 'next';
import { AuthLayout, Auth, Button, Input } from 'src/components';
import { useForm } from 'react-hook-form';
import * as S from './styled';

interface RegisterFormTypes {
  id: string;
  password: string;
  confirmPassword: string;
  name: string;
  nickname: string;
  phoneNum: string;
}

export const RegisterContainer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<RegisterFormTypes>();

  const onSubmit = (props: RegisterFormTypes) => {
    console.log(props);
  };

  return (
    <AuthLayout>
      <Auth.Header>
        <Auth.Title>대시판 회원가입</Auth.Title>
        <Auth.Description>
          한세사이버보안고등학교 · 게시판 프로젝트
        </Auth.Description>
      </Auth.Header>
      <Auth.Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="아이디"
          type="text"
          {...register('id', {
            required: '올바른 아이디 또는 비밀번호를 입력해주세요.',
            minLength: {
              value: 8,
              message: '아이디는 8글자 이상이여야 합니다.',
            },
          })}
        />
        <Auth.ErrorMessage>{errors.id?.message}</Auth.ErrorMessage>
        <Input
          label="비밀번호"
          type="password"
          {...register('password', {
            required: '비밀번호를 입력해주세요.',
            minLength: {
              value: 8,
              message: '비밀번호는 8자 이상이여야 합니다,',
            },
          })}
        />
        <Auth.ErrorMessage>{errors.password?.message}</Auth.ErrorMessage>
        <Input
          label="비밀번호 확인"
          type="password"
          {...register('confirmPassword', {
            required: '비밀번호 확인을 입력해주세요.',
            validate: (value: string) => {
              if (watch('password') != value) {
                return '입력한 비밀번호와 일치하지 않습니다.';
              }
            },
          })}
        />
        <Auth.ErrorMessage>{errors.confirmPassword?.message}</Auth.ErrorMessage>
        <Input
          label="이름"
          type="text"
          {...register('name', {
            required: '이름을 입력해주세요.',
          })}
        />
        <Auth.ErrorMessage>{errors.name?.message}</Auth.ErrorMessage>
        <Input
          label="닉네임"
          type="text"
          {...register('nickname', {
            required: '닉네임을 입력해주세요.',
          })}
        />
        <Auth.ErrorMessage>{errors.nickname?.message}</Auth.ErrorMessage>
        <S.FlexDirectionRow>
          <Input
            label="전화번호"
            width="x80"
            marginTop="x2"
            type="phone"
            {...register('phoneNum', {
              required: '전화번호를 입력해주세요.',
              pattern: {
                value: /01[0-1, 7][0-9]{7,8}$/,
                message: '전화번호가 잘못되었습니다. 다시 입력해주세요.',
              },
            })}
          />
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
        <Auth.ErrorMessage>{errors.phoneNum?.message}</Auth.ErrorMessage>
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
        >
          회원가입
        </Button>
      </Auth.Bottom>
    </AuthLayout>
  );
};
