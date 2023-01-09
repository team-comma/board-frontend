import React from 'next';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import * as S from './styled';

export const Quill = () => {
  const ReactQuill = dynamic(() => import('react-quill'), {
    ssr: false,
    loading: () => <p>Loading ...</p>,
  });

  const modules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike', 'blockquote', { color: [] }],
      [{ header: '1' }, { header: '2' }, { size: [] }],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
        { align: [] },
      ],
    ],
  };

  return (
    <S.QuillElement>
      <ReactQuill modules={modules} theme="snow" style={{ height: '85%' }} />
    </S.QuillElement>
  );
};
