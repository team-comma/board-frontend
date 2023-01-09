import React from 'next';
import { useState } from 'react';
import { Button, Input, Quill, Radio, RadioGroup } from 'src/components';
import * as S from './styled';

export const PostContainer = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  const onClickToggle = () => {
    setToggle((prev: boolean) => !prev);
  };
  return (
    <S.PostContainer>
      <S.PostTable>
        <Input type="text" placeholder="제목을 입력하세요" />
        <RadioGroup label="연락 방법">
          <Radio>기타</Radio>
          <Radio>게임</Radio>
          <Radio>공부</Radio>
          <Radio>개발</Radio>
        </RadioGroup>
        <Quill />
        <Input type="file" />
        <S.PostFooter>
          <S.Private>공개/비공개</S.Private>
          <S.ToggleButton onClick={onClickToggle} toggle={toggle}>
            <S.ButtonCircle toggle={toggle} />
          </S.ToggleButton>
          <Button
            height="x10"
            bgColor="mint"
            border="none"
            borderRadius="x2"
            fontSize="x4"
            color="white"
            hover="mintHover"
          >
            생성하기
          </Button>
        </S.PostFooter>
      </S.PostTable>
    </S.PostContainer>
  );
};
