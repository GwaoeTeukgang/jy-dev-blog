'use client';
import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { UseFormRegisterReturn } from 'react-hook-form';

export default function PostEditor(props: UseFormRegisterReturn) {
  const plugins = 'code';
  const toolbar =
    'undo redo | styles | bold italic | alignleft aligncenter alignright alignjustify | outdent indent';

  return (
    <Editor
      id={'tinyEditor'}
      apiKey={process.env.NEXT_PUBLIC_TINYMCE_API_KEY}
      init={{
        toolbar,
        plugins,
      }}
      initialValue=""
      disabled={props.disabled}
      {...props}
    />
  );
}
