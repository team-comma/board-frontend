import React from 'next';
import Link from 'next/link';
import { Button, Input } from 'src/components';
import * as S from './styled';

export const MainContainer = () => {
  return (
    <S.MainLayout>
      <S.MainHeader>
        <S.MainTitle>대시판</S.MainTitle>
        <Link href="/auth/login">
          <S.LinkLogin>로그인</S.LinkLogin>
        </Link>
        <S.CategoryLayout>
          <S.Category>전체</S.Category>
          <S.Category>ETC</S.Category>
          <S.Category>GAME</S.Category>
          <S.Category>DEVELOP</S.Category>
          <S.Category>STUDENT</S.Category>
          <S.Category>STUDY</S.Category>
        </S.CategoryLayout>
      </S.MainHeader>
      <S.InputContainer>
        <Input
          label="게시물 검색"
          placeholder="예) 로그인은 어떻게 하나요?"
          marginTop="x2"
        />
      </S.InputContainer>
      <S.MainContentLayout>.</S.MainContentLayout>
      <S.ContentGenerateLayout>
        <Link href="/create-post">
          <Button
            bgColor="mint"
            color="white"
            width="x105"
            height="x13"
            borderRadius="x14"
            border="none"
            fontSize="x4"
            hover="mintHover"
          >
            게시물 생성하기
          </Button>
        </Link>
      </S.ContentGenerateLayout>
    </S.MainLayout>
  );
};
